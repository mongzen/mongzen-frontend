'use client';

import { Icon } from '@/components/ui';
import PortableText from '@/components/ui/PortableText';
import { FAQItem } from '@/types';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface FAQAccordionItemProps {
  faq: FAQItem;
  isLastInColumn?: boolean;
  className?: string;
}

const FAQAccordionItemCard: React.FC<FAQAccordionItemProps> = ({
  faq,
  isLastInColumn = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div
      className={clsx(
        'transition-all duration-300',
        // Border styling - remove bottom border for last item in column
        !isLastInColumn && 'border-b border-dark-15',
        className
      )}
    >
      {/* Question Header - Clickable */}
      <button
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        className={clsx(
          'w-full p-[20px] sm:p-[30px] lg:p-[30px_50px] flex gap-4 sm:gap-6 lg:gap-8 items-start text-left transition-all duration-300 focus:outline-none group'
        )}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${faq.id}`}
        type="button"
        role="button"
        tabIndex={0}
      >
        {/* Number Badge */}
        <div
          className={clsx(
            'flex p-3 sm:p-4 lg:p-5 flex-col gap-2.5 aspect-square rounded-xl text-lg sm:text-xl lg:text-[28px] font-medium leading-[150%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 items-center justify-center shrink-0 transition-all duration-300 border-[#2E2E2E] border',
            isOpen ? 'text-[#C5FF66]' : 'text-neutral-0'
          )}
          style={{
            background:
              'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
          }}
        >
          {faq.number}
        </div>

        {/* Question Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between w-full min-h-19">
            <h3
              className={clsx(
                'font-semibold text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300 text-[22px]',
                isOpen
                  ? 'text-[#C5FF66]'
                  : 'text-neutral-0 group-hover:text-neutral-10'
              )}
            >
              {faq.question}
            </h3>

            {/* Plus/Minus Icon */}
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ml-4 shrink-0">
              <Icon
                name="PlusSmallIcon"
                size="lg"
                className={clsx(
                  'transition-all duration-500 ease-in-out',
                  isOpen
                    ? 'rotate-45 text-[#C5FF66]'
                    : 'rotate-0 text-neutral-20 group-hover:text-neutral-10',
                  'transform-gpu' // Hardware acceleration
                )}
              />
            </div>
          </div>
          {/* Answer Content - Collapsible */}
          <div
            id={`faq-content-${faq.id}`}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              height: isOpen ? `${contentHeight}px` : '0px',
              opacity: isOpen ? 1 : 0,
            }}
            aria-hidden={!isOpen}
          >
            <div
              ref={contentRef}
              className={clsx('transition-all duration-300')}
            >
              <div
                className={clsx(
                  'text-xs sm:text-sm lg:text-base leading-relaxed transition-all duration-300',
                  isOpen
                    ? 'text-neutral-10 transform translate-y-0 opacity-100'
                    : 'text-neutral-20 transform translate-y-2 opacity-0'
                )}
              >
                {faq.answer && faq.answer}
                {faq.answerContent && faq.answerContent.length > 0 && (
                  <PortableText value={faq.answerContent} />
                )}
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default FAQAccordionItemCard;
