import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  AvatarFallback,
  AvatarGroupCount,
} from '../../ui/avatar';

export type AvatarProps = {
  url: string;
  fallback?: string;
  name?: string;
};

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  count?: boolean;
  size?: 'default' | 'sm' | 'lg';
}

export const AvatarGroupPrimary = ({
  avatars,
  max,
  count,
  size = 'default',
}: AvatarGroupProps) => {
  const hasRemainingAvatars = count && max && avatars.length > max;
  const remainingCount = hasRemainingAvatars ? avatars.length - max : 0;

  const visibleAvatars = max ? avatars.slice(0, max) : avatars;

  return (
    <AvatarGroup>
      {visibleAvatars.map((avatar, i) => {
        return (
          <Avatar key={avatar.url || i} size={size}>
            <AvatarImage
              src={avatar.url}
              alt={avatar.name ? `@${avatar.name}` : 'Random User'}
            />
            {avatar.fallback && (
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
            )}
          </Avatar>
        );
      })}

      {hasRemainingAvatars && (
        <AvatarGroupCount>{`+${remainingCount}`}</AvatarGroupCount>
      )}
    </AvatarGroup>
  );
};
