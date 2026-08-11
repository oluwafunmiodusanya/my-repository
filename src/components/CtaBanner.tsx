import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Send, MessageSquare } from 'lucide-react';

interface CtaBannerProps {
  onNavigate: (sectionId: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#F9F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Box Bento Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden bg-gradient-to-r from-[#8F5BFF] via-purple-600 to-indigo-600 shadow-md border border-purple-200"
        >
          {/* Decorative Glowing Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Sparkle Elements */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-100" />
            <span>Ready for Q3/Q4 Brand Partnerships</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-['Poppins'] tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Create Something Memorable
          </h2>

          {/* Exact Body text */}
          <p className="mt-6 text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed font-normal">
            We'd love to partner with brands that want to connect with audiences through authentic, creative, and entertaining content.
          </p>

          {/* Prominent Button: Let's Collaborate */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white hover:bg-purple-50 text-[#8F5BFF] font-extrabold text-lg transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center gap-3 group"
            >
              <Send className="w-5 h-5 fill-[#8F5BFF] text-[#8F5BFF]" />
              <span>Let's Collaborate</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
