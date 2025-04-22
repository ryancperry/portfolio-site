import { ListItemProps } from './ListTypes';

export default function ListItem(props: ListItemProps) {
  const { children, style = '' } = props;
  const classModifier = style ? ` ${style}` : '';
  const className = `list__item${classModifier}`;

  return <li className={className}>{children}</li>;
}
