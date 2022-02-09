import { useCallback, useState } from 'react';

export const useCounter = (initialCount: number = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => setCount(count => count + 1), []);
  const decrement = useCallback(() => setCount(count => count - 1), []);

  return { count, increment, decrement };
};
