import React from 'react';
import { X, Upload, RefreshCw } from 'lucide-react';
import { AnalyticsScreenshot } from '../types';

interface AnalyticsLightboxProps {
  screenshot: AnalyticsScreenshot | null;
  onClose: () => void;
  onUpdateScreenshot: (id: string, newImageUrl: string) => void;
}

export const AnalyticsLightboxModal: React.FC<AnalyticsLightboxProps> = ({
  screenshot,
  onClose,
  onUpdateScreenshot,
}) => {
  if (!screenshot) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateScreenshot(screenshot.id, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0e091a] rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white font-['Poppins']">
              {screenshot.title} Analytics
            </h3>
            <p className="text-xs text-purple-300">{screenshot.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <label className="px-3 py-1.5 rounded-lg bg-[#8F5BFF] hover:bg-purple-600 text-white text-xs font-semibold cursor-pointer flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Replace Image</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
            </label>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="p-6 overflow-auto flex items-center justify-center max-h-[75vh] bg-slate-950/50">
          <img
            src={screenshot.imageUrl}
            alt={screenshot.title}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>

      </div>
    </div>
  );
};
