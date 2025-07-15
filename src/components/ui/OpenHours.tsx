import { OpenHours as OpenHoursType } from '@/types';
import clsx from 'clsx';

interface OpenHoursProps {
  data: OpenHoursType;
  className?: string;
}

export function OpenHours({ data, className }: OpenHoursProps) {
  const { title, subtitle } = data;

  return (
    <div className={clsx('flex flex-col gap-4 py-12', className)}>
      <div className="flex items-center gap-4 text-dark-90 font-semibold">
        <h3 className="text-xl">{title}</h3>
        <div className="leading-relaxed whitespace-pre-line bg-dark-15 rounded-md px-6 py-3">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
