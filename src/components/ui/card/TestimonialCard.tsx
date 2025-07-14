'use client';

import { Icon, PortableTextBlock } from '@/types';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';

interface TestimonialCardProps {
  icon?: Icon;
  title: string | PortableTextBlock[];
  authorName?: string; // Optional author name prop
  authorRole?: string; // Optional author role prop
  className?: string;
  websiteUrl?: string; // Optional website URL prop
}

const PortableText = ({ value }: { value: PortableTextBlock[] }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      {value.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h3
              key={index}
              className={clsx(
                'text-primary-80 text-[28px] font-medium leading-[150%]',
                `text-${block.level}`
              )}
            >
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

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  icon,
  title,
  authorName,
  authorRole,
  className = '',
  websiteUrl,
}) => {
  return (
    <div
      className={clsx(
        'p-6 sm:p-8 md:p-10 lg:p-[50px] flex flex-col justify-between gap-6 lg:gap-8 border-dark-15 min-h-[350px] xl:aspect-[638_/_374] xl:max-h-[574px] overflow-hidden w-full',
        className
      )}
    >
      {/* Content */}
      <div className="flex-1">
        {typeof title === 'string' ? (
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-neutral-0 leading-relaxed">
            {title}
          </h3>
        ) : (
          <PortableText value={title} />
        )}
      </div>

      {/* Author Info Card */}
      {authorName && icon && (
        <div className="rounded-[8px] border-dark-15 border bg-dark-10/20 p-4 sm:p-5 flex items-center gap-3 sm:gap-4 w-full min-h-[80px] sm:min-h-[90px] lg:min-h-[103px]">
          {/* Author Photo */}
          <div
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-[8px] lg:rounded-[10px] flex items-center justify-center border overflow-hidden shrink-0"
            style={{
              border: '1px solid #2E2E2E',
              background:
                'linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
            }}
          >
            <Image
              src={formatImageUrl(icon.url)}
              alt={icon.name || 'Author Photo'}
              width={icon.width || 60}
              height={icon.height || 60}
              className="aspect-square object-cover w-full h-full"
              unoptimized
            />
          </div>

          {/* Author Details & CTA */}
          <div className="flex justify-between items-center gap-3 sm:gap-4 w-full min-w-0">
            <div className="flex flex-col flex-1 min-w-0">
              {authorName && (
                <span className="font-medium text-neutral-0 text-sm sm:text-base truncate">
                  {authorName}
                </span>
              )}
              {authorRole && (
                <span className="text-neutral-20 text-xs sm:text-sm truncate">
                  {authorRole}
                </span>
              )}
            </div>
            {websiteUrl && (
              <button className="flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-dark-15 hover:bg-dark-20 rounded-lg transition-all duration-300 group min-h-6 font-medium text-neutral-15 text-xs sm:text-sm lg:text-base shrink-0">
                <span className="hidden sm:inline">Open Website</span>
                <span className="sm:hidden">Open</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
