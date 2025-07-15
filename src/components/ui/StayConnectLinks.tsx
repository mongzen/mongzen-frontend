import { StayConnect } from '@/types/components';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';
import { ButtonSquareLinear } from './ButtonSquareLinear';

interface Props {
  data: StayConnect;
  className?: string;
}

export function StayConnectLinks({ data, className }: Props) {
  const { title, Social } = data;
  return (
    <div
      className={clsx(
        'flex items-center gap-5 px-6 py-3.5 border border-neutral-55 rounded-xl',
        'pl-6 pr-3.5',
        className
      )}
    >
      {title && <span className="text-button text-neutral-15">{title}</span>}
      {Social?.map((social) => (
        <ButtonSquareLinear
          key={social.id}
          href={social.link}
          size="md"
          ariaLabel={social.title}
        >
          {social.icon?.url && (
            <Image
              src={formatImageUrl(social.icon?.url)}
              alt={social.icon.alternativeText || social.title}
              width={24}
              height={24}
              className="object-contain"
            />
          )}
        </ButtonSquareLinear>
      ))}
    </div>
  );
}
