'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
  patternImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  children,
  className = '',
  backgroundImage = '/images/squares.png',
  patternImage = '/images/squares.png',
}) => {
  return (
    <section
      className={clsx(
        className,
        'flex flex-col gap-[14px] relative min-h-[336px] justify-center items-center border-b border-dark-15'
      )}
      style={{
        background: `
          linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
          url(${patternImage}) lightgray 0% 0% / 100px 100px repeat,
          url(${backgroundImage}) lightgray 50% / cover no-repeat
        `,
        backgroundBlendMode: 'color, normal, overlay',
      }}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: 'url(/images/squares.png) 0% 0% / 20px 20px repeat',
        }}
      ></div>
      {/* Title */}
      <h1
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[48px]"
        style={{
          color: '#FFF',
          fontFamily: 'Barlow, sans-serif',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 'normal',
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-center max-w-4xl"
          style={{
            color: '#E6E6E6',
            fontFamily: 'Barlow, sans-serif',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.108px',
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Additional content */}
      {children}
    </section>
  );
};

export default PageHeader;
