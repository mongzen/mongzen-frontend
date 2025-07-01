'use client';

import { TrustedByCompany } from '@/types/api';
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
      if (window.innerWidth < 640) {
        setItemsPerView(3); // Mobile
      } else if (window.innerWidth < 768) {
        setItemsPerView(4); // Small tablet
      } else if (window.innerWidth < 1024) {
        setItemsPerView(6); // Tablet
      } else {
        setItemsPerView(6); // Desktop
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
        'bg-neutral-60 mt-[-10px] border-x border-b border-dark-15'
      )}
    >
      {/* Title Button */}
      <div className="flex justify-center">
        <div
          style={{
            display: 'flex',
            padding: '14px 24px',
            alignItems: 'flex-start',
            gap: '10px',
            borderRadius: '100px',
            border: '1px solid #262626',
            background: '#1A1A1A',
            zIndex: 1,
            marginTop: '-15px',
          }}
        >
          <span
            style={{
              color: '#FDFFFA',
              textAlign: 'center',
              fontFamily: 'Barlow, sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* Logo Slider Container */}
      <div
        className="overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            display: 'flex',
            padding: '30px 0px',
            alignItems: 'flex-start',
            gap: '20px',
            transform:
              companies.length > itemsPerView
                ? `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                : 'translateX(0)',
            transition: 'transform 0.5s ease-in-out',
            width:
              companies.length > itemsPerView
                ? `${(companies.length / itemsPerView) * 100}%`
                : '100%',
          }}
        >
          {companies.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              style={{
                display: 'flex',
                padding: '16px 30px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                flex: '1 0 0',
                minWidth: '250px',
                maxWidth: '250px',
              }}
              className="transition-colors duration-300 rounded-lg cursor-pointer"
              onClick={() => {
                if (company.websiteUrl) {
                  window.open(company.websiteUrl, '_blank');
                }
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                {company.logo?.url ? (
                  <Image
                    src={company.logo.url}
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                    width={company.logo.width || 100}
                    height={company.logo.height || 50}
                    onError={(e) => {
                      // Fallback to company name if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                            <div class="text-neutral-20 hover:text-neutral-10 font-medium text-lg transition-colors duration-300">
                              ${company.name}
                            </div>
                          `;
                      }
                    }}
                  />
                ) : (
                  company.name
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
