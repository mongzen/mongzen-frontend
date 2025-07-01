'use client';

import { Icon, PortableTextBlock } from '@/types';
import clsx from 'clsx';

interface TestimonialCardProps {
  icon?: Icon;
  title: string | PortableTextBlock[];
  authorName?: string; // Optional author name prop
  authorRole?: string; // Optional author role prop
  className?: string;
  aspectRatio?: number; // Optional aspect ratio prop
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
  aspectRatio = 532 / 577,
}) => {
  return (
    <div
      className={clsx('p-[50px] flex flex-col justify-between', className)}
      style={{
        aspectRatio,
      }}
    >
      {/* Content */}
      {typeof title === 'string' ? (
        <h3>{title}</h3>
      ) : (
        <PortableText value={title} />
      )}
      {/* Description */}
      <div className="rounded-[8px] border-dark-15 border bg-dark-10/20 p-5 flex items-center gap-2.5 w-full h-[103px]">
        {/* Icon */}
        {icon && (
          <div
            className="w-16 h-16 rounded-[10px] flex items-center justify-center border"
            style={{
              border: '1px solid #2E2E2E',
              background:
                'linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
            }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${icon.url}`}
              alt={icon.name || 'Service Icon'}
              width={icon.width || 64}
              height={icon.height || 64}
            />
          </div>
        )}
        {/* Author Info */}
        <div className="flex justify-between gap-2.5 w-full">
          <div className="flex flex-col flex-1 w-full">
            {authorName && <span className="font-medium">{authorName}</span>}
            {authorRole && <span>{authorRole}</span>}
          </div>
          <button
            // onClick={handleClick}
            className="flex items-center justify-center px-6 py-3 bg-dark-15 hover:bg-dark-20 rounded-lg transition-all duration-300 group min-h-6 font-medium text-neutral-15"
          >
            Open Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
