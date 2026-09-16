import React from 'react';

interface BrandLogoProps {
  /**
   * 'dark': for light backgrounds (dark text)
   * 'light': for dark backgrounds (white text)
   */
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogoIcon: React.FC<{ sizeClass?: string; className?: string }> = ({
  sizeClass = 'w-10 h-10',
  className = '',
}) => {
  return (
    <div
      className={`relative rounded-full bg-gradient-to-br from-[#F26522] to-[#D85316] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(242,101,34,0.4)] flex-shrink-0 transition-transform group-hover:scale-105 duration-300 ${sizeClass} ${className}`}
    >
      {/* Precision stylized restaurant fork & knife icon angled diagonally matching the reference screenshot */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[62%] h-[62%] text-white"
        aria-hidden="true"
      >
        {/* Knife (angled left-down to right-up) */}
        <path
          d="M26.5 7.5C23.5 10.5 22.8 15 24 18.5L12.5 30C11.7 30.8 11.7 32.1 12.5 32.9C13.3 33.7 14.6 33.7 15.4 32.9L26.9 21.4C30.4 22.6 34.9 21.9 37.9 18.9C38.3 18.5 38.3 17.8 37.9 17.4L28 7.5C27.6 7.1 26.9 7.1 26.5 7.5Z"
          fill="currentColor"
          fillOpacity="0.95"
        />
        {/* Fork (angled right-down to left-up) */}
        <path
          d="M8.5 13.5L13.5 8.5C14.1 7.9 15 8.4 15 9.2V14.5C15 15.6 15.9 16.5 17 16.5H17.5L19.5 14.5C20.3 13.7 21.6 13.7 22.4 14.5C23.2 15.3 23.2 16.6 22.4 17.4L18.4 21.4L28.9 31.9C29.7 32.7 29.7 34 28.9 34.8C28.1 35.6 26.8 35.6 26 34.8L15.5 24.3L11.5 28.3C10.7 29.1 9.4 29.1 8.6 28.3C7.8 27.5 7.8 26.2 8.6 25.4L10.5 23.5V23C10.5 21.9 9.6 21 8.5 21H3.2C2.4 21 1.9 20.1 2.5 19.5L7.5 14.5C7.8 14.2 8.2 13.8 8.5 13.5Z"
          fill="currentColor"
          fillOpacity="0.9"
        />
      </svg>
      {/* Subtle inner highlight rim */}
      <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
    </div>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  const sizeConfigs = {
    sm: {
      icon: 'w-8 h-8',
      title: 'text-xl sm:text-2xl',
      sub: 'text-[9px] sm:text-[10px]',
      gap: 'gap-2.5',
    },
    md: {
      icon: 'w-10 h-10 sm:w-11 sm:h-11',
      title: 'text-2xl sm:text-3xl',
      sub: 'text-[10px] sm:text-xs',
      gap: 'gap-3',
    },
    lg: {
      icon: 'w-12 h-12 sm:w-14 sm:h-14',
      title: 'text-3xl sm:text-4xl',
      sub: 'text-xs sm:text-sm',
      gap: 'gap-3.5',
    },
  };

  const config = sizeConfigs[size];

  return (
    <div className={`inline-flex items-center ${config.gap} group ${className}`}>
      {/* Reference circular orange utensil icon */}
      <BrandLogoIcon sizeClass={config.icon} />

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold tracking-tight leading-none transition-colors ${config.title} ${
            isLight
              ? 'text-white group-hover:text-[#F26522]'
              : 'text-[#1E1B18] group-hover:text-[#F26522]'
          }`}
        >
          Mezbaan
        </span>

        {showSubtitle && (
          <span
            className={`tracking-widest uppercase font-semibold mt-1 transition-colors ${config.sub} ${
              isLight ? 'text-stone-400' : 'text-[#A34816]'
            }`}
          >
            Restaurant • Cakes • Events
          </span>
        )}
      </div>
    </div>
  );
};
