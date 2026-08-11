import React, { useState } from 'react';
import { X, Play, Pause, Eye, Heart, Share2, ExternalLink, Edit3, Check } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onUpdateVideo: (updatedVideo: VideoItem) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onUpdateVideo }) => {
  if (!video) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState(video.videoUrl);
  const [editedTitle, setEditedTitle] = useState(video.title);
  const [editedViews, setEditedViews] = useState(video.views);

  const isSocialUrl =
    video.videoUrl.includes('vt.tiktok.com') ||
    video.videoUrl.includes('tiktok.com') ||
    video.videoUrl.includes('instagram.com') ||
    video.videoUrl.includes('ig.me') ||
    (video.videoUrl.startsWith('http') &&
     !video.videoUrl.endsWith('.mp4') &&
     !video.videoUrl.endsWith('.webm') &&
     !video.videoUrl.endsWith('.mov') &&
     !video.videoUrl.includes('mixkit'));

  const handlePlayClick = () => {
    if (isSocialUrl) {
      window.open(video.videoUrl, '_blank', 'noopener,noreferrer');
    } else {
      setIsPlaying(true);
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateVideo({
      ...video,
      videoUrl: editedUrl,
      title: editedTitle,
      views: editedViews
    });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-[2.5rem] bg-white border border-purple-100 overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-[#8F5BFF] text-white transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Area */}
        <div className="relative w-full md:w-3/5 aspect-[9/16] max-h-[75vh] bg-black flex items-center justify-center overflow-hidden group">
          {/* Cover thumbnail view when not playing or if social URL */}
          {isSocialUrl ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-950">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4 p-6 text-center">
                <button
                  onClick={handlePlayClick}
                  className="w-16 h-16 rounded-full bg-[#8F5BFF] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Video in New Tab</span>
                </a>
              </div>
            </div>
          ) : !isPlaying ? (
            <div className="relative w-full h-full flex items-center justify-center bg-slate-950">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                <button
                  onClick={handlePlayClick}
                  className="w-16 h-16 rounded-full bg-[#8F5BFF] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
              </div>
            </div>
          ) : video.videoUrl.endsWith('.mp4') || 
           video.videoUrl.endsWith('.webm') || 
           video.videoUrl.endsWith('.mov') || 
           video.videoUrl.includes('mixkit') || 
           video.videoUrl.startsWith('/src/') || 
           video.videoUrl.startsWith('/assets/') ||
           video.videoUrl.startsWith('data:') ||
           video.videoUrl.startsWith('blob:') ? (
            <video
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              autoPlay
              loop
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video Info Sidebar */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-[#8F5BFF] text-xs font-bold uppercase tracking-wider">
                {video.category} Content
              </span>
              {video.brand && (
                <span className="px-3 py-1 rounded-full bg-[#8F5BFF] text-white text-xs font-bold">
                  {video.brand}
                </span>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveEdit} className="space-y-3 pt-2">
                <div>
                  <label className="text-xs text-[#2D2442] font-bold">Video Title</label>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-[#2D2442] text-sm focus:outline-none focus:border-[#8F5BFF] font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#2D2442] font-bold">Video / Embed URL</label>
                  <input
                    type="url"
                    value={editedUrl}
                    onChange={(e) => setEditedUrl(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-[#2D2442] text-sm focus:outline-none focus:border-[#8F5BFF] font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#2D2442] font-bold">Views Count</label>
                  <input
                    type="text"
                    value={editedViews}
                    onChange={(e) => setEditedViews(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-[#2D2442] text-sm focus:outline-none focus:border-[#8F5BFF] font-medium"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#8F5BFF] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5" /> Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 rounded-xl bg-purple-50 text-[#2D2442] text-xs font-bold border border-purple-100"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#2D2442] font-['Poppins'] leading-snug">
                  {video.title}
                </h3>
                <p className="text-sm text-[#2D2442]/80 leading-relaxed font-normal">
                  {video.description || 'Relatable short-form video content.'}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#8F5BFF] font-bold pt-2 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {video.views} Views
                  </span>
                  <span>•</span>
                  <span>{video.likes || '34K'} Likes</span>
                  {video.comments && (
                    <>
                      <span>•</span>
                      <span>{video.comments} Comments</span>
                    </>
                  )}
                  {video.shares && (
                    <>
                      <span>•</span>
                      <span>{video.shares} Shares</span>
                    </>
                  )}
                  {video.duration && (
                    <>
                      <span>•</span>
                      <span>{video.duration}</span>
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="space-y-3 pt-6 border-t border-purple-100">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-[#8F5BFF] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit This Video Link & Stats</span>
              </button>
            )}

            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#8F5BFF] hover:bg-[#7b46eb] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Video in New Tab</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
