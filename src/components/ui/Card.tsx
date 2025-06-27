import { CardProps } from '@/types';
import { cn } from '@/utils';

export function Card({
  children,
  className,
  variant = 'default',
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) {
  const variants = {
    default: 'bg-white shadow-sm border border-gray-200',
    outlined: 'bg-white border-2 border-gray-200',
    elevated: 'bg-white shadow-lg border border-gray-100',
  };

  return (
    <div
      className={cn('rounded-lg p-6', variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-lg font-semibold text-gray-900', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-gray-600', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-4 pt-4 border-t border-gray-200', className)}
      {...props}
    >
      {children}
    </div>
  );
}
