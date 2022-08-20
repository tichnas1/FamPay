import { useRef } from 'react';

import { LONG_PRESS_DURATION } from '../constants';

export const useLongPress = (onLongPress, onClick) => {
  const timer = useRef();

  const onMouseDown = () => {
    timer.current = setTimeout(() => {
      timer.current = null;
      onLongPress();
    }, LONG_PRESS_DURATION);
  };

  const onMouseUp = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      if (onClick) onClick();
    }
  };

  return [onMouseDown, onMouseUp];
};

export const useDismissCard = cardName => {
  const dismiss = () => {
    localStorage.setItem(`Dismissed: ${cardName}`, true);
  };

  const isDismissed = localStorage.getItem(`Dismissed: ${cardName}`);

  return [dismiss, isDismissed];
};
