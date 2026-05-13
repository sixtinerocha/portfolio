import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoTileProps {
  src: string;
  poster: string;
  ariaLabel?: string;
}

/**
 * Lazy, native video tile.
 *
 * - Before click: pure <img> poster, ZERO video bytes loaded.
 * - On click: swaps in-place to a native <video controls autoPlay>.
 *   Native controls handle play/pause/mute/fullscreen.
 * - `object-contain` + `bg-black` keep the original aspect ratio
 *   when the user goes fullscreen (no crop).
 */
export function VideoTile({ src, poster, ariaLabel }: VideoTileProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <video
        src={src}
        controls
        autoPlay
        playsInline
        preload="auto"
        className="w-full h-full object-contain bg-black rounded-2xl"
        onEnded={() => setActive(false)}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={ariaLabel ?? 'Lire la vidéo'}
      className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer block bg-stone-200"
    >
      <img
        src={poster}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-stone-900/0 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/60 transition-transform duration-300 group-hover:scale-110">
          <Play className="w-4 h-4 md:w-5 md:h-5 text-stone-900 ml-0.5" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}

// Keep the old export name as an alias to avoid stale imports breaking.
export const VideoPlayer = VideoTile;
