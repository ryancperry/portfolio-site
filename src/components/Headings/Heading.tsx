export interface HeadingProps {
  as?: React.ElementType;
  level?: number; // 1 (default) through 6
  children: React.ReactNode;
}

const fontSizeMap = {
  1: 'xxl',
  2: 'xl',
  3: 'lg',
  4: 'md',
  5: 'sm',
  6: 'xs',
  default: 'md',
};

export default function Heading(props: HeadingProps) {
  const { as: Tag = 'h1', children, level = 1 } = props;
  const normalizedLevel = Math.max(1, Math.min(level, 6)); // Ensure level is between 1 and 6
  const fontSize =
    fontSizeMap[normalizedLevel as keyof typeof fontSizeMap] ||
    fontSizeMap.default;
  const className = `heading--${fontSize}`;

  return <Tag className={className}>{children}</Tag>;
}
