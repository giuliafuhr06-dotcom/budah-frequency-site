import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  BRAND_NAME,
  CHECKOUT_URL,
  PRICE,
  BUY_BUTTON_APPEAR_AT,
  BUY_BUTTON_APPEAR_SECONDS,
  testMode,
  trackMetaPixel,
  handleCheckoutClick,
} from '../config';
import { Volume2, Play, Maximize2, RotateCcw, ShieldCheck, Lock, Sparkles } from 'lucide-react';

declare global {
  interface Window {
    playerjs?: {
      Player: new (element: HTMLIFrameElement) => BunnyPlayerJsInstance;
    };
  }
}

interface BunnyPlayerJsInstance {
  on(event: string, callback: (data?: any) => void): void;
  off(event: string, callback?: (data?: any) => void): void;
  play(): void;
  pause(): void;
  mute(): void;
  unmute(): void;
  setCurrentTime(seconds: number): void;
  getCurrentTime(callback: (seconds: number) => void): void;
  getDuration(callback: (duration: number) => void): void;
  supports(method: string, feature: string): boolean;
}

export const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<BunnyPlayerJsInstance | null>(null);

  // Video state
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [hasStartedWithAudio, setHasStartedWithAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Resume prompt state
  const [savedResumeTime, setSavedResumeTime] = useState<number | null>(null);
  const [showResumePrompt, setShowResumePrompt] = useState(false);

  // Delayed Buy Button State
  const [buttonUnlocked, setButtonUnlocked] = useState<boolean>(() => {
    if (testMode) return true;
    try {
      return localStorage.getItem('budah_buy_button_unlocked') === 'true';
    } catch {
      return false;
    }
  });

  // Track fired milestone events to ensure exactly once execution
  const trackedMilestonesRef = useRef<{ 25: boolean; 50: boolean; 75: boolean }>({
    25: false,
    50: false,
    75: false,
  });

  // Check saved time on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('budah_vsl_last_time');
      if (saved) {
        const parsed = parseFloat(saved);
        if (!isNaN(parsed) && parsed > 15) {
          setSavedResumeTime(parsed);
          setShowResumePrompt(true);
        }
      }
    } catch (e) {
      console.warn('LocalStorage access issue:', e);
    }
  }, []);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Eased progress calculation: progresses faster at first, gently slows towards end
  const calculateEasedProgress = (curr: number, dur: number): number => {
    if (!dur || dur <= 0) return 0;
    const rawProgress = Math.min(1, Math.max(0, curr / dur));
    // Easing power: 0.8 gives an inviting perceived pace without distortion
    return Math.min(100, Math.pow(rawProgress, 0.82) * 100);
  };

  // Trigger button unlock
  const unlockBuyButton = useCallback(() => {
    setButtonUnlocked(true);
    try {
      localStorage.setItem('budah_buy_button_unlocked', 'true');
    } catch (e) {
      console.warn('Could not persist button unlock:', e);
    }
  }, []);

  // Initialize Bunny Player.js
  useEffect(() => {
    let fallbackTimer: NodeJS.Timeout | null = null;
    let fallbackTickInterval: NodeJS.Timeout | null = null;
    let localSecondsCount = 0;

    const setupPlayer = () => {
      if (!iframeRef.current) return;

      if (window.playerjs && window.playerjs.Player) {
        try {
          const player = new window.playerjs.Player(iframeRef.current);
          playerRef.current = player;

          player.on('ready', () => {
            setIsPlayerReady(true);
            try {
              player.getDuration((d: number) => {
                if (d && !isNaN(d)) setDuration(d);
              });
            } catch (err) {
              console.warn('Could not get duration:', err);
            }
          });

          player.on('timeupdate', (data: any) => {
            const sec = data?.seconds ?? data?.currentTime ?? 0;
            const dur = data?.duration ?? 0;

            if (typeof sec === 'number' && !isNaN(sec)) {
              setCurrentTime(sec);

              // Save to localStorage every ~5 seconds
              if (Math.floor(sec) % 5 === 0 && sec > 5) {
                try {
                  localStorage.setItem('budah_vsl_last_time', sec.toString());
                } catch {
                  // ignore
                }
              }

              // Check delayed button unlock criteria
              if (!buttonUnlocked && (testMode || sec >= BUY_BUTTON_APPEAR_SECONDS)) {
                unlockBuyButton();
              }
            }

            if (typeof dur === 'number' && !isNaN(dur) && dur > 0) {
              setDuration(dur);

              // Meta Pixel milestones based on REAL playback time
              const progressFraction = sec / dur;

              if (progressFraction >= 0.25 && !trackedMilestonesRef.current[25]) {
                trackedMilestonesRef.current[25] = true;
                trackMetaPixel('trackCustom', 'VideoWatched25', {
                  seconds: Math.round(sec),
                  brand: BRAND_NAME,
                });
              }

              if (progressFraction >= 0.50 && !trackedMilestonesRef.current[50]) {
                trackedMilestonesRef.current[50] = true;
                trackMetaPixel('trackCustom', 'VideoWatched50', {
                  seconds: Math.round(sec),
                  brand: BRAND_NAME,
                });
              }

              if (progressFraction >= 0.75 && !trackedMilestonesRef.current[75]) {
                trackedMilestonesRef.current[75] = true;
                trackMetaPixel('trackCustom', 'VideoWatched75', {
                  seconds: Math.round(sec),
                  brand: BRAND_NAME,
                });
              }
            }
          });
        } catch (err) {
          console.warn('Player.js instantiation issue, using silent fallback:', err);
        }
      }
    };

    // 8-second safety fallback: if Player.js takes too long or fails, keep iframe visible and advance background timer
    fallbackTimer = setTimeout(() => {
      if (!isPlayerReady) {
        setIsPlayerReady(true);
        // Start background fallback counter so delayed purchase is guaranteed to reveal
        fallbackTickInterval = setInterval(() => {
          localSecondsCount += 1;
          if (!buttonUnlocked && (testMode || localSecondsCount >= BUY_BUTTON_APPEAR_SECONDS)) {
            unlockBuyButton();
          }
        }, 1000);
      }
    }, 8000);

    // Check if playerjs script is already in window, else poll briefly
    if (typeof window !== 'undefined' && window.playerjs) {
      setupPlayer();
    } else {
      const checkScript = setInterval(() => {
        if (window.playerjs) {
          clearInterval(checkScript);
          setupPlayer();
        }
      }, 300);
      setTimeout(() => clearInterval(checkScript), 7500);
    }

    return () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (fallbackTickInterval) clearInterval(fallbackTickInterval);
    };
  }, [buttonUnlocked, unlockBuyButton, isPlayerReady]);

  // Handle "Tap to listen"
  const handleStartAudio = () => {
    setHasStartedWithAudio(true);
    setShowResumePrompt(false);

    if (playerRef.current) {
      try {
        playerRef.current.unmute();
        playerRef.current.setCurrentTime(0);
        playerRef.current.play();
      } catch (err) {
        console.warn('Audio unmute error:', err);
      }
    }
  };

  // Handle Resume
  const handleResume = (resume: boolean) => {
    setShowResumePrompt(false);
    setHasStartedWithAudio(true);

    if (playerRef.current) {
      try {
        playerRef.current.unmute();
        if (resume && savedResumeTime && savedResumeTime > 0) {
          playerRef.current.setCurrentTime(savedResumeTime);
        } else {
          playerRef.current.setCurrentTime(0);
        }
        playerRef.current.play();
      } catch (err) {
        console.warn('Player resume error:', err);
      }
    }
  };

  // Toggle Fullscreen on wrapper
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
      } else {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    } catch {
      // ignore
    }
  };

  // Smooth fake progress percentage
  const progressPercent = calculateEasedProgress(currentTime, duration || (BUY_BUTTON_APPEAR_SECONDS * 1.25));

  return (
    <section id="vsl-player-section" className="relative py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Decorative sound wave halo behind player */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-teal-500/10 via-indigo-600/15 to-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Urgent/Inspiring Header pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium mb-4 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          <span>Special Video Presentation: Sound Frequency Harmony</span>
        </div>

        <h2 className="font-serif-luxury text-2xl sm:text-4xl text-center text-white tracking-wide max-w-2xl mb-3">
          Experience the Resonant Power of <span className="text-amber-300 italic">{BRAND_NAME}</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base text-center max-w-xl mb-6 font-light">
          Ensure your sound is turned on. Watch the brief presentation below to understand how these 12 pure Solfeggio frequencies work together.
        </p>

        {/* Player Container: 9:16 vertical aspect ratio */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[380px] sm:max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-indigo-950/60 border border-indigo-500/20 bg-slate-950"
          style={{ aspectRatio: '9/16', maxHeight: '82vh' }}
        >
          {/* Bunny iframe embed - using exact embed URL with responsive & autoplay */}
          <iframe
            ref={iframeRef}
            src="https://player.mediadelivery.net/embed/778341/b6c60dd6-7ad5-4351-9ca0-83c78f3ae11d?autoplay=true&loop=false&muted=true&preload=true&responsive=true"
            loading="lazy"
            title={`${BRAND_NAME} Official Video Presentation`}
            className="w-full h-full border-0 absolute top-0 left-0"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
            allowFullScreen
          />

          {/* TAP TO LISTEN / UNMUTE OVERLAY */}
          {!hasStartedWithAudio && !showResumePrompt && (
            <div
              onClick={handleStartAudio}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-black/50 p-6 text-center"
              role="button"
              tabIndex={0}
              aria-label="Tap to unmute and listen to the presentation"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/40 animate-gold-pulse">
                  <Volume2 className="w-9 h-9 text-slate-950" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-amber-300 animate-ping opacity-60" />
              </div>
              <p className="text-white text-lg sm:text-xl font-serif-luxury font-semibold tracking-wide drop-shadow-md">
                Tap to Unmute &amp; Listen
              </p>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-[240px]">
                High-fidelity audio enabled. Headphones or clean speakers recommended.
              </p>
              <span className="mt-4 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-medium text-amber-200">
                Click anywhere to begin
              </span>
            </div>
          )}

          {/* RESUME MODAL PROMPT OVERLAY */}
          {showResumePrompt && (
            <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-slate-950/85 backdrop-blur-md p-6 text-center animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-indigo-900/60 border border-indigo-400/40 flex items-center justify-center mb-4 text-indigo-300">
                <RotateCcw className="w-7 h-7" />
              </div>
              <h3 className="font-serif-luxury text-xl text-white font-semibold mb-2">
                Welcome Back
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-[260px] mb-6">
                You previously watched up to <span className="text-amber-300 font-medium">{formatTime(savedResumeTime || 0)}</span>. Would you like to pick up where you left off?
              </p>
              <div className="flex flex-col w-full max-w-[220px] gap-2.5">
                <button
                  type="button"
                  onClick={() => handleResume(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-md hover:brightness-105 active:scale-95 transition"
                >
                  Continue ({formatTime(savedResumeTime || 0)})
                </button>
                <button
                  type="button"
                  onClick={() => handleResume(false)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 font-medium text-xs transition active:scale-95"
                >
                  Start Over from 0:00
                </button>
              </div>
            </div>
          )}

          {/* TRANSPARENT SHIELD LAYER:
              Placed over iframe after user interacts, preventing pausing and native timeline scrubbing
              while leaving the fullscreen trigger clickable */}
          {hasStartedWithAudio && (
            <div
              className="absolute inset-0 z-20 pointer-events-auto select-none"
              style={{
                // transparent hit-shield to prevent pauses / scrubber abuse
                background: 'transparent',
              }}
              title="Presentation in progress"
            >
              {/* Fullscreen toggle button on top right */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-md transition pointer-events-auto"
                aria-label="Toggle Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* FAKE SMOOTH PROGRESS BAR (Non-interactive, eased curve) */}
          <div className="absolute bottom-0 left-0 right-0 z-25 bg-slate-950/80 backdrop-blur-xs py-1.5 px-3 border-t border-white/5">
            <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 via-amber-400 to-amber-300 transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Small note below the player: skipping ahead is not allowed */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-4 text-center">
          <Lock className="w-3.5 h-3.5 text-amber-400/80 inline-block flex-shrink-0" />
          <span>Skipping ahead is not allowed. Please enjoy the full presentation.</span>
        </div>

        {/* DELAYED BUY BUTTON:
            Fades in when video reaches 21:55 (or testMode). Stays visible permanently once unlocked. */}
        <div className="w-full max-w-md mt-6 min-h-[90px] flex flex-col items-center justify-center">
          {buttonUnlocked ? (
            <div className="w-full flex flex-col items-center animate-fade-in transition-all duration-700">
              <button
                type="button"
                onClick={() => handleCheckoutClick('delayed_vsl_button')}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-lg sm:text-xl tracking-wide shadow-2xl shadow-amber-500/40 hover:brightness-105 active:scale-[0.98] transition flex items-center justify-center gap-3 animate-gold-pulse group"
              >
                <Sparkles className="w-5 h-5 text-slate-950 fill-amber-500 transition-transform group-hover:rotate-12" />
                <span>Get Instant Access – Only {PRICE}</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  7-Day Full Guarantee
                </span>
                <span>•</span>
                <span>12 High-Res Audio MP3s</span>
                <span>•</span>
                <span>Instant Access</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Special offer unlocks automatically as the video progresses ({BUY_BUTTON_APPEAR_AT})</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
