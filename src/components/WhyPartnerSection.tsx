import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, Smile, Flame, Share2, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { PartnerBenefit } from '../types';

interface WhyPartnerProps {
  benefits: PartnerBenefit[];
}

export const WhyPartnerSection: React.FC<WhyPartnerProps> = ({ benefits }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#8F5BFF] group-hover:text-white transition-colors" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#8F5BFF] group-hover:text-white transition-colors" />;
      case 'Smile':
        return <Smile className="w-7 h-7 text-[#8F5BFF] group-hover:text-white transition-colors" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-[#8F5BFF] group-hover:text-white transition-colors" />;
      case 'Share2':
        return <Share2 className="w-7 h-7 text-[#8F5BFF] group-hover:text-white transition-colors" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-[#8F5BFF] group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="partner" className="py-20 relative overflow-hidden bg-[#F9F7FF]">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2442] font-['Poppins'] tracking-tight">
            Why Partner With Creator Funmi
          </h2>
          <p className="mt-3 text-lg text-[#2D2442]/80 font-medium">
            Five core pillars that turn viewers into engaged brand advocates.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#8F5BFF] to-purple-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Top Carousel Navigation Bar */}
          <div className="flex items-center justify-between border-b border-purple-100 pb-4">
            <span className="text-xs text-[#8F5BFF] font-bold px-3.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 shadow-sm">
              Pillar 0{activeSlide + 1} of 0{benefits.length}
            </span>
            <span className="text-xs text-[#2D2442]/60 font-medium hidden sm:inline-block">
              Navigate using side arrows or pillar tags below
            </span>
          </div>

          {/* Active Pillar Slide Card */}
          <div className="relative min-h-[300px] px-2 sm:px-0">
            {/* Side Navigation Arrow Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white hover:bg-[#8F5BFF] hover:text-white border border-purple-200 text-[#2D2442] shadow-lg transition-all hover:scale-110 focus:outline-none"
              title="Previous Pillar"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white hover:bg-[#8F5BFF] hover:text-white border border-purple-200 text-[#2D2442] shadow-lg transition-all hover:scale-110 focus:outline-none"
              title="Next Pillar"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {(() => {
                const benefit = benefits[activeSlide];
                if (!benefit) return null;
                return (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-purple-100 shadow-md group flex flex-col justify-between space-y-6 relative overflow-hidden"
                  >
                    {/* Subtle accent glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50/80 rounded-full blur-2xl pointer-events-none" />

                    <div className="space-y-6 relative z-10">
                      {/* Header Icon & Badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center group-hover:bg-[#8F5BFF] transition-all duration-300 shadow-sm">
                          {getIcon(benefit.icon)}
                        </div>
                        <span className="px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#8F5BFF] text-xs font-bold tracking-wider uppercase shadow-sm flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Pillar 0{activeSlide + 1}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2442] font-['Poppins'] leading-tight">
                        ✔ {benefit.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-[#2D2442]/80 leading-relaxed font-normal">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="pt-6 border-t border-purple-100 flex items-center justify-between text-xs text-[#8F5BFF] font-bold relative z-10">
                      <span>Brand Advantage</span>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#8F5BFF]" />
                        <span>Verified Core Value</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Carousel Dots / Thumbnail Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {benefits.map((benefit, idx) => (
              <button
                key={benefit.id}
                onClick={() => setActiveSlide(idx)}
                className={`px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
                  activeSlide === idx
                    ? 'bg-[#8F5BFF] text-white border-[#8F5BFF] ring-2 ring-[#8F5BFF]/30 scale-105'
                    : 'bg-white text-[#2D2442]/80 border-purple-100 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeSlide === idx ? 'bg-white' : 'bg-[#8F5BFF]'}`} />
                <span>0{idx + 1}. {benefit.title}</span>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

