import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { CreatorProfile } from '../types';

interface FooterProps {
  profile: CreatorProfile;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-purple-100 pt-16 pb-12 text-[#2D2442]/70 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-purple-100">
          
          {/* Left Brand info exact from prompt */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold text-[#2D2442] font-['Poppins'] tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span>{profile.name}</span>
              <Sparkles className="w-4 h-4 text-[#8F5BFF]" />
            </h3>
            <p className="text-[#8F5BFF] font-medium text-sm tracking-wide">
              {profile.tagline}
            </p>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#2D2442]/80">
            <button onClick={() => onNavigate('home')} className="hover:text-[#8F5BFF] transition-colors">Home</button>
            <button onClick={() => onNavigate('about')} className="hover:text-[#8F5BFF] transition-colors">About</button>
            <button onClick={() => onNavigate('content')} className="hover:text-[#8F5BFF] transition-colors">Content</button>
            <button onClick={() => onNavigate('analytics')} className="hover:text-[#8F5BFF] transition-colors">Analytics</button>
            <button onClick={() => onNavigate('partner')} className="hover:text-[#8F5BFF] transition-colors">Partner With Me</button>
            <button onClick={() => onNavigate('services')} className="hover:text-[#8F5BFF] transition-colors">Services</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#8F5BFF] transition-colors">Contact</button>
          </div>

          {/* Back to Top button */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-purple-50 hover:bg-[#8F5BFF] text-[#8F5BFF] hover:text-white transition-all duration-300 border border-purple-200 shadow-sm group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright notice exact from prompt */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2D2442]/60 gap-4">
          <p className="font-semibold text-[#2D2442]/80">
            Copyright © 2026 {profile.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Crafted for Brand Collaborations</span>
            <span>•</span>
            <span className="text-[#8F5BFF] font-bold">Media Kit 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
