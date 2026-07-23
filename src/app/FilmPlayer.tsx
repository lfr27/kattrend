"use client";

// Founder film — YouTube-backed, but presented with our own controls
// (play/pause, mute + volume, seek, fullscreen). The video autoplays muted
// and loops; YouTube's own chrome is hidden (controls=0) and a transparent
// shield blocks YouTube's hover UI so the frame reads as a Kattrend player.
//
// NOTE: set VIDEO_ID to the Kattrend film's YouTube id (the part after
// `watch?v=` or `youtu.be/`).
import { useEffect, useRef, useState, type ChangeEvent } from "react";

const VIDEO_ID = "F6iCqH1D75M"; // YouTube video id (from watch?v=…)

// Minimal typings for the bits of the IFrame API we actually call.
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  setVolume(v: number): void;
  getCurrentTime(): number;
  getDuration(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  setOption(module: string, option: string, value: unknown): void;
  destroy(): void;
}
interface YTNamespace {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      host?: string;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (e: { target: YTPlayer }) => void;
        onStateChange?: (e: { data: number; target: YTPlayer }) => void;
        onApiChange?: (e: { target: YTPlayer }) => void;
      };
    },
  ) => YTPlayer;
}
declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

// Load the IFrame API script once, shared across any players on the page.
let apiPromise: Promise<YTNamespace> | null = null;
function loadYouTubeAPI(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise<YTNamespace>((resolve) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        if (window.YT) resolve(window.YT);
      };
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    });
  }
  return apiPromise;
}

export default function FilmPlayer() {
  const frameRef = useRef<HTMLDivElement>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1); // 0..1
  const [progress, setProgress] = useState(0); // 0..1
  const [fullscreen, setFullscreen] = useState(false);

  // Build the player once.
  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;
    const target = document.createElement("div"); // YT replaces this node with its iframe
    holder.appendChild(target);
    let cancelled = false;
    let poll: number | undefined;

    void loadYouTubeAPI().then((YT) => {
      if (cancelled) return;
      playerRef.current = new YT.Player(target, {
        videoId: VIDEO_ID,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          fs: 0,
          disablekb: 1,
          cc_load_policy: 0, // request captions off by default
          loop: 1,
          playlist: VIDEO_ID, // required for `loop` to work on a single video
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            poll = window.setInterval(() => {
              const p = playerRef.current;
              if (!p) return;
              const d = p.getDuration();
              if (d > 0) setProgress(p.getCurrentTime() / d);
            }, 250);
          },
          onStateChange: (e) => setPlaying(e.data === 1), // 1 === PLAYING
          onApiChange: (e) => {
            // Captions module just loaded — clear the active track so no
            // closed captions show, regardless of the viewer's YouTube prefs.
            try {
              e.target.setOption("captions", "track", {});
            } catch {
              /* captions module not ready */
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (poll) window.clearInterval(poll);
      playerRef.current?.destroy();
      playerRef.current = null;
      target.remove();
    };
  }, []);

  // Keep the fullscreen icon in sync with Esc / native exit.
  useEffect(() => {
    const onFs = () => setFullscreen(document.fullscreenElement === frameRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  };

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;
    if (muted) {
      p.unMute();
      if (volume === 0) {
        p.setVolume(100);
        setVolume(1);
      }
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const p = playerRef.current;
    if (!p) return;
    const vol = Number(e.target.value);
    p.setVolume(vol * 100);
    setVolume(vol);
    if (vol === 0) {
      p.mute();
      setMuted(true);
    } else if (muted) {
      p.unMute();
      setMuted(false);
    }
  };

  const onSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const p = playerRef.current;
    if (!p) return;
    const frac = Number(e.target.value);
    const d = p.getDuration();
    if (d > 0) p.seekTo(frac * d, true);
    setProgress(frac);
  };

  const toggleFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  const seekPct = progress * 100;
  const volPct = (muted ? 0 : volume) * 100;
  const fill = (pct: number) =>
    `linear-gradient(to right, var(--oxblood) ${pct}%, rgba(243,241,236,.28) ${pct}%)`;

  return (
    <div className="frame" ref={frameRef}>
      <div className="yt-holder" ref={holderRef} />

      {/* transparent layer: captures clicks (toggle play) + blocks YouTube's hover UI */}
      <button
        type="button"
        className="yt-shield"
        onClick={togglePlay}
        aria-label={playing ? "Pause film" : "Play film"}
        tabIndex={-1}
      />

      <div className="vctl">
        <button
          type="button"
          className="vbtn"
          onClick={togglePlay}
          aria-label={playing ? "Pause film" : "Play film"}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10-6.5a1 1 0 0 0 0-1.7l-10-6.5A1 1 0 0 0 8 5.5Z" />
            </svg>
          )}
        </button>

        <input
          className="vseek"
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={progress}
          onChange={onSeek}
          aria-label="Seek"
          style={{ background: fill(seekPct) }}
        />

        <button
          type="button"
          className="vbtn"
          onClick={toggleMute}
          aria-label={muted || volume === 0 ? "Unmute" : "Mute"}
        >
          {muted || volume === 0 ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" />
              <path
                d="M16 9l5 6M21 9l-5 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" />
              <path
                d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <input
          className="vvol"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={muted ? 0 : volume}
          onChange={onVolume}
          aria-label="Volume"
          style={{ background: fill(volPct) }}
        />

        <button
          type="button"
          className="vbtn"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          {fullscreen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 4v4a1 1 0 0 1-1 1H4M15 4v4a1 1 0 0 0 1 1h4M9 20v-4a1 1 0 0 0-1-1H4M15 20v-4a1 1 0 0 0 1-1h4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 0-1 1h-4" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
