import React from 'react';
import { motion } from 'motion/react';
import { CreatorProfile } from '../types';
import { portraitImageProps } from '../utils/responsiveImage';

interface AboutProps {
  profile: CreatorProfile;
}

export const AboutSection: React.FC<AboutProps> = ({ profile }) => {
  const portraitSrc = profile.aboutPortraitUrl || profile.portraitUrl;

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#F9F7FF] content-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Picture on the Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-white border border-purple-100 p-3 shadow-xl shadow-purple-900/5 group max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-purple-50 relative">
                <img
                  {...portraitImageProps(portraitSrc)}
                  alt={profile.name}
                  width={1122}
                  height={1402}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* About Me Content on the Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2442] font-['Poppins'] tracking-tight">
              About Creator Funmi
            </h2>

            <div className="w-20 h-1.5 bg-gradient-to-r from-[#8F5BFF] to-purple-400 rounded-full" />

            <div className="space-y-6 pt-2 text-[#2D2442]/85 text-base sm:text-lg sm:leading-relaxed font-medium">
              <p>
                {profile.bio1}
              </p>
              <p>
                {profile.bio2}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

