import { RefObject, useEffect } from 'react';

const useOutsideAlerter = (callback: () => void, ref: RefObject<HTMLElement>) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideAlerter;
