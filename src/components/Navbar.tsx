import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { CreatorProfile } from '../types';

interface NavbarProps {
  profile: CreatorProfile;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'content', 'analytics', 'partner', 'services', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'content', label: 'Content' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'partner', label: 'Partner With Me' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-purple-100 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="flex flex-col">
            <span className="font-['Poppins'] font-bold text-xl tracking-tight text-[#2D2442] group-hover:text-[#8F5BFF] transition-colors">
              {profile.name}
            </span>
            <span className="text-[10px] text-[#8F5BFF] font-bold tracking-widest uppercase">
              Official Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-white border border-purple-100 rounded-full px-2.5 lg:px-4 py-1.5 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-2.5 lg:px-3.5 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#8F5BFF] text-white shadow-md shadow-purple-200'
                    : 'text-[#2D2442]/70 hover:text-[#8F5BFF] hover:bg-purple-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>



        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white border border-purple-100 text-[#2D2442]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 px-4 pt-3 pb-6 mt-2 space-y-2 shadow-xl text-[#2D2442]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-[#8F5BFF] text-white'
                  : 'text-[#2D2442]/80 hover:bg-purple-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 rounded-xl bg-[#8F5BFF] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md shadow-purple-200"
            >
              <Send className="w-4 h-4" />
              Work With Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
