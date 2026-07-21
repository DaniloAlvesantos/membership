import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

export interface AvatarPrimaryProps {
  url: string;
  fallback?: string;
  name?: string;
  size?: 'default' | 'sm' | 'lg';
}

export const AvatarPrimary = ({
  url,
  fallback,
  name,
  size,
}: AvatarPrimaryProps) => {
  return (
    <Avatar size={size}>
      <AvatarImage src={url} alt={name ? `@${name}` : 'Random User'} />
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
    </Avatar>
  );
};
