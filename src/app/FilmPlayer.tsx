"use client";

// Founder film — self-hosted MP4 (public/kat.mp4) presented with our own
// controls (play/pause, seek, mute + volume, fullscreen). No third-party
// player, no external branding. The film autoplays muted and loops; the
// controls let a visitor take over and unmute.
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import type { Dictionary } from "./i18n";

export default function FilmPlayer({ labels }: { labels: Dictionary["player"] }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false); // starts unmuted (autoplay/muted off); synced on load
  const [volume, setVolume] = useState(1); // 0..1
  const [progress, setProgress] = useState(0); // 0..1
  const [fullscreen, setFullscreen] = useState(false);

  // Keep the fullscreen icon in sync with Esc / native exit.
  useEffect(() => {
    const onFs = () => setFullscreen(document.fullscreenElement === frameRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    if (!next && v.volume === 0) v.volume = 1;
  };

  const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const vol = Number(e.target.value);
    v.volume = vol;
    v.muted = vol === 0;
  };

  const onSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const frac = Number(e.target.value);
    v.currentTime = frac * v.duration;
    setProgress(frac);
  };

  const toggleFullscreen = () => {
    const el = frameRef.current;
    const v = videoRef.current;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else if (el?.requestFullscreen) {
      void el.requestFullscreen();
    } else {
      // iOS Safari: only the <video> itself can go fullscreen (native UI).
      (v as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null)?.webkitEnterFullscreen?.();
    }
  };

  // Keep UI in sync with the element (covers blocked autoplay, keyboard, etc.).
  const syncVolume = () => {
    const v = videoRef.current;
    if (!v) return;
    setMuted(v.muted);
    setVolume(v.volume);
  };
  const syncProgress = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress(v.currentTime / v.duration);
  };

  const seekPct = progress * 100;
  const volPct = (muted ? 0 : volume) * 100;
  const fill = (pct: number) =>
    `linear-gradient(to right, var(--oxblood) ${pct}%, rgba(243,241,236,.28) ${pct}%)`;

  return (
    <div className="frame" ref={frameRef}>
      <video
        ref={videoRef}
        className="film-video"
        //autoPlay
        //muted
        loop
        playsInline
        preload="auto"
        aria-label={labels.filmAria}
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={syncVolume}
        onTimeUpdate={syncProgress}
        onLoadedMetadata={syncVolume}
      >
        <source src="/cat.mp4" type="video/mp4" />
        {labels.fallback}
      </video>

      {!playing && (
        <button
          type="button"
          className="film-poster"
          onClick={togglePlay}
          aria-label={labels.play}
        >
          <span className="film-poster-ring">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10-6.5a1 1 0 0 0 0-1.7l-10-6.5A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      )}

      <div className="vctl">
        <button
          type="button"
          className="vbtn"
          onClick={togglePlay}
          aria-label={playing ? labels.pause : labels.play}
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
          aria-label={labels.seek}
          style={{ background: fill(seekPct) }}
        />

        <button
          type="button"
          className="vbtn"
          onClick={toggleMute}
          aria-label={muted || volume === 0 ? labels.unmute : labels.mute}
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
          aria-label={labels.volume}
          style={{ background: fill(volPct) }}
        />

        <button
          type="button"
          className="vbtn"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? labels.exitFullscreen : labels.fullscreen}
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
