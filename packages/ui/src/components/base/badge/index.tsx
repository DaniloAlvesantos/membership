import { ComponentPropsWithRef } from 'react';
import { Badge } from '../../ui/badge';
import { cn } from '../../../lib/utils';

export interface BadgePrimaryProps extends ComponentPropsWithRef<'div'> {
  title: string;
}

export const BadgePrimary = ({
  title,
  className,
  ...restProps
}: BadgePrimaryProps) => {
  return (
    <Badge
      {...restProps}
      className={cn(
        'bg-app-green-300 text-app-green-500 py-3 px-4 text-sm',
        className,
      )}
    >
      {title}
    </Badge>
  );
};
