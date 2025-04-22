export interface SubheadingProps {
  as?: React.ElementType;
  level?: number; // 1 (default) through 3
  children: React.ReactNode;
}

export default function Subheading(props: SubheadingProps) {
  const { as: Tag = 'h2', children, level = 1 } = props;

  return <Tag className={`subheading--${level}`}>{children}</Tag>;
}
