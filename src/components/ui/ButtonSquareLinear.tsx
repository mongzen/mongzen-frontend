'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonSquareLinearProps {
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
}

export function ButtonSquareLinear({
  children,
  onClick,
  href,
  className = '',
  size = 'md',
  disabled = false,
  ariaLabel,
}: ButtonSquareLinearProps) {
  const getButtonStyles = () => {
    const baseStyles = {
      position: 'relative' as const,
      display: 'flex',
      padding: '20px',
      flexDirection: 'column' as const,
      alignItems: 'flex-start' as const,
      justifyContent: 'center' as const,
      gap: '10px',
      borderRadius: '8px',
      border: '1px solid #2E2E2E',
      background:
        'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
      color: '#a0a0a0',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      overflow: 'hidden',
      fontWeight: 500,
      textDecoration: 'none',
      outline: 'none',
      opacity: disabled ? 0.5 : 1,
    };

    const sizeStyles = {
      sm: { width: '40px', height: '40px', fontSize: '14px', padding: '8px' },
      md: { width: '48px', height: '48px', fontSize: '16px', padding: '12px' },
      lg: { width: '56px', height: '56px', fontSize: '18px', padding: '16px' },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
    };
  };

  const hoverStyles = {
    borderColor: '#9eff00',
    backgroundColor: '#9eff00',
    color: '#000000',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(158, 255, 0, 0.2)',
  };

  const buttonContent = (
    <motion.div
      style={getButtonStyles()}
      className={clsx(className)}
      whileHover={disabled ? {} : hoverStyles}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel}
      role={href ? 'link' : 'button'}
    >
      {/* Background gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #9eff00 0%, #00d4ff 100%)',
          borderRadius: '7px',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </motion.div>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
