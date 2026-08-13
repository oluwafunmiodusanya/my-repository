import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Video, Film, ShoppingBag, Sparkles, Plus, Edit3 } from 'lucide-react';
import { VideoItem } from '../types';
import { IPhoneMockup } from './IPhoneMockup';

interface ContentSectionProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
  onOpenEditModal: () => void;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  videos,
  onSelectVideo,
  onOpenEditModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'lifestyle' | 'comedy' | 'brand'>('all');

  const lifestyleVideos = videos.filter((v) => v.category === 'lifestyle');
  const comedyVideos = videos.filter((v) => v.category === 'comedy');
  const brandVideos = videos.filter((v) => v.category === 'brand');

  return (
    <section id="content" className="py-20 relative overflow-hidden bg-[#F9F7FF] content-auto">
      {/* Glow gradient background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2442] font-['Poppins'] tracking-tight">
            Our Content
          </h2>
          <p className="mt-3 text-lg text-[#2D2442]/80 font-medium">
            We create content across three major categories.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#8F5BFF] to-purple-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Quick Category Filter Bar */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-purple-100 shadow-sm">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'comedy', label: 'Comedy & Skits' },
              { id: 'lifestyle', label: 'Lifestyle' },
              { id: 'brand', label: 'Brand Integration' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#8F5BFF] text-white shadow-md shadow-purple-200'
                    : 'text-[#2D2442]/70 hover:text-[#8F5BFF] hover:bg-purple-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* The Three Main Bento Content Cards */}
        <div className="space-y-16">

          {/* CARD 1: Comedy & Skits */}
          {(activeTab === 'all' || activeTab === 'comedy') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-[2rem] bg-white border border-purple-100 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-100">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2442] font-['Poppins']">
                    Comedy & Skits
                  </h3>
                  <p className="text-[#2D2442]/80 text-sm sm:text-base max-w-2xl font-normal">
                    Funny, relatable videos built around everyday situations that encourage audience connection and engagement.
                  </p>
                </div>
              </div>

              {/* 3 iPhone Video Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {comedyVideos.map((video) => (
                  <IPhoneMockup
                    key={video.id}
                    video={video}
                    buttonLabel="Watch Comedy"
                    onSelectVideo={onSelectVideo}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* CARD 2: Lifestyle Content */}
          {(activeTab === 'all' || activeTab === 'lifestyle') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-[2rem] bg-white border border-purple-100 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-100">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2442] font-['Poppins']">
                    Lifestyle Content
                  </h3>
                  <p className="text-[#2D2442]/80 text-sm sm:text-base max-w-2xl font-normal">
                    Authentic everyday moments, routines, experiences, and relatable lifestyle stories.
                  </p>
                </div>
              </div>

              {/* 3 iPhone Video Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {lifestyleVideos.map((video) => (
                  <IPhoneMockup
                    key={video.id}
                    video={video}
                    buttonLabel="Watch Lifestyle Content"
                    onSelectVideo={onSelectVideo}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* CARD 3: Brand Integration */}
          {(activeTab === 'all' || activeTab === 'brand') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-[2rem] bg-white border border-purple-100 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-100">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2442] font-['Poppins']">
                    Brand Integration
                  </h3>
                  <p className="text-[#2D2442]/80 text-sm sm:text-base max-w-2xl font-normal">
                    Creative product placements and storytelling that allow brands to become part of the content naturally. Features collaborations with leading brands including <span className="text-[#8F5BFF] font-bold">Fanta</span> and <span className="text-[#8F5BFF] font-bold">Coca-Cola</span>.
                  </p>
                </div>
              </div>

              {/* 3 iPhone Video Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {brandVideos.map((video) => (
                  <IPhoneMockup
                    key={video.id}
                    video={video}
                    buttonLabel="Watch Brand Collaboration"
                    onSelectVideo={onSelectVideo}
                  />
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
