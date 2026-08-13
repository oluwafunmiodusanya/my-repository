import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

import {
  INITIAL_PROFILE,
  INITIAL_VIDEOS,
  INITIAL_METRICS,
  INITIAL_ANALYTICS_SCREENSHOTS,
  WHY_PARTNER_BENEFITS,
  SERVICES
} from './data/portfolioData';

import { CreatorProfile, VideoItem, AnalyticsScreenshot, ServiceItem } from './types';

const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ContentSection = lazy(() =>
  import('./components/ContentSection').then((m) => ({ default: m.ContentSection }))
);
const AnalyticsSection = lazy(() =>
  import('./components/AnalyticsSection').then((m) => ({ default: m.AnalyticsSection }))
);
const WhyPartnerSection = lazy(() =>
  import('./components/WhyPartnerSection').then((m) => ({ default: m.WhyPartnerSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);
const VideoModal = lazy(() =>
  import('./components/VideoModal').then((m) => ({ default: m.VideoModal }))
);
const AnalyticsLightboxModal = lazy(() =>
  import('./components/AnalyticsLightboxModal').then((m) => ({ default: m.AnalyticsLightboxModal }))
);
const EditPortfolioModal = lazy(() =>
  import('./components/EditPortfolioModal').then((m) => ({ default: m.EditPortfolioModal }))
);

function migrateImagePath(url: string | undefined): string | undefined {
  if (!url) return url;
  // data URLs / remote URLs — leave untouched
  if (url.startsWith('data:') || url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return url
    .replace('/src/assets/images/', '/images/')
    .replace(/\.webp$/i, (match, offset, full) => {
      // Prefer PNG for known portrait filenames, JPG otherwise
      if (full.includes('1785444358154') || full.includes('1786457541345')) {
        return '.png';
      }
      return '.jpg';
    });
}

function readStoredProfile(): CreatorProfile {
  try {
    const saved = localStorage.getItem('funmi_creator_profile');
    if (saved && saved.length < 500_000) {
      const parsed = JSON.parse(saved);
      return {
        ...INITIAL_PROFILE,
        ...parsed,
        portraitUrl: migrateImagePath(parsed.portraitUrl) || INITIAL_PROFILE.portraitUrl,
        aboutPortraitUrl:
          migrateImagePath(parsed.aboutPortraitUrl) || INITIAL_PROFILE.aboutPortraitUrl,
      };
    }
  } catch {
    // ignore
  }
  return INITIAL_PROFILE;
}

function readStoredScreenshots(): AnalyticsScreenshot[] {
  try {
    const saved = localStorage.getItem('funmi_analytics_screenshots');
    if (saved && saved.length < 2_000_000) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return INITIAL_ANALYTICS_SCREENSHOTS.map((initial, index) => {
          const stored = parsed[index] as AnalyticsScreenshot | undefined;
          const storedUrl = stored?.imageUrl || '';
          // Keep user uploads (data URLs); replace old Unsplash / empty placeholders
          const keepStored =
            storedUrl.startsWith('data:') ||
            (storedUrl.startsWith('/images/analytics_') && !storedUrl.includes('unsplash'));
          return {
            ...initial,
            ...stored,
            id: initial.id,
            key: initial.key,
            title: initial.title,
            description: initial.description,
            imageUrl: keepStored ? storedUrl : initial.imageUrl,
          };
        });
      }
    }
  } catch {
    // ignore
  }
  return INITIAL_ANALYTICS_SCREENSHOTS;
}

export default function App() {
  const [profile, setProfile] = useState<CreatorProfile>(readStoredProfile);
  const [videos, setVideos] = useState<VideoItem[]>(INITIAL_VIDEOS);
  const [metrics] = useState(INITIAL_METRICS);
  const [screenshots, setScreenshots] = useState<AnalyticsScreenshot[]>(readStoredScreenshots);
  const [benefits] = useState(WHY_PARTNER_BENEFITS);
  const [services] = useState(SERVICES);

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<AnalyticsScreenshot | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const handleSelectService = (_service: ServiceItem) => {
    handleNavigate('contact');
  };

  const handleSelectVideo = (video: VideoItem) => {
    if (video.videoUrl) {
      window.open(video.videoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7FF] text-[#2D2442] font-['DM_Sans',sans-serif] selection:bg-[#8F5BFF] selection:text-white relative">
      <Navbar profile={profile} onNavigate={handleNavigate} />

      <Hero profile={profile} onNavigate={handleNavigate} />

      <Suspense fallback={null}>
        <AboutSection profile={profile} />

        <ContentSection
          videos={videos}
          onSelectVideo={handleSelectVideo}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        <AnalyticsSection
          metrics={metrics}
          screenshots={screenshots}
          onUpdateScreenshot={handleUpdateScreenshot}
          onOpenLightbox={(screenshot) => setSelectedScreenshot(screenshot)}
        />

        <WhyPartnerSection benefits={benefits} />

        <ContactSection
          profile={profile}
          services={services}
          onSelectService={handleSelectService}
        />

        <Footer profile={profile} onNavigate={handleNavigate} />
      </Suspense>

      <Suspense fallback={null}>
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
            onUpdateVideo={handleUpdateVideo}
          />
        )}

        {selectedScreenshot && (
          <AnalyticsLightboxModal
            screenshot={selectedScreenshot}
            onClose={() => setSelectedScreenshot(null)}
            onUpdateScreenshot={handleUpdateScreenshot}
          />
        )}

        {isEditModalOpen && (
          <EditPortfolioModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            profile={profile}
            videos={videos}
            onSaveProfile={(newProf) => {
              setProfile(newProf);
              try {
                localStorage.setItem('funmi_creator_profile', JSON.stringify(newProf));
              } catch {
                // ignore
              }
            }}
            onUpdateVideo={handleUpdateVideo}
          />
        )}
      </Suspense>
    </div>
  );
}
