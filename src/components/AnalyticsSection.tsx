import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Globe, Upload, Maximize2, Check, RefreshCw, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import { AnalyticsMetric, AnalyticsScreenshot } from '../types';

interface AnalyticsSectionProps {
  metrics: AnalyticsMetric[];
  screenshots: AnalyticsScreenshot[];
  onUpdateScreenshot: (id: string, newImageUrl: string) => void;
  onOpenLightbox: (screenshot: AnalyticsScreenshot) => void;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({
  screenshots,
  onUpdateScreenshot,
  onOpenLightbox,
}) => {
  const [dragActiveId, setDragActiveId] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string | null>(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // File upload reader helper
  const handleFileUpload = (id: string, file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onUpdateScreenshot(id, e.target.result as string);
        setUploadSuccessMsg('Screenshot updated and saved!');
        setTimeout(() => setUploadSuccessMsg(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    setDragActiveId(id);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActiveId(null);
  };

  const handleDrop = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    setDragActiveId(null);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(id, e.dataTransfer.files[0]);
    }
  };

  const handleRemoveImage = (id: string) => {
    onUpdateScreenshot(id, '');
    setUploadSuccessMsg('Screenshot removed. Reverted to upload placeholder.');
    setTimeout(() => setUploadSuccessMsg(null), 3000);
  };

  return (
    <section id="analytics" className="py-20 relative overflow-hidden bg-[#F9F7FF]">
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

        {/* Success Toast Notification */}
        <AnimatePresence>
          {uploadSuccessMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-md mx-auto mb-6 p-3.5 rounded-2xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg z-20"
            >
              <Check className="w-4 h-4 bg-white text-emerald-600 rounded-full p-0.5" />
              <span>{uploadSuccessMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

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
                Upload or replace analytics screenshots for views, engagement, followers, and audience.
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
                    onDragOver={(e) => handleDragOver(e, scr.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, scr.id)}
                    className={`rounded-3xl bg-white border-2 transition-all duration-300 overflow-hidden shadow-lg ${
                      dragActiveId === scr.id
                        ? 'border-[#8F5BFF] bg-purple-50 shadow-purple-200'
                        : 'border-purple-100'
                    }`}
                  >
                    {/* Header bar of active slide */}
                    <div className="p-4 sm:p-5 bg-purple-50/80 backdrop-blur-md border-b border-purple-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#8F5BFF] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                          {activeSlide + 1}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-[#2D2442] font-['Poppins'] capitalize flex items-center gap-2">
                            <span>{scr.title}</span>
                            {scr.imageUrl && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold flex items-center gap-1">
                                <Check className="w-3 h-3" /> Uploaded
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-[#2D2442]/60 font-medium">{scr.description}</p>
                        </div>
                      </div>

                      <span className="text-xs text-[#8F5BFF] bg-white border border-purple-200 px-3 py-1 rounded-lg font-bold shadow-sm">
                        {scr.dateRange}
                      </span>
                    </div>

                    {/* Image / Drag-Drop Box */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-purple-50/30 overflow-hidden flex items-center justify-center group">
                      {scr.imageUrl ? (
                        <>
                          <img
                            src={scr.imageUrl}
                            alt={scr.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain bg-slate-900/5 group-hover:scale-102 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                            <button
                              onClick={() => onOpenLightbox(scr)}
                              className="px-4 py-2.5 rounded-2xl bg-white text-[#2D2442] hover:bg-[#8F5BFF] hover:text-white transition-all font-bold text-xs flex items-center gap-2 shadow-lg"
                            >
                              <Maximize2 className="w-4 h-4" />
                              <span>View Full Resolution</span>
                            </button>

                            <label className="px-4 py-2.5 rounded-2xl bg-[#8F5BFF] hover:bg-[#7b46eb] text-white transition-all cursor-pointer font-bold text-xs flex items-center gap-2 shadow-lg">
                              <RefreshCw className="w-4 h-4" />
                              <span>Replace Image</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  if (e.target.files?.[0]) {
                                    handleFileUpload(scr.id, e.target.files[0]);
                                  }
                                }}
                              />
                            </label>
                          </div>
                        </>
                      ) : (
                        <div className="p-8 text-center space-y-4 max-w-md mx-auto">
                          <div className="w-16 h-16 rounded-3xl bg-purple-100 border-2 border-dashed border-[#8F5BFF] text-[#8F5BFF] mx-auto flex items-center justify-center shadow-sm">
                            <Upload className="w-8 h-8" />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-[#2D2442] font-['Poppins']">
                              Upload {scr.title} Image
                            </p>
                            <p className="text-xs text-[#2D2442]/70 mt-1 font-medium leading-relaxed">
                              Drag & drop your Instagram analytics screenshot here, or click below to select an image from your device.
                            </p>
                          </div>
                          <label className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#8F5BFF] hover:bg-[#7b46eb] text-white text-xs font-bold transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95">
                            <Upload className="w-4 h-4" />
                            <span>Select Screenshot File</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files?.[0]) {
                                  handleFileUpload(scr.id, e.target.files[0]);
                                }
                              }}
                            />
                          </label>
                        </div>
                      )}

                      {/* Side Overlay Arrow Buttons */}
                      <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-[#8F5BFF] text-[#2D2442] hover:text-white border border-purple-100 shadow-md transition-all z-10"
                        title="Previous Slide"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-[#8F5BFF] text-[#2D2442] hover:text-white border border-purple-100 shadow-md transition-all z-10"
                        title="Next Slide"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Card Footer info */}
                    <div className="p-4 bg-purple-50/50 border-t border-purple-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${scr.imageUrl ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                        <span className="text-[#2D2442] font-bold">Category: {scr.key}</span>
                      </div>
                      <span className="text-[#2D2442]/60 font-medium">{scr.dateRange}</span>
                    </div>
                  </motion.div>
                </div>
              );
            })()}

            {/* Carousel Thumbnails / Dots Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {screenshots.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-4 py-2 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
                    activeSlide === idx
                      ? 'bg-[#8F5BFF] text-white border-[#8F5BFF] ring-2 ring-[#8F5BFF]/30 scale-105'
                      : 'bg-white text-[#2D2442]/80 border-purple-100 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSlide === idx ? 'bg-white' : item.imageUrl ? 'bg-emerald-400' : 'bg-[#8F5BFF]'}`} />
                  <span>{idx + 1}. {item.key}</span>
                  {item.imageUrl && <Check className="w-3 h-3 ml-0.5 text-emerald-300" />}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
