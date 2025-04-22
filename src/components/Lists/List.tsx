import { ListProps } from './ListTypes';

export default function List(props: ListProps) {
  const { children, style = 'standard' } = props;

  return <ul className={`list--${style}`}>{children}</ul>;
}
