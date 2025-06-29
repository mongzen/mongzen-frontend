import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

interface WipeButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function WipeButton({
  children = 'INQUIRE',
  onClick,
  className = '',
  variant = 'outline',
  size = 'md',
}: WipeButtonProps) {
  // Split text into individual characters for animation
  const textContent = typeof children === 'string' ? children : 'INQUIRE';
  const characters = useMemo(() => textContent.split(''), [textContent]);

  const getButtonStyles = () => {
    const baseStyles = {
      position: 'relative' as const,
      overflow: 'hidden',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 600,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      border: '1px solid',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const sizeStyles = {
      sm: { padding: '0.5rem 1rem', fontSize: '0.875rem', height: '2.5rem' },
      md: { padding: '0.75rem 1.5rem', fontSize: '1rem', height: '3rem' },
      lg: { padding: '1rem 2rem', fontSize: '1.125rem', height: '3.5rem' },
    };

    const variantStyles = {
      primary: {
        borderColor: '#9eff00',
        backgroundColor: 'transparent',
        color: '#9eff00',
      },
      secondary: {
        borderColor: '#00d4ff',
        backgroundColor: 'transparent',
        color: '#00d4ff',
      },
      outline: {
        borderColor: '#e6e6e6',
        backgroundColor: 'transparent',
        color: '#e6e6e6',
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const getHoverColors = () => {
    switch (variant) {
      case 'primary':
        return { bg: '#9eff00', text: '#9eff00' };
      case 'secondary':
        return { bg: '#00d4ff', text: '#ffffff' };
      case 'outline':
        return { bg: '#e6e6e6', text: '#ffffff' };
      default:
        return { bg: '#e6e6e6', text: '#ffffff' };
    }
  };

  const hoverColors = getHoverColors();

  // Professional easing curves
  const easings = {
    smooth: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    snappy: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
    bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  };

  return (
    <motion.button
      // initial={{ scale: 1 }}
      // whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={getButtonStyles()}
      onClick={onClick}
      className={className}
      transition={{
        scale: { duration: 0.2, ease: easings.snappy },
      }}
      initial="rest"
      whileHover="hover"
    >
      {/* Background wipe overlay */}
      <motion.div
        initial={{ x: '-100%' }}
        whileHover={{
          x: '0%',
          transition: {
            duration: 0.4,
            ease: easings.smooth,
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: hoverColors.bg,
          zIndex: 1,
        }}
      />

      {/* Content container */}
      <div className="relative z-[2] overflow-hidden h-full flex items-center justify-center">
        {/* Original text layer */}
        <motion.div
          initial="rest"
          whileHover="hover"
          className="relative inline-block"
        >
          <div className="relative inline-block">
            {characters.map((char, index) => (
              <motion.div
                key={`original-${index}`}
                variants={{
                  rest: { y: 0 },
                  hover: {
                    y: '-100%',
                    transition: {
                      duration: 0.3,
                      ease: easings.smooth,
                      delay: index * 0.05,
                    },
                  },
                }}
                className="relative inline-block"
              >
                {char}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hover text layer */}
        <motion.div
          style={{
            color: hoverColors.text,
          }}
          className={clsx('absolute inset-0 flex items-center justify-center')}
          aria-hidden="true"
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
          >
            {characters.map((char, index) => (
              <motion.div
                key={`hover-${index}`}
                variants={{
                  rest: { y: '100%' },
                  hover: {
                    y: '0%',
                    transition: {
                      duration: 0.3,
                      ease: easings.smooth,
                      delay: index * 0.05,
                    },
                  },
                }}
                className="relative inline-block"
              >
                {char}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.button>
  );
}
