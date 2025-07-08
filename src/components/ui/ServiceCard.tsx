'use client';

import { Icon, PortableTextBlock } from '@/types';
import clsx from 'clsx';
import { BaseCard, CardAction, CardContent, CardIcon } from './BaseCard';

interface ServiceCardProps {
  icon?: Icon;
  title: string | PortableTextBlock[];
  description: string | PortableTextBlock[];
  buttonText?: string;
  buttonHref?: string;
  onClick?: () => void;
  className?: string;
  aspectRatio?: number;
}

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
  return (
    <BaseCard
      className={clsx('justify-between', className)}
      aspectRatio={aspectRatio}
      onClick={onClick}
      href={buttonHref}
    >
      {/* Icon Section */}
      {icon && (
        <div className="mb-6">
          <CardIcon icon={icon} size="lg" />
        </div>
      )}

      {/* Content Section */}
      <CardContent
        title={title}
        description={description}
        titleClassName="text-[24px] text-white"
        descriptionClassName="text-[16px] text-neutral-20 leading-[24px] font-normal tracking-[-0.096px]"
      />

      {/* Action Button */}
      {buttonText && (
        <div className="mt-6">
          <CardAction
            text={buttonText}
            onClick={onClick}
            href={buttonHref}
            variant="secondary"
          />
        </div>
      )}
    </BaseCard>
  );
};

export default ServiceCard;
