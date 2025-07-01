'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

interface PageHeaderProps {
  icon?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  icon,
  title,
  subtitle,
  children,
  className = '',
  backgroundImage,
}) => {
  return (
    <section
      className={clsx(
        className,
        'flex flex-col gap-[14px] relative min-h-[336px] justify-center items-center border-b border-dark-15'
      )}
      style={{
        background: `linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%), url(/images/squares.png) 0% 0% / 22px 22px repeat, url(${backgroundImage}) #232323 50% / cover no-repeat`,
        backgroundBlendMode: 'color, luminosity, overlay',
      }}
    >
      {/* Icon */}
      {icon ? (
        <Image
          src={icon ? icon : '/images/logo.svg'}
          alt="Page Icon"
          width={64}
          height={64}
        />
      ) : null}

      {/* Title */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold">
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
