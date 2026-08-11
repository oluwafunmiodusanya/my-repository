import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Video, Flame, Play, ShieldCheck, Instagram } from 'lucide-react';
import { CreatorProfile } from '../types';
import { BRAND_PARTNERS } from '../data/portfolioData';

interface HeroProps {
  profile: CreatorProfile;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onNavigate }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Background Subtle Purple Ambient Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-300/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Bento Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-purple-100/80 flex flex-col justify-between space-y-8 text-center lg:text-left relative overflow-hidden"
          >
            {/* Creator Intro */}
            <div className="space-y-6">
              {/* Main Title & Subtitle */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-['Poppins'] text-[#2D2442]">
                  {profile.name}
                </h1>

                <div className="inline-block py-2 px-4 rounded-2xl bg-purple-50 border-l-4 border-[#8F5BFF]">
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#8F5BFF] tracking-wide font-['Poppins']">
                    {profile.tagline}
                  </p>
                </div>
              </div>

              {/* Concise Pitch */}
              <p className="text-base sm:text-lg text-[#2D2442]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Connecting leading consumer brands with Gen-Z and Millennial audiences through authentic humor, high-retention viral skits, and relatable everyday storytelling.
              </p>
            </div>

            {/* Action Buttons & Metrics */}
            <div className="space-y-8 pt-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#8F5BFF] hover:bg-[#7b46eb] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-md shadow-purple-200 hover:shadow-lg flex items-center justify-center gap-3 group"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('content')}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-purple-50 text-[#8F5BFF] border-2 border-[#8F5BFF] font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <Play className="w-4 h-4 fill-[#8F5BFF] text-[#8F5BFF]" />
                  <span>Explore Content</span>
                </button>
              </div>

              {/* Quick Metrics Bar inside Bento */}
              <div className="pt-6 border-t border-purple-100 grid grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#8F5BFF] font-['Poppins']">1.2M+</div>
                  <div className="text-xs text-[#2D2442]/70 font-semibold">30-Day Views</div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#8F5BFF] font-['Poppins']">789K+</div>
                  <div className="text-xs text-[#2D2442]/70 font-semibold">Reach</div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#8F5BFF] font-['Poppins']">84%</div>
                  <div className="text-xs text-[#2D2442]/70 font-semibold">Non-Followers</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Large Portrait Image Bento Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-white rounded-[2rem] p-4 sm:p-6 shadow-sm border border-purple-100 relative flex flex-col justify-center items-center group"
          >
            {/* Image Frame */}
            <div className="relative w-full h-full min-h-[420px] rounded-[1.5rem] overflow-hidden bg-purple-50 border border-purple-100">
              <img
                src={profile.portraitUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
