import React, { useState } from 'react';
import { Play, Eye, Heart, Share2, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { VideoItem } from '../types';
import { thumbnailImageProps } from '../utils/responsiveImage';

interface IPhoneMockupProps {
  video: VideoItem;
  buttonLabel: string;
  onSelectVideo: (video: VideoItem) => void;
}

export const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ video, buttonLabel, onSelectVideo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center group justify-center">
      {/* iPhone Frame Container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelectVideo(video)}
        className="relative w-[260px] sm:w-[270px] h-[520px] sm:h-[540px] bg-[#1a1429] rounded-[48px] p-3 shadow-2xl border-4 border-slate-700/60 shadow-purple-950/40 hover:border-[#8F5BFF]/70 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-purple-600/30 flex-shrink-0"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1.5 shadow-md">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/80" />
        </div>

        {/* Side Buttons Visual Details */}
        <div className="absolute -left-[7px] top-24 w-[3px] h-8 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[7px] top-36 w-[3px] h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[7px] top-52 w-[3px] h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-700 rounded-r-md" />

        {/* Screen Area */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-slate-950 flex flex-col justify-between z-20 border border-white/10">
          
          {/* Background Image Preview */}
          <div className="absolute inset-0 z-0 bg-slate-900">
            <img
              {...thumbnailImageProps(video.thumbnailUrl)}
              alt={video.title}
              width={1284}
              height={2270}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
          </div>

          {/* Top Bar inside Screen */}
          <div className="relative z-10 pt-7 px-4 flex items-center justify-between text-white text-[11px] font-semibold tracking-wider">
            <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px]">
              REEL
            </span>
            {video.brand && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#8F5BFF] text-white text-[10px] font-bold shadow-sm">
                {video.brand}
              </span>
            )}
          </div>

          {/* Center Play Button Overlay */}
          <div className="relative z-10 my-auto flex items-center justify-center">
            <div
              className={`w-14 h-14 rounded-full bg-[#8F5BFF]/90 backdrop-blur-md flex items-center justify-center text-white shadow-xl shadow-purple-600/50 transition-all duration-300 ${
                isHovered ? 'scale-115 bg-[#8F5BFF]' : 'scale-100'
              }`}
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>

          {/* Right Action Icons (Reels Style) */}
          <div className="absolute right-3 bottom-16 z-10 flex flex-col items-center gap-3 text-white text-[10px]">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                <Heart className="w-4 h-4 text-red-400 fill-red-400/30" />
              </div>
              <span>{video.likes || '32.4K'}</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span>{video.comments || '1.8K'}</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                <Share2 className="w-4 h-4 text-white" />
              </div>
              <span>{video.shares || '12.4K'}</span>
            </div>
          </div>

          {/* Bottom Video Metadata */}
          <div className="relative z-10 p-4 pr-12 text-left space-y-1">
            <div className="flex items-center gap-2 text-[10px] text-purple-300 font-medium">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {video.views}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
