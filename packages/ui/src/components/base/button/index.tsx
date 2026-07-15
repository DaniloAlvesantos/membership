import { ComponentPropsWithRef } from 'react';
import { Button } from '../../ui/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '#lib/utils';

export interface ButtonPrimaryProps
  extends ComponentPropsWithRef<'button'>, VariantProps<typeof variants> {
  title?: string;
}

const variants = cva('transition-colors duration-200', {
  variants: {
    variant: {
      default: 'bg-app-green-500 hover:bg-app-green-600',
      outline:
        'border-border bg-none hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const ButtonPrimary = ({
  children,
  title,
  variant = 'default',
  className,
  ...props
}: ButtonPrimaryProps) => {
  return (
    <Button className={cn(variants({ variant }), className)} {...props}>
      {children ?? title}
    </Button>
  );
};

ButtonPrimary.displayName = 'ButtonPrimary';
