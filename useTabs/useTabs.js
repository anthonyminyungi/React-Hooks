import { useState } from 'react';

export const useTabs = (initialTabs, allTalbs) => {
  if (!allTalbs || !Array.isArray(allTalbs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTabs);
  return {
    currentItem: allTalbs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
