'use client';

import { FAQItem } from '@/types';
import clsx from 'clsx';
import FAQAccordionItemCard from './card/FAQAccordionItemCard';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  maxItems?: number; // Maximum number of items to show
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className,
  maxItems = 8,
}) => {
  // Limit items to maxItems (default 8)
  const displayItems = items.slice(0, maxItems);

  // Split items into two groups - 4 for left column, 4 for right column
  const itemsPerColumn = Math.ceil(displayItems.length / 2);
  const leftColumnItems = displayItems.slice(0, itemsPerColumn);
  const rightColumnItems = displayItems.slice(itemsPerColumn);

  return (
    <div className={clsx(className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="border-dark-15 lg:border-r">
          {leftColumnItems.map((faq, index) => (
            <FAQAccordionItemCard
              key={faq.id}
              faq={faq}
              isLastInColumn={index === leftColumnItems.length - 1}
              className={clsx(
                // Stagger animation delays for visual appeal
                'animate-fade-in',
                index === 0 && '[animation-delay:0ms]',
                index === 1 && '[animation-delay:100ms]',
                index === 2 && '[animation-delay:200ms]',
                index === 3 && '[animation-delay:300ms]'
              )}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="border-dark-15">
          {rightColumnItems.map((faq, index) => (
            <FAQAccordionItemCard
              key={`faq-item-${index}`}
              faq={faq}
              isLastInColumn={index === rightColumnItems.length - 1}
              className={clsx(
                // Stagger animation delays for visual appeal
                'animate-fade-in',
                index === 0 && '[animation-delay:400ms]',
                index === 1 && '[animation-delay:500ms]',
                index === 2 && '[animation-delay:600ms]',
                index === 3 && '[animation-delay:700ms]'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
