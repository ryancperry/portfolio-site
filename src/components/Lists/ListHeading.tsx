import { ListHeadingProps } from './ListTypes';

const fontSizeMap = {
  1: 'lg',
  2: 'md',
  3: 'sm',
  default: 'md',
};

export default function ListHeading(props: ListHeadingProps) {
  const { as: Tag = 'h3', children, level = 1 } = props;
  const normalizedLevel = Math.max(1, Math.min(level, 3)); // Ensure level is between 1 and 3
  const fontSize =
    fontSizeMap[normalizedLevel as keyof typeof fontSizeMap] ||
    fontSizeMap.default;
  const className = `list__heading--${fontSize}`;

  return <Tag className={className}>{children}</Tag>;
}
