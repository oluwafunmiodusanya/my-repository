import React, { useState } from 'react';
import { X, Check, Upload, Link, Phone, Mail, User, Video, Image, Save } from 'lucide-react';
import { CreatorProfile, VideoItem } from '../types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CreatorProfile;
  videos: VideoItem[];
  onSaveProfile: (newProfile: CreatorProfile) => void;
  onUpdateVideo: (video: VideoItem) => void;
}

export const EditPortfolioModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  profile,
  videos,
  onSaveProfile,
  onUpdateVideo,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'videos'>('profile');
  const [formData, setFormData] = useState<CreatorProfile>({ ...profile });
  const [videoItems, setVideoItems] = useState<VideoItem[]>([...videos]);

  const handleSaveAll = () => {
    onSaveProfile(formData);
    videoItems.forEach((v) => onUpdateVideo(v));
    onClose();
  };

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          setFormData((prev) => ({ ...prev, portraitUrl: evt.target.result as string }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAboutPortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          setFormData((prev) => ({ ...prev, aboutPortraitUrl: evt.target.result as string }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0e091a] rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white font-['Poppins']">
              Portfolio & Media Manager
            </h3>
            <p className="text-xs text-purple-300">
              Customize Creator Funmi's contact details, video links, social profiles, and images.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-4 bg-slate-950/60 border-b border-white/5 flex gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-[#8F5BFF] text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Contact Info</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'videos'
                ? 'border-[#8F5BFF] text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>9 Video Links & Cards</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 max-h-[65vh]">
          {activeTab === 'profile' ? (
            <div className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Creator Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Tagline</label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Instagram Handle</label>
                  <input
                    type="text"
                    value={formData.instagramHandle}
                    onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Instagram Profile URL</label>
                  <input
                    type="text"
                    value={formData.instagramUrl}
                    onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">TikTok Handle</label>
                  <input
                    type="text"
                    value={formData.tiktokHandle}
                    onChange={(e) => setFormData({ ...formData, tiktokHandle: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">TikTok Profile URL</label>
                  <input
                    type="text"
                    value={formData.tiktokUrl}
                    onChange={(e) => setFormData({ ...formData, tiktokUrl: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Hero Section Portrait Image</label>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-white/10">
                    <img
                      src={formData.portraitUrl}
                      alt="Hero Preview"
                      referrerPolicy="no-referrer"
                      className="w-12 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="space-y-2 flex-1 min-w-0">
                      <input
                        type="text"
                        value={formData.portraitUrl}
                        onChange={(e) => setFormData({ ...formData, portraitUrl: e.target.value })}
                        className="w-full p-2 rounded-lg bg-black text-white text-xs border border-white/10 truncate"
                        placeholder="Hero Image URL"
                      />
                      <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#8F5BFF] text-white text-xs font-semibold cursor-pointer">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Hero Image</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handlePortraitUpload} />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">About Section Portrait Image</label>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-white/10">
                    <img
                      src={formData.aboutPortraitUrl || formData.portraitUrl}
                      alt="About Preview"
                      referrerPolicy="no-referrer"
                      className="w-12 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="space-y-2 flex-1 min-w-0">
                      <input
                        type="text"
                        value={formData.aboutPortraitUrl || ''}
                        onChange={(e) => setFormData({ ...formData, aboutPortraitUrl: e.target.value })}
                        className="w-full p-2 rounded-lg bg-black text-white text-xs border border-white/10 truncate"
                        placeholder="About Image URL"
                      />
                      <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#8F5BFF] text-white text-xs font-semibold cursor-pointer">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload About Image</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleAboutPortraitUpload} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-6 text-xs">
              {videoItems.map((v, idx) => (
                <div key={v.id} className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="font-bold text-white uppercase text-[11px]">
                      {idx + 1}. {v.category} Content - Card Slot
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px]">
                      {v.views} views
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-400 mb-1">Title</label>
                      <input
                        type="text"
                        value={v.title}
                        onChange={(e) => {
                          const updated = [...videoItems];
                          updated[idx].title = e.target.value;
                          setVideoItems(updated);
                        }}
                        className="w-full p-2 rounded-lg bg-slate-950 border border-white/10 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Video MP4 / Embed URL</label>
                      <input
                        type="text"
                        value={v.videoUrl}
                        onChange={(e) => {
                          const updated = [...videoItems];
                          updated[idx].videoUrl = e.target.value;
                          setVideoItems(updated);
                        }}
                        className="w-full p-2 rounded-lg bg-slate-950 border border-white/10 text-white"
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-white/10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveAll}
            className="px-6 py-2.5 rounded-xl bg-[#8F5BFF] hover:bg-purple-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-purple-600/30"
          >
            <Save className="w-4 h-4" />
            <span>Save All Portfolio Changes</span>
          </button>
        </div>

      </div>
    </div>
  );
};
