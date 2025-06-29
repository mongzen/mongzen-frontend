'use client';

import clsx from 'clsx';
import { ButtonSquareLinear } from './ButtonSquareLinear';
import IconFacebook from './svg/IconFacebook';
import IconLinkedIn from './svg/IconLinkedIn';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface SocialProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function Social({
  className = '',
  size = 'md',
  showLabel = false,
}: SocialProps) {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      href: '#',
      ariaLabel: 'Visit our Facebook page',
      icon: <IconFacebook />,
    },
    {
      name: 'LinkedIn',
      href: '#',
      ariaLabel: 'Visit our LinkedIn profile',
      icon: <IconLinkedIn />,
    },
  ];

  return (
    <div
      className={clsx(
        'flex items-center gap-5 px-6 py-3.5 border border-neutral-55 rounded-xl',
        'pl-6 pr-3.5',
        className
      )}
    >
      {showLabel && (
        <span className="text-button text-neutral-15">Stay Connected</span>
      )}
      {socialLinks.map((social) => (
        <ButtonSquareLinear
          key={social.name}
          href={social.href}
          size={size}
          ariaLabel={social.ariaLabel}
        >
          {social.icon}
        </ButtonSquareLinear>
      ))}
    </div>
  );
}
