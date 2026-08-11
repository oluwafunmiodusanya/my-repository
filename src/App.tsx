import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ContentSection } from './components/ContentSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { WhyPartnerSection } from './components/WhyPartnerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { AnalyticsLightboxModal } from './components/AnalyticsLightboxModal';
import { EditPortfolioModal } from './components/EditPortfolioModal';

import {
  INITIAL_PROFILE,
  INITIAL_VIDEOS,
  INITIAL_METRICS,
  INITIAL_ANALYTICS_SCREENSHOTS,
  WHY_PARTNER_BENEFITS,
  SERVICES
} from './data/portfolioData';

import { CreatorProfile, VideoItem, AnalyticsScreenshot, ServiceItem } from './types';

export default function App() {
  const [profile, setProfile] = useState<CreatorProfile>(INITIAL_PROFILE);
  const [videos, setVideos] = useState<VideoItem[]>(INITIAL_VIDEOS);
  const [metrics] = useState(INITIAL_METRICS);
  const [screenshots, setScreenshots] = useState<AnalyticsScreenshot[]>(() => {
    try {
      const saved = localStorage.getItem('funmi_analytics_screenshots');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return INITIAL_ANALYTICS_SCREENSHOTS;
  });
  const [benefits] = useState(WHY_PARTNER_BENEFITS);
  const [services] = useState(SERVICES);

  // Modal States
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<AnalyticsScreenshot | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState<string>('Sponsored Content');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleUpdateScreenshot = (id: string, newImageUrl: string) => {
    setScreenshots((prev) => {
      const updated = prev.map((scr) => (scr.id === id ? { ...scr, imageUrl: newImageUrl } : scr));
      try {
        localStorage.setItem('funmi_analytics_screenshots', JSON.stringify(updated));
      } catch {
        // ignore storage quota errors
      }
      return updated;
    });
    if (selectedScreenshot && selectedScreenshot.id === id) {
      setSelectedScreenshot((prev) => (prev ? { ...prev, imageUrl: newImageUrl } : null));
    }
  };

  const handleUpdateVideo = (updatedVideo: VideoItem) => {
    setVideos((prev) => prev.map((v) => (v.id === updatedVideo.id ? updatedVideo : v)));
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceInquiry(service.title);
    handleNavigate('contact');
  };

  const handleSelectVideo = (video: VideoItem) => {
    if (video.videoUrl) {
      window.open(video.videoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7FF] text-[#2D2442] font-['DM_Sans',sans-serif] selection:bg-[#8F5BFF] selection:text-white relative">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        profile={profile}
        onNavigate={handleNavigate}
      />

      {/* About Me Section */}
      <AboutSection
        profile={profile}
      />

      {/* Our Content Section (3 Cards x 3 iPhones each) */}
      <ContentSection
        videos={videos}
        onSelectVideo={handleSelectVideo}
        onOpenEditModal={() => setIsEditModalOpen(true)}
      />

      {/* Analytics Section (Metrics + 5 Upload Placeholders) */}
      <AnalyticsSection
        metrics={metrics}
        screenshots={screenshots}
        onUpdateScreenshot={handleUpdateScreenshot}
        onOpenLightbox={(screenshot) => setSelectedScreenshot(screenshot)}
      />

      {/* Why Partner With Creator Funmi */}
      <WhyPartnerSection
        benefits={benefits}
      />

      {/* Let's Work Together (Services on Left, Get In Touch on Right) */}
      <ContactSection
        profile={profile}
        services={services}
        onSelectService={handleSelectService}
      />

      {/* Footer */}
      <Footer
        profile={profile}
        onNavigate={handleNavigate}
      />

      {/* Modals & Lightboxes */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onUpdateVideo={handleUpdateVideo}
      />

      <AnalyticsLightboxModal
        screenshot={selectedScreenshot}
        onClose={() => setSelectedScreenshot(null)}
        onUpdateScreenshot={handleUpdateScreenshot}
      />

      <EditPortfolioModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        videos={videos}
        onSaveProfile={(newProf) => setProfile(newProf)}
        onUpdateVideo={handleUpdateVideo}
      />

    </div>
  );
}
