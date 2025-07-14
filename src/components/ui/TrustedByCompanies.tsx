'use client';

import { TrustedByCompany } from '@/types';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface TrustedByCompaniesProps {
  title?: string;
  companies?: TrustedByCompany[];
  autoplaySpeed?: number;
}

// Fallback companies for when Strapi data is not available
const defaultCompanies: TrustedByCompany[] = [
  { id: 1, name: 'Google', websiteUrl: 'https://google.com' },
  { id: 2, name: 'Microsoft', websiteUrl: 'https://microsoft.com' },
  { id: 3, name: 'Apple', websiteUrl: 'https://apple.com' },
  { id: 4, name: 'Amazon', websiteUrl: 'https://amazon.com' },
  { id: 5, name: 'Meta', websiteUrl: 'https://meta.com' },
  { id: 6, name: 'Netflix', websiteUrl: 'https://netflix.com' },
  { id: 7, name: 'Tesla', websiteUrl: 'https://tesla.com' },
  { id: 8, name: 'Spotify', websiteUrl: 'https://spotify.com' },
  { id: 9, name: 'Adobe', websiteUrl: 'https://adobe.com' },
  { id: 10, name: 'Salesforce', websiteUrl: 'https://salesforce.com' },
];

export const TrustedByCompanies: React.FC<TrustedByCompaniesProps> = ({
  title = 'Trusted by Leading Companies',
  companies = defaultCompanies,
  autoplaySpeed = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Number of logos to show at once (responsive)
  const [itemsPerView, setItemsPerView] = useState<number>(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsPerView(2); // Small mobile
      } else if (window.innerWidth < 640) {
        setItemsPerView(3); // Mobile
      } else if (window.innerWidth < 768) {
        setItemsPerView(4); // Large mobile/Small tablet
      } else if (window.innerWidth < 1024) {
        setItemsPerView(5); // Tablet
      } else if (window.innerWidth < 1280) {
        setItemsPerView(6); // Desktop
      } else {
        setItemsPerView(7); // Large desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered && companies.length > itemsPerView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = companies.length - itemsPerView;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, autoplaySpeed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [companies.length, itemsPerView, autoplaySpeed, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!companies || companies.length === 0) {
    return null;
  }

  return (
    <section
      className={clsx(
        'bg-neutral-60 mt-[-10px] border-x border-b border-dark-15 w-full'
      )}
    >
      {/* Title Button */}
      <div className="flex justify-center px-4 sm:px-0">
        <div className="flex py-3 px-4 sm:py-[14px] sm:px-6 items-center gap-2 sm:gap-[10px] rounded-full border border-[#262626] bg-[#1A1A1A] z-10 -mt-3 sm:-mt-[15px] relative">
          <span className="text-[#FDFFFA] text-center font-medium text-xs sm:text-sm leading-normal whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>

      {/* Logo Slider Container */}
      <div
        className="overflow-hidden touch-pan-x"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex items-center transition-transform duration-500 ease-in-out md:my-10 my-5"
          style={{
            padding: '20px 0px sm:30px 0px',
            gap: '10px sm:15px lg:20px',
            transform:
              companies.length > itemsPerView
                ? `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                : 'translateX(0)',
            width:
              companies.length > itemsPerView
                ? `${(companies.length / itemsPerView) * 100}%`
                : '100%',
          }}
        >
          {companies.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className={clsx(
                'flex justify-center items-center transition-all duration-300 rounded-lg cursor-pointer group',
                'flex-shrink-0',
                // Responsive sizing
                'w-[120px] min-h-[60px] sm:w-[140px] sm:min-h-[70px] md:w-[180px] md:min-h-[80px] lg:w-[220px] lg:min-h-[90px] xl:w-[250px] xl:min-h-[100px]',
                // Responsive padding
                'p-2 sm:p-3 md:p-4 lg:p-5'
              )}
              onClick={() => {
                if (company.websiteUrl) {
                  window.open(company.websiteUrl, '_blank');
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (
                  (e.key === 'Enter' || e.key === ' ') &&
                  company.websiteUrl
                ) {
                  e.preventDefault();
                  window.open(company.websiteUrl, '_blank');
                }
              }}
              aria-label={`Visit ${company.name} website`}
            >
              <div className="flex items-center justify-center w-full h-full">
                {company.logo?.url ? (
                  <Image
                    src={formatImageUrl(company.logo.url)}
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:opacity-100 transition-opacity duration-300"
                    width={company.logo.width || 100}
                    height={company.logo.height || 50}
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 180px, (max-width: 1280px) 220px, 250px"
                    onError={(e) => {
                      // Fallback to company name if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                            <div class="text-neutral-20 group-hover:text-neutral-10 font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-colors duration-300 text-center px-2">
                              ${company.name}
                            </div>
                          `;
                      }
                    }}
                  />
                ) : (
                  <div className="text-neutral-20 group-hover:text-neutral-10 font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-colors duration-300 text-center px-2">
                    {company.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByCompanies;
