'use client';

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
import clsx from 'clsx';
import Image from 'next/image';

interface ButtonContactProps {
  data: ButtonContactType;
  className?: string;
}

export function ButtonContact({ data, className }: ButtonContactProps) {
  const { title, icon, link } = data;

  const handleClick = () => {
    if (link) {
      if (
        link.startsWith('mailto:') ||
        link.startsWith('tel:') ||
        link.startsWith('http')
      ) {
        window.open(link, '_blank');
      } else {
        // Assume it's an internal route
        window.location.href = link;
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        COMPONENT_STYLES.CARD_BASE,
        COMPONENT_STYLES.CARD_HOVER,
        STATES.GROUP,
        STATES.HOVER_BORDER_PRIMARY,
        STATES.HOVER_SHADOW,
        TRANSITIONS.ALL,
        TRANSITIONS.DURATION_200,
        'flex items-center gap-4 text-left w-full',
        SPACING.PADDING.MD,
        className
      )}
    >
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
            src={icon.url}
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
          Click to{' '}
          {link.startsWith('mailto:')
            ? 'send email'
            : link.startsWith('tel:')
              ? 'call'
              : 'visit'}
        </p>
      </div>
    </button>
  );
}
