import React from 'react';
import { motion } from 'motion/react';
import { Video, ShoppingBag, Megaphone, Star, Camera, Calendar, ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Video':
        return <Video className="w-6 h-6 text-[#8F5BFF]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#8F5BFF]" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-[#8F5BFF]" />;
      case 'Star':
        return <Star className="w-6 h-6 text-[#8F5BFF]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#8F5BFF]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-[#8F5BFF]" />;
      default:
        return <Video className="w-6 h-6 text-[#8F5BFF]" />;
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-[#F9F7FF]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8F5BFF] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Megaphone className="w-3.5 h-3.5" />
            <span>Collaboration Packages</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2442] font-['Poppins'] tracking-tight">
            Services
          </h2>
          <p className="mt-3 text-lg text-[#2D2442]/80 font-medium">
            Tailored content solutions engineered to achieve your marketing KPIs.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#8F5BFF] to-purple-400 rounded-full mx-auto mt-4" />
        </div>

        {/* 6 Modern Service Cards with Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-sm ${
                service.popular
                  ? 'bg-white border-[#8F5BFF] ring-2 ring-[#8F5BFF]/20 shadow-md'
                  : 'bg-white border-purple-100 hover:border-purple-300'
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#8F5BFF] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  Most Requested
                </div>
              )}

              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center group-hover:bg-[#8F5BFF] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2442] font-['Poppins'] group-hover:text-[#8F5BFF] transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs text-[#8F5BFF] font-bold">Turnaround: {service.turnaround}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#2D2442]/80 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-2 border-t border-purple-100">
                  <p className="text-xs font-bold text-[#2D2442] uppercase tracking-wider">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#2D2442]/80 font-medium">
                      <div className="w-4 h-4 rounded-full bg-purple-50 text-[#8F5BFF] flex items-center justify-center flex-shrink-0 border border-purple-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-purple-100">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-[#8F5BFF] border border-purple-200 text-[#8F5BFF] hover:text-white font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
