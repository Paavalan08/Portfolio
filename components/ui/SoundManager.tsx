"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Web Audio API Synthesizer (pure code, zero external audio assets)
class AudioSynthesizer {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public playHover() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // AudioContext policy safe fallback
    }
  }

  public playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // AudioContext policy safe fallback
    }
  }
}

export const soundFx = new AudioSynthesizer();

export function SoundToggle() {
  const [isSoundOn, setIsSoundOn] = useState(false);

  const toggleSound = () => {
    const newState = !isSoundOn;
    setIsSoundOn(newState);
    soundFx.enabled = newState;
    if (newState) {
      soundFx.playClick();
    }
  };

  return (
    <button
      onClick={toggleSound}
      className={`relative p-2 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer text-xs font-mono font-semibold ${
        isSoundOn
          ? "bg-indigo-50 border-indigo-300 text-indigo-700 shadow-xs shadow-indigo-500/10"
          : "bg-white/80 border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
      }`}
      title={isSoundOn ? "Mute interactive audio" : "Enable futuristic sound effects"}
      aria-label="Toggle interactive audio sound effects"
    >
      {isSoundOn ? (
        <>
          <Volume2 className="w-4 h-4 text-indigo-600 animate-pulse" />
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-2.5 bg-indigo-600 animate-bounce rounded-full" />
            <span className="w-0.5 h-3.5 bg-indigo-500 animate-bounce rounded-full [animation-delay:0.15s]" />
            <span className="w-0.5 h-2 bg-indigo-400 animate-bounce rounded-full [animation-delay:0.3s]" />
          </div>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4" />
          <span className="hidden sm:inline text-[11px]">SFX</span>
        </>
      )}
    </button>
  );
}
