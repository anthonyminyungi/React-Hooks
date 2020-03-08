import {  useEffect } from 'react';

export const useBeforeLeave = onBefore => {
  if (typeof onBefore !== 'function') {
    return;
  }

  useEffect(() => {
    const handle = event => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };

    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mousleave', handle);
  }, [onBefore]);
};
