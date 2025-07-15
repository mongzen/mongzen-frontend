import { Icon } from '@/types';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface WorkCardProps {
  image?: Icon;
  title: string;
  name: string;
  description: string;
  link?: string;
  className?: string;
  aspectRatio?: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  image,
  title,
  name,
  description,
  link,
  className = '',
}) => {
  const CardContent = () => (
    <div
      className={clsx(
        'flex flex-col justify-between cursor-pointer hover:bg-dark-5 transition-colors duration-300 space-y-7',
        className
      )}
    >
      {/* Category Header */}
      <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-dark-15">
        <h3 className="text-xl sm:text-2xl font-semibold text-dark-60">
          {title}
        </h3>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Image */}
        {image && (
          <div className="w-full rounded-[10px] overflow-hidden border border-dark-15 max-h-[430px] mb-6">
            <Image
              src={formatImageUrl(image.url)}
              alt={image.name || 'Work Image'}
              width={image.width || 700}
              height={image.height || 423}
              className="w-full h-full object-cover max-w-full"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 space-y-6 pb-6">
          <div className="flex items-center justify-between group">
            <div className="flex-1 space-y-6">
              <h4 className="text-[24px] font-medium text-dark-90">{name}</h4>

              {/* View Project Button */}
              {link && (
                <div className="flex items-center">
                  <div className="flex items-center justify-center px-6 py-3 bg-dark-15 hover:bg-dark-20 rounded-lg transition-all duration-300 group min-h-6 text-dark-60">
                    {link}
                  </div>
                </div>
              )}
            </div>
            <div className="bg-dark-15 hover:bg-dark-20 rounded-[8px] w-14 h-14 flex items-center justify-center transition-all duration-300 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.87344 25.1266C9.37136 25.6245 10.1786 25.6245 10.6766 25.1266L22.95 12.8531V22.525C22.95 23.2292 23.5208 23.8 24.225 23.8C24.9292 23.8 25.5 23.2292 25.5 22.525V9.775C25.5 9.07084 24.9292 8.5 24.225 8.5H11.475C10.7708 8.5 10.2 9.07084 10.2 9.775C10.2 10.4792 10.7708 11.05 11.475 11.05H21.1469L8.87344 23.3234C8.37552 23.8214 8.37552 24.6286 8.87344 25.1266Z"
                  fill="#9EFF00"
                />
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="text-[16px] text-dark-60 leading-[24px] font-normal tracking-[-0.096px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-b border-dark-15"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="block border-b border-dark-15">
      <CardContent />
    </div>
  );
};

export default WorkCard;
