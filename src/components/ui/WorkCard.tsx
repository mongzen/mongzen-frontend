'use client';

import { Icon, PortableTextBlock } from '@/types';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface WorkCardProps {
  image?: Icon;
  title: string | PortableTextBlock[];
  name: string | PortableTextBlock[];
  description: string | PortableTextBlock[];
  link?: string;
  onClick?: () => void;
  className?: string;
  aspectRatio?: number;
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

export const WorkCard: React.FC<WorkCardProps> = ({
  image,
  title,
  name,
  description,
  link,
  onClick,
  className = '',
  aspectRatio = 532 / 577,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link, '_blank');
    }
  };

  const CardContent = () => (
    <div
      className={clsx(
        'p-[50px] flex flex-col justify-between cursor-pointer hover:bg-dark-5 transition-colors duration-300',
        className
      )}
      style={{
        aspectRatio,
      }}
    >
      {/* Image */}
      {image && (
        <div className="mb-6">
          <div className="w-full h-32 rounded-[10px] overflow-hidden border border-dark-15">
            <Image
              src={formatImageUrl(image.url)}
              alt={image.name || 'Work Image'}
              width={image.width || 400}
              height={image.height || 128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 mb-6">
        <h3 className="mb-2 text-[24px] font-semibold">
          {typeof title === 'string' ? title : <PortableText value={title} />}
        </h3>

        <h4 className="mb-4 text-[18px] font-medium text-primary-50">
          {typeof name === 'string' ? name : <PortableText value={name} />}
        </h4>

        {/* Description */}
        <div className="text-[16px] text-neutral-20 leading-[24px] font-normal tracking-[-0.096px]">
          {typeof description === 'string' ? (
            description
          ) : (
            <PortableText value={description} />
          )}
        </div>
      </div>

      {/* View Project Button */}
      {link && (
        <div className="flex items-center justify-center px-6 py-3 bg-dark-15 hover:bg-dark-20 rounded-lg transition-all duration-300 group min-h-6 font-medium text-neutral-15">
          View Project
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      )}
    </div>
  );

  if (link && !onClick) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div onClick={handleClick}>
      <CardContent />
    </div>
  );
};

export default WorkCard;
