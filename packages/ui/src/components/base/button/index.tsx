import { ComponentPropsWithRef } from 'react';
import { Button } from '../../ui/button';
import { cn } from '#lib/utils';

export interface ButtonPrimaryProps extends ComponentPropsWithRef<
  typeof Button
> {
  title?: string;
}

export const ButtonPrimary = ({
  children,
  title,
  variant = 'default',
  className,
  ...props
}: ButtonPrimaryProps) => {
  return (
    <Button
      variant={variant}
      {...props}
      className={cn(
        'p-4.5 cursor-pointer',
        variant === 'default' && 'bg-app-green-500 hover:bg-app-green-600',
        variant === 'outline' &&
          'border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
        className,
      )}
    >
      {children ?? title}
    </Button>
  );
};

ButtonPrimary.displayName = 'ButtonPrimary';
