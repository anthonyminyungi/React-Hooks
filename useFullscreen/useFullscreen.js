import { useRef } from 'react';

const useFullscreen = callback => {
  const element = useRef();

  const runCallback = isFull => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };
  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScreen) {
        element.current.msRequestFullScreen();
      }
      runCallback(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (element.current.webkitExitFullscreen) {
      element.current.webkitExitFullscreen();
    } else if (element.current.msExitFullscreen) {
      element.current.msExitFullscreen();
    }
    runCallback(false);
  };
  return { element, triggerFullscreen, exitFull };
};
