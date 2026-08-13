import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnalyticsMetric, AnalyticsScreenshot } from '../types';

interface AnalyticsSectionProps {
  metrics: AnalyticsMetric[];
  screenshots: AnalyticsScreenshot[];
  onUpdateScreenshot: (id: string, newImageUrl: string) => void;
  onOpenLightbox: (screenshot: AnalyticsScreenshot) => void;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({
  screenshots,
  onOpenLightbox,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="analytics" className="py-20 relative overflow-hidden bg-[#F9F7FF] content-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2442] font-['Poppins'] tracking-tight">
            Analytics
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#8F5BFF] font-bold">
            Last 30 Days Performance
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#8F5BFF] to-purple-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Statistic Cards (Metrics Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 max-w-4xl mx-auto">
          
          {/* 👀 Card 1: 1.2M+ Views */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 shadow-sm hover:border-[#8F5BFF] transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#8F5BFF] group-hover:scale-110 transition-transform shadow-sm">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
                +34% Growth
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2D2442] font-['Poppins'] tracking-tight mb-1">
              👀 1.2M+ Views
            </div>
            <p className="text-xs sm:text-sm text-[#2D2442]/70 font-medium">
              30-day cross-platform video plays & Reels impressions
            </p>
          </motion.div>

          {/* 🌍 Card 2: Discovery & Non-follower reach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 shadow-sm hover:border-[#8F5BFF] transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#8F5BFF] flex items-center justify-center text-white shadow-md shadow-purple-200 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-[#8F5BFF]">
                Brand Value
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-[#2D2442] font-['Poppins'] tracking-tight mb-1">
              🌍 High Non-Follower Reach
            </div>
            <p className="text-xs sm:text-sm text-[#2D2442]/80 leading-relaxed font-normal">
              Majority of reach comes from non-followers, helping brands reach new audiences.
            </p>
          </motion.div>

        </div>

        {/* Verified Instagram Analytics Screenshots Carousel */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-100 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-[#2D2442] font-['Poppins']">
                Verified Instagram Analytics Screenshots
              </h3>
              <p className="text-sm text-[#2D2442]/70 font-medium">
                Verified performance metrics, audience demographics, and engagement statistics.
              </p>
            </div>
          </div>

          {/* Featured Active Carousel Card */}
          <div className="max-w-3xl mx-auto">
            {(() => {
              const scr = screenshots[activeSlide];
              if (!scr) return null;
              return (
                <div className="relative">
                  <motion.div
                    key={scr.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl bg-white border border-purple-100 overflow-hidden shadow-lg"
                  >
                    {/* Header bar of active slide */}
                    <div className="p-4 sm:p-5 bg-purple-50/80 backdrop-blur-md border-b border-purple-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#8F5BFF] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                          {activeSlide + 1}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-[#2D2442] font-['Poppins'] capitalize">
                            {scr.title}
                          </h4>
                          <p className="text-xs text-[#2D2442]/60 font-medium">{scr.description}</p>
                        </div>
                      </div>

                      <span className="text-xs text-[#8F5BFF] bg-white border border-purple-200 px-3 py-1 rounded-lg font-bold shadow-sm">
                        {scr.dateRange}
                      </span>
                    </div>

                    {/* Image Box */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden flex items-center justify-center">
                      <img
                        src={scr.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70'}
                        alt={scr.title}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover sm:object-contain"
                      />

                      {/* Side Overlay Arrow Buttons */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-[#8F5BFF] text-[#2D2442] hover:text-white border border-purple-100 shadow-md transition-all z-10"
                        title="Previous Slide"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-[#8F5BFF] text-[#2D2442] hover:text-white border border-purple-100 shadow-md transition-all z-10"
                        title="Next Slide"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Card Footer info */}
                    <div className="p-4 bg-purple-50/50 border-t border-purple-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#8F5BFF]" />
                        <span className="text-[#2D2442] font-bold">Category: {scr.key}</span>
                      </div>
                      <span className="text-[#2D2442]/60 font-medium">{scr.dateRange}</span>
                    </div>
                  </motion.div>
                </div>
              );
            })()}


          </div>
        </div>

      </div>
    </section>
  );
};
