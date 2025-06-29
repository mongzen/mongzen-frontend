'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonBlurProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const ButtonBlur = React.forwardRef<HTMLButtonElement, ButtonBlurProps>(
  ({ className, size = 'md', href, children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm h-10',
      md: 'px-6 py-3 text-base h-12',
      lg: 'px-8 py-4 text-lg h-14',
    };

    const baseClasses = clsx(
      'inline-flex items-center justify-center gap-[10px] rounded-[10px] border border-neutral-50 bg-neutral-50/20 backdrop-blur-md text-white font-medium transition-all duration-300 hover:bg-neutral-50/30 hover:border-neutral-40 focus:outline-none focus:ring-2 focus:ring-primary-50/50',
      sizeClasses[size],
      className
    );

    const buttonContent = (
      <button className={baseClasses} ref={ref} {...props}>
        {children}
      </button>
    );

    if (href) {
      return (
        <Link href={href} className="inline-block">
          {buttonContent}
        </Link>
      );
    }

    return buttonContent;
  }
);

ButtonBlur.displayName = 'ButtonBlur';

export { ButtonBlur };
