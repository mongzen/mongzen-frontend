'use client';

import { Icon } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

interface ServiceCardProps {
  icon?: Icon;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  onClick?: () => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  buttonText = 'Learn More',
  buttonHref,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (buttonHref) {
      window.open(buttonHref, '_self');
    }
  };

  return (
    <div
      className={clsx('p-[50px] flex flex-col justify-between', className)}
      style={{
        aspectRatio: 532 / 577,
      }}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-6">
          <div
            className="w-16 h-16 rounded-[10px] flex items-center justify-center border"
            style={{
              border: '1px solid #2E2E2E',
              background:
                'linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
            }}
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL_ADMIN + icon.url}
              alt={icon.name || 'Service Icon'}
              width={icon.width || 64}
              height={icon.height || 64}
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 mb-6">
        {/* Title */}
        <h3
          className="mb-4"
          style={{
            color: '#FFF',
            fontFamily: 'Barlow, sans-serif',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: '#E6E6E6',
            fontFamily: 'Barlow, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.096px',
          }}
        >
          {description}
        </p>
      </div>

      {/* Grey Button */}
      <button
        onClick={handleClick}
        className="flex items-center justify-center px-6 py-3 bg-dark-15 hover:bg-dark-20 rounded-lg transition-all duration-300 group min-h-6 font-medium text-neutral-15"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;
