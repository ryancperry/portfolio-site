import { ListTextProps } from './ListTypes';

export default function ListItem(props: ListTextProps) {
  const { children = '' } = props;

  return <p className="list__text">{children}</p>;
}
