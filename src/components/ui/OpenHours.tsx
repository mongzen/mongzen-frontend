'use client';

import { OpenHours as OpenHoursType } from '@/types';
import clsx from 'clsx';

interface OpenHoursProps {
  data: OpenHoursType;
  className?: string;
}

export function OpenHours({ data, className }: OpenHoursProps) {
  const { title, subtitle } = data;

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 p-6 lg:p-8 rounded-lg border border-dark-15 bg-[#24242480]',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-accent-50/10">
          <svg
            className="w-6 h-6 text-accent-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="text-neutral-20 leading-relaxed whitespace-pre-line">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
