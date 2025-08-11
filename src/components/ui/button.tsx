import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md';
}

export const Button: React.FC<ButtonProps> = ({
  asChild,
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}) => {
  const classes = cn(
    'inline-flex items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variant === 'outline'
      ? 'bg-transparent border-foreground text-foreground hover:bg-secondary'
      : 'bg-foreground text-white',
    size === 'sm' ? 'h-8 px-3' : 'h-10 px-4',
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn((children as any).props.className, classes),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
