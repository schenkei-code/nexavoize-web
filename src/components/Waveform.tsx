"use client";

import { useEffect, useState } from "react";

type Props = {
  bars?: number;
  className?: string;
};

/**
 * Animated waveform visual — pure CSS driven after mount.
 * Each bar oscillates with a staggered delay and a randomised height.
 */
export function Waveform({ bars = 48, className = "" }: Props) {
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: bars }, () => 0.4),
  );

  useEffect(() => {
    setHeights(Array.from({ length: bars }, () => 0.35 + Math.random() * 0.65));
  }, [bars]);

  return (
    <div
      className={`flex items-center justify-center gap-[3px] w-full h-full ${className}`}
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className="inline-block rounded-full"
          style={{
            width: 3,
            height: `${Math.round(h * 100)}%`,
            background: "var(--brand-gradient)",
            opacity: 0.75 + (h - 0.35) * 0.35,
            transformOrigin: "center",
            animation: `wave ${0.8 + (i % 7) * 0.1}s ease-in-out ${(i * 0.03).toFixed(2)}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
