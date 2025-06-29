import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

interface WipeButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'outline' | 'ghost' | 'filled';
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export function WipeButton({
  children = 'INQUIRE',
  onClick,
  className = '',
  variant = 'outline',
  color = 'primary',
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

    // Color definitions
    const colorMap = {
      primary: { main: '#9eff00', contrast: '#262626' },
      secondary: { main: '#00d4ff', contrast: '#262626' },
      accent: { main: '#ff6b00', contrast: '#262626' },
      warning: { main: '#ffeb3b', contrast: '#262626' },
      danger: { main: '#f44336', contrast: '#262626' },
      success: { main: '#4caf50', contrast: '#262626' },
      info: { main: '#2196f3', contrast: '#262626' },
    };

    const selectedColor = colorMap[color];

    // Variant-specific styles
    const variantStyles = {
      outline: {
        borderColor: selectedColor.main,
        backgroundColor: 'transparent',
        color: selectedColor.main,
      },
      ghost: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: selectedColor.main,
      },
      filled: {
        borderColor: selectedColor.main,
        backgroundColor: selectedColor.main,
        color: selectedColor.contrast,
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const getHoverColors = () => {
    // Color definitions (same as above for consistency)
    const colorMap = {
      primary: { main: '#9eff00', contrast: '#9eff00' },
      secondary: { main: '#00d4ff', contrast: '#00d4ff' },
      accent: { main: '#ff6b00', contrast: '#ff6b00' },
      warning: { main: '#ffeb3b', contrast: '#ffeb3b' },
      danger: { main: '#f44336', contrast: '#f44336' },
      success: { main: '#4caf50', contrast: '#4caf50' },
      info: { main: '#2196f3', contrast: '#2196f3' },
    };

    const selectedColor = colorMap[color];

    switch (variant) {
      case 'outline':
        return {
          bg: selectedColor.main,
          text: selectedColor.contrast,
        }; // Filled background on hover
      case 'ghost':
        return {
          bg: selectedColor.main,
          text: selectedColor.contrast,
        }; // Filled background on hover
      case 'filled':
        return {
          bg: selectedColor.contrast,
          text: selectedColor.main,
        }; // Inverted colors on hover
      default:
        return {
          bg: selectedColor.main,
          text: selectedColor.contrast,
        };
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
      {/* Background wipe overlay - fills on hover for outline and ghost variants */}
      {/* <motion.div
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
      /> */}

      {/* Content container */}
      <div className="relative z-[2] overflow-hidden h-full flex items-center justify-center">
        {/* Original text layer */}
        <motion.div
          variants={{
            rest: {},
            hover: {},
          }}
          className="relative inline-block"
        >
          <div className="relative inline-block">
            {characters.map((char, index) => (
              <motion.div
                key={`original-${index}`}
                variants={{
                  rest: { y: '0%' },
                  hover: {
                    y: '-100%',
                    transition: {
                      duration: 0.3,
                      ease: easings.smooth,
                      delay: index * 0.1, // 100ms delay
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
          variants={{
            rest: {},
            hover: {},
          }}
          style={{
            color: variant === 'filled' ? '#262626' : hoverColors.text,
          }}
          className={clsx('absolute inset-0 flex items-center justify-center')}
          aria-hidden="true"
        >
          <div className="relative inline-block">
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
                      delay: index * 0.1, // 100ms delay
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
