export interface ListHeadingProps {
  as?: React.ElementType;
  level?: number; // 1 (default) through 3
  children: React.ReactNode;
}

export interface ListItemProps {
  children: React.ReactNode;
  style?: string; // standard (default), card, more to come
}

export interface ListProps {
  children: React.ReactNode;
  style?: string; // standard (default), inline, or nested
}

export interface ListItemProps {
  children: React.ReactNode;
}

export interface ListTextProps {
  children: React.ReactNode;
}
