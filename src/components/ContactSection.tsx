import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Check, Copy, ExternalLink, Video, ShoppingBag, Megaphone, Star, Camera, Calendar, Sparkles } from 'lucide-react';
import { CreatorProfile, ServiceItem } from '../types';

interface ContactSectionProps {
  profile: CreatorProfile;
  services: ServiceItem[];
  onSelectService?: (service: ServiceItem) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, services, onSelectService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Video':
        return <Video className="w-5 h-5 text-[#8F5BFF]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#8F5BFF]" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-[#8F5BFF]" />;
      case 'Star':
        return <Star className="w-5 h-5 text-[#8F5BFF]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#8F5BFF]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#8F5BFF]" />;
      default:
        return <Video className="w-5 h-5 text-[#8F5BFF]" />;
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#F9F7FF]">
      {/* Anchor for Services scrolling */}
      <div id="services" className="absolute top-0" />

      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2442] font-['Poppins'] tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-lg text-[#2D2442]/80 font-medium">
            We'd love to partner with brands that want to connect with audiences through authentic, creative, and entertaining content.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#8F5BFF] to-purple-400 rounded-full mx-auto mt-4" />
        </div>

        {/* 2-Column Grid: Services (Single Container) on Left, Get In Touch on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Services Section - Single Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-purple-100">
              <h3 className="text-2xl font-bold text-[#2D2442] font-['Poppins']">
                Services
              </h3>
            </div>

            {/* Single Container for Services */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-purple-100 shadow-sm flex-1 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#8F5BFF] uppercase tracking-wider">
                  Available Collaborations:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-[#8F5BFF] flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-[#8F5BFF] group-hover:text-white transition-colors">
                        {getServiceIcon(service.icon)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm sm:text-base font-bold text-[#2D2442] font-['Poppins'] block truncate">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Get In Touch */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-purple-100">
              <h3 className="text-2xl font-bold text-[#2D2442] font-['Poppins']">
                Get In Touch
              </h3>
            </div>

            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-purple-100 shadow-sm flex-1 flex flex-col justify-between space-y-8">
              {/* Direct Contact Info */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 transition-all flex items-center justify-between group">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group/email min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#8F5BFF] flex items-center justify-center group-hover/email:bg-[#8F5BFF] group-hover/email:text-white transition-colors shadow-sm cursor-pointer flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-[#8F5BFF] font-bold uppercase tracking-wider">Email Address</p>
                      <span className="text-xs sm:text-sm font-bold text-[#2D2442] group-hover/email:text-[#8F5BFF] transition-colors truncate block">
                        {profile.email}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="p-2.5 rounded-xl bg-white hover:bg-purple-100 text-[#2D2442] transition-all shadow-sm border border-purple-200 flex-shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 transition-all flex items-center justify-between group">
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 group/phone min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#8F5BFF] flex items-center justify-center group-hover/phone:bg-[#8F5BFF] group-hover/phone:text-white transition-colors shadow-sm cursor-pointer flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-[#8F5BFF] font-bold uppercase tracking-wider">Direct Phone / WhatsApp</p>
                      <span className="text-xs sm:text-sm font-bold text-[#2D2442] group-hover/phone:text-[#8F5BFF] transition-colors truncate block">
                        {profile.phone}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    className="p-2.5 rounded-xl bg-white hover:bg-purple-100 text-[#2D2442] transition-all shadow-sm border border-purple-200 flex-shrink-0 ml-2"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Profiles Section */}
              <div className="space-y-4 pt-6 border-t border-purple-100">
                <h4 className="text-base font-bold text-[#2D2442] font-['Poppins']">
                  Social Profiles
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Instagram Button */}
                  <a
                    href={profile.instagramUrl || "https://instagram.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-pink-200 hover:border-pink-400 transition-all duration-300 flex items-center justify-between group shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#2D2442] font-['Poppins']">Instagram</p>
                        <p className="text-[11px] text-pink-600 font-bold truncate">{profile.instagramHandle || "@creator_funmi"}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2D2442] transition-colors flex-shrink-0 ml-1" />
                  </a>

                  {/* TikTok Button */}
                  <a
                    href={profile.tiktokUrl || "https://tiktok.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-purple-50 border border-purple-200 hover:border-purple-400 transition-all duration-300 flex items-center justify-between group shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#2D2442] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .58.05.85.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.33 6.33 0 009.33 22a6.33 6.33 0 006.33-6.33V9a8.16 8.16 0 004.93 1.63v-3.94a4.85 4.85 0 01-1-.02z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#2D2442] font-['Poppins']">TikTok</p>
                        <p className="text-[11px] text-[#8F5BFF] font-bold truncate">{profile.tiktokHandle || "@creator_funmi"}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2D2442] transition-colors flex-shrink-0 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


