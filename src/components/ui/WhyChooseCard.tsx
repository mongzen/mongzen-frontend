'use client';

import { Icon, PortableTextBlock } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

interface WhyChooseCardProps {
  icon?: Icon;
  title: string | PortableTextBlock[];
  description: string | PortableTextBlock[];
  onClick?: () => void;
  className?: string;
  aspectRatio?: number; // Optional aspect ratio prop
}

const PortableText = ({ value }: { value: PortableTextBlock[] }) => {
  return (
    <div>
      {value.map((block, index) => {
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

export const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon,
  title,
  description,
  onClick,
  className = '',
  aspectRatio = 532 / 577,
}) => {
  return (
    <div
      className={clsx(
        'p-6 sm:p-8 md:p-10 lg:p-[50px] flex flex-col gap-6 lg:gap-10',
        className
      )}
      style={{
        aspectRatio,
      }}
    >
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        {/* Icon */}
        {icon && (
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-[8px] lg:rounded-[10px] flex items-center justify-center border shrink-0"
            style={{
              border: '1px solid #2E2E2E',
              background:
                'linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
            }}
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + icon.url}
              alt={icon.name || 'Service Icon'}
              width={icon.width || 64}
              height={icon.height || 64}
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
              priority
            />
          </div>
        )}

        {/* Content */}
        <h3
          className="mb-0 flex-1 min-w-0"
          style={{
            color: '#FFF',
            fontFamily: 'Barlow, sans-serif',
            fontSize: 'clamp(16px, 4vw, 24px)',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          {typeof title === 'string' ? title : <PortableText value={title} />}
        </h3>
      </div>

      {/* Description */}
      <div className="text-sm sm:text-base lg:text-lg text-neutral-20 leading-relaxed">
        {typeof description === 'string' ? (
          description
        ) : (
          <PortableText value={description} />
        )}
      </div>
    </div>
  );
};

export default WhyChooseCard;
