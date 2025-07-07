'use client';

import { StayConnect as StayConnectType } from '@/types';
import clsx from 'clsx';
import { ButtonContact } from './ButtonContact';

interface StayConnectProps {
  data: StayConnectType;
  className?: string;
}

export function StayConnect({ data, className }: StayConnectProps) {
  const { title, Social } = data;

  return (
    <div className={clsx('flex flex-col gap-6', className)}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {Social?.map((socialItem) => (
          <ButtonContact
            key={socialItem.id}
            data={socialItem}
            className="flex-1"
          />
        ))}
      </div>
    </div>
  );
}
