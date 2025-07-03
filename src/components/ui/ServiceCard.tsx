'use client';

import { Icon, PortableTextBlock } from '@/types';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';

interface ServiceCardProps {
  icon?: Icon;
  title: string | PortableTextBlock[];
  description: string | PortableTextBlock[];
  buttonText?: string;
  buttonHref?: string;
  onClick?: () => void;
  className?: string;
  aspectRatio?: number; // Optional aspect ratio prop
}

const PortableText = ({ value }: { value: PortableTextBlock[] }) => {
  return (
    <div>
      {value &&
        value.length > 0 &&
        value.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h3 key={index} className={`text-${block.level}`}>
                {block.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </h3>
            );
          } else if (block.type === 'paragraph') {
            return (
              <p key={index}>
                {block.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            );
          }
          return null;
        })}
    </div>
  );
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  onClick,
  className = '',
  aspectRatio = 532 / 577,
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
        aspectRatio,
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
              src={formatImageUrl(icon.url)}
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
        <h3 className="mb-4 text-[24px] font-semibold">
          {typeof title === 'string' ? title : <PortableText value={title} />}
        </h3>

        {/* Description */}
        <div className="text-[16px] text-neutral-20 leading-[24px] font-normal tracking-[-0.096px]">
          {typeof description === 'string' ? (
            description
          ) : (
            <PortableText value={description} />
          )}
        </div>
      </div>

      {/* Grey Button */}
      {buttonText && (
        <button
          onClick={handleClick}
          className="flex items-center justify-center px-6 py-3 bg-dark-15 hover:bg-dark-20 rounded-lg transition-all duration-300 group min-h-6 font-medium text-neutral-15"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
