import { useState } from 'react';

export function useToggleList<T>(items: T[], initialCount: number) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? items : items.slice(0, initialCount);
  const toggle = () => setExpanded((prev) => !prev);

  return {
    visibleItems,
    expanded,
    toggle,
  };
}
