import { WipeButton } from '@/components/ui';
import { SectionTitleSubtitle } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface ContactFAQSectionProps {
  data: SectionTitleSubtitle;
  className?: string;
}

export function ContactFAQSection({ data, className }: ContactFAQSectionProps) {
  const { title, subtitle, background, icon, button_text, button_link } = data;

  return (
    <section
      className={clsx(
        'relative text-white overflow-hidden border-t border-dark-15',
        className
      )}
    >
      {background && (
        <div className="absolute inset-0 z-0">
          <Image
            src={background.url}
            alt={background.alternativeText || 'Background'}
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-90/80 via-dark-90/60 to-dark-90/80" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
        {icon && (
          <div className="mb-6 flex justify-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-50/10">
              <Image
                src={icon.url}
                alt={icon.alternativeText || 'Icon'}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        )}

        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="text-lg lg:text-xl text-neutral-20 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {button_text && button_link && (
          <Link href={button_link}>
            <WipeButton
              variant="outline"
              color="accent"
              size="lg"
              className="inline-flex"
            >
              {button_text}
            </WipeButton>
          </Link>
        )}
      </div>
    </section>
  );
}
