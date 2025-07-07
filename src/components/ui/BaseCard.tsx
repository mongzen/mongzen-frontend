/**
 * Base Card Component
 * A reusable card component that can be extended for different use cases
 */

'use client';

import { Icon, PortableTextBlock } from '@/types';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import PortableText from './PortableText';

export interface BaseCardProps {
  icon?: Icon;
  title?: string | PortableTextBlock[];
  description?: string | PortableTextBlock[];
  className?: string;
  aspectRatio?: number;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export interface CardIconProps {
  icon: Icon;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface CardContentProps {
  title: string | PortableTextBlock[];
  description?: string | PortableTextBlock[];
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface CardActionProps {
  text: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

/**
 * Card Icon Component
 * Reusable icon container with consistent styling
 */
export const CardIcon: React.FC<CardIconProps> = ({
  icon,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    lg: 'w-16 h-16',
  };

  const imageSizes = {
    sm: { width: 32, height: 32 },
    md: { width: 64, height: 64 },
    lg: { width: 80, height: 80 },
  };

  return (
    <div
      className={clsx(
        sizeClasses[size],
        'rounded-[8px] lg:rounded-[10px] flex items-center justify-center border shrink-0',
        className
      )}
      style={{
        border: '1px solid #2E2E2E',
        background:
          'linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
      }}
    >
      <Image
        src={formatImageUrl(icon.url)}
        alt={icon.alternativeText || icon.name || 'Icon'}
        width={imageSizes[size].width}
        height={imageSizes[size].height}
        className="object-contain"
        priority
      />
    </div>
  );
};

/**
 * Card Content Component
 * Handles title and description rendering with PortableText support
 */
export const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
  titleClassName = '',
  descriptionClassName = '',
}) => {
  return (
    <div className="flex-1">
      <h3 className={clsx('mb-4 font-semibold', titleClassName)}>
        {typeof title === 'string' ? title : <PortableText value={title} />}
      </h3>

      {description && (
        <div className={clsx('leading-relaxed', descriptionClassName)}>
          {typeof description === 'string' ? (
            description
          ) : (
            <PortableText value={description} />
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Card Action Component
 * Reusable button/link component for cards
 */
export const CardAction: React.FC<CardActionProps> = ({
  text,
  onClick,
  href,
  external = false,
  variant = 'secondary',
  className = '',
}) => {
  const variantClasses = {
    primary: 'bg-primary-50 text-primary-contrast hover:bg-primary-60',
    secondary: 'bg-dark-15 hover:bg-dark-20 text-neutral-15',
    ghost:
      'bg-transparent border border-dark-15 hover:border-primary-50 text-neutral-20 hover:text-primary-50',
  };

  const baseClasses = clsx(
    'flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300 font-medium min-h-6',
    variantClasses[variant],
    className
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (external) {
        window.open(href, '_blank', 'noopener noreferrer');
      } else {
        window.location.href = href;
      }
    }
  };

  if (href && !onClick) {
    const Component = external ? 'a' : Link;
    const linkProps = external
      ? { href, target: '_blank', rel: 'noopener noreferrer' }
      : { href };

    return (
      <Component {...linkProps} className={baseClasses}>
        {text}
      </Component>
    );
  }

  return (
    <button onClick={handleClick} className={baseClasses}>
      {text}
    </button>
  );
};

/**
 * Base Card Component
 * The main card container that can be customized for different use cases
 */
export const BaseCard: React.FC<
  BaseCardProps & { children?: React.ReactNode }
> = ({
  className = '',
  aspectRatio,
  onClick,
  href,
  external = false,
  children,
}) => {
  const cardClasses = clsx(
    'p-6 sm:p-8 md:p-10 lg:p-[50px] flex flex-col',
    onClick || href
      ? 'cursor-pointer hover:bg-dark-5 transition-colors duration-300'
      : '',
    className
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (external) {
        window.open(href, '_blank', 'noopener noreferrer');
      } else {
        window.location.href = href;
      }
    }
  };

  const cardStyle = aspectRatio ? { aspectRatio } : {};

  if (href && !onClick) {
    const Component = external ? 'div' : Link;
    const linkProps = external
      ? { href, target: '_blank', rel: 'noopener noreferrer' }
      : { href };

    return (
      <Component {...linkProps} className={cardClasses} style={cardStyle}>
        {children}
      </Component>
    );
  }

  return (
    <div
      onClick={onClick ? handleClick : undefined}
      className={cardClasses}
      style={cardStyle}
    >
      {children}
    </div>
  );
};
