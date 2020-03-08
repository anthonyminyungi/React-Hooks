import { useEffect, useRef } from 'react';

export const useClick = onClick => {
  if (typeof onClick !== 'function') {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      //it will called when component didmount
      element.current.addEventListener('mouseenter', onClick);
    }
    return () => {
      //it will called when component will unmount
      if (element.current) {
        element.current.removeEventListener('mouseenter', onClick);
      }
    };
  }, []); // it must have empty dependency, if it doesn't have dependency at all, it adds eventlistener every time
  return element;
};
