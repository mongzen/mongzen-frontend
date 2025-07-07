'use client';

import { Icon, PortableTextBlock } from '@/types';
import clsx from 'clsx';
import { BaseCard, CardContent, CardIcon } from '../BaseCard';

interface WhyChooseCardProps {
  icon?: Icon;
  title: string | PortableTextBlock[];
  description: string | PortableTextBlock[];
  className?: string;
  aspectRatio?: number;
}

export const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon,
  title,
  description,
  className = '',
  aspectRatio = 532 / 577,
}) => {
  return (
    <BaseCard
      className={clsx('gap-6 lg:gap-10', className)}
      aspectRatio={aspectRatio}
    >
      {/* Icon and Title Section */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        {icon && <CardIcon icon={icon} size="md" />}

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
          {typeof title === 'string' ? title : <CardContent title={title} />}
        </h3>
      </div>

      {/* Description */}
      <div className="text-sm sm:text-base lg:text-lg text-neutral-20 leading-relaxed">
        {typeof description === 'string' ? (
          description
        ) : (
          <CardContent title="" description={description} />
        )}
      </div>
    </BaseCard>
  );
};

export default WhyChooseCard;
