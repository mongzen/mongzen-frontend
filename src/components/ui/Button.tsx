import { ButtonProps } from '@/types';
import { cn } from '@/utils';

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
  className,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-105 active:scale-95';

  const variants = {
    primary: 'text-neutral-70 focus:ring-primary-50',
    secondary: 'text-neutral-0 focus:ring-secondary-50',
    accent: 'text-neutral-0 focus:ring-accent-50',
    warning: 'text-neutral-70 focus:ring-warning-50',
    danger: 'text-neutral-0 focus:ring-danger-50',
    success: 'text-neutral-70 focus:ring-success-50',
    info: 'text-neutral-70 focus:ring-info-50',
    outline:
      'border-2 bg-transparent text-neutral-50 hover:text-neutral-0 focus:ring-primary-50',
    ghost:
      'bg-transparent text-neutral-50 hover:text-neutral-70 focus:ring-neutral-30',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  // Use CSS variables for colors that can change with theme
  const getVariantStyles = (variant: string) => {
    const styles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
      },
      secondary: {
        backgroundColor: 'var(--color-secondary)',
        borderColor: 'var(--color-secondary)',
      },
      accent: {
        backgroundColor: 'var(--color-accent)',
        borderColor: 'var(--color-accent)',
      },
      warning: {
        backgroundColor: 'var(--color-warning)',
        borderColor: 'var(--color-warning)',
      },
      danger: {
        backgroundColor: 'var(--color-danger)',
        borderColor: 'var(--color-danger)',
      },
      success: {
        backgroundColor: 'var(--color-success)',
        borderColor: 'var(--color-success)',
      },
      info: {
        backgroundColor: 'var(--color-info)',
        borderColor: 'var(--color-info)',
      },
      outline: {
        borderColor: 'var(--color-primary)',
      },
      ghost: {},
    };
    return styles[variant] || styles.primary;
  };

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      style={getVariantStyles(variant)}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
