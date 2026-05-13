import { ReactNode } from 'react';
import { Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

interface PlaceholderProps {
  className?: string;
  type?: 'image' | 'video';
  text?: string;
}

export function Placeholder({ className = '', type = 'image', text }: PlaceholderProps) {
  return (
    <div className={`bg-stone-200 flex flex-col items-center justify-center text-stone-400 rounded-xl overflow-hidden ${className}`}>
      {type === 'image' ? (
        <ImageIcon size={48} className="opacity-50 mb-2" />
      ) : (
        <VideoIcon size={48} className="opacity-50 mb-2" />
      )}
      {text && <span className="text-sm font-medium tracking-wide uppercase opacity-70">{text}</span>}
    </div>
  );
}
