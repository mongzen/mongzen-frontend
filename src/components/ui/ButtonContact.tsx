import {
  BACKGROUNDS,
  BORDERS,
  COMPONENT_STYLES,
  SPACING,
  STATES,
  TRANSITIONS,
  TYPOGRAPHY,
} from '@/constants';
import { ButtonContact as ButtonContactType } from '@/types';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonContactProps {
  data: ButtonContactType;
  className?: string;
}

export function ButtonContact({ data, className }: ButtonContactProps) {
  const { title, icon, link } = data;

  const isExternalLink =
    link &&
    (link.startsWith('mailto:') ||
      link.startsWith('tel:') ||
      link.startsWith('http'));

  const getActionText = () => {
    if (!link) return 'contact';
    if (link.startsWith('mailto:')) return 'send email';
    if (link.startsWith('tel:')) return 'call';
    return 'visit';
  };

  const buttonContent = (
    <>
      {icon && (
        <div
          className={clsx(
            COMPONENT_STYLES.ICON_CONTAINER,
            BORDERS.ROUNDED,
            BACKGROUNDS.PRIMARY_10,
            STATES.GROUP_HOVER_BG,
            TRANSITIONS.ALL,
            TRANSITIONS.DURATION_200,
            'flex-shrink-0'
          )}
        >
          <Image
            src={formatImageUrl(icon.url)}
            alt={icon.alternativeText || title}
            width={24}
            height={24}
            className="text-primary-50 object-contain"
          />
        </div>
      )}
      <div className="flex-1">
        <h3
          className={clsx(
            TYPOGRAPHY.TEXT_LG,
            TYPOGRAPHY.FONT_SEMIBOLD,
            TYPOGRAPHY.TEXT_WHITE,
            STATES.GROUP_HOVER_TEXT,
            TRANSITIONS.COLORS,
            TRANSITIONS.DURATION_200
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            TYPOGRAPHY.TEXT_SM,
            TYPOGRAPHY.TEXT_NEUTRAL_30,
            STATES.HOVER_TEXT_NEUTRAL,
            TRANSITIONS.COLORS,
            TRANSITIONS.DURATION_200
          )}
        >
          Click to {getActionText()}
        </p>
      </div>
    </>
  );

  const baseClassName = clsx(
    COMPONENT_STYLES.CARD_BASE,
    COMPONENT_STYLES.CARD_HOVER,
    STATES.GROUP,
    TRANSITIONS.ALL,
    TRANSITIONS.DURATION_200,
    'flex items-center gap-4 text-left w-full',
    SPACING.PADDING.MD,
    className
  );

  if (!link) {
    return <div className={baseClassName}>{buttonContent}</div>;
  }

  if (isExternalLink) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <Link href={link} className={baseClassName}>
      {buttonContent}
    </Link>
  );
}
