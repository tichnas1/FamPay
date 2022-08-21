import { useState } from 'react';

import getBackground from '../../utils/getBackground';
import { useDismissCard, useLongPress } from '../../utils/hooks';
import openLink from '../../utils/openLink';
import CardImage from '../CardImage';
import CTA from '../CTA';
import FormatText from '../FormatText';
import SideActions from './SideActions';

function BigDisplayCard({ card, widthClassName, containerClassName }) {
  const {
    name,
    formatted_title: formattedTitle,
    title,
    formatted_description: formattedDescription,
    description,
    icon,
    url,
    bg_image: bgImage,
    bg_color: bgColor,
    bg_gradient: bgGradient,
    cta: ctaList = [],
  } = card;

  const [dismiss, isDismissed] = useDismissCard(name);
  const [sideActions, setSideActions] = useState(false);
  const [hidden, setHidden] = useState(isDismissed);

  const onCardClick = () => {
    if (url) openLink(url);
  };

  const onCardLongPress = () => {
    setSideActions(!sideActions);
  };

  const [onMouseDown, onMouseUp] = useLongPress(onCardLongPress, onCardClick);

  const onRemind = () => {
    setHidden(true);
  };

  const onDismiss = () => {
    setHidden(true);
    dismiss();
  };

  if (hidden) return null;

  return (
    <div className={`big-display-card-container ${containerClassName}`}>
      {sideActions && <SideActions onRemind={onRemind} onDismiss={onDismiss} />}

      <div
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className={`big-display-card ${widthClassName}`}
        style={{ background: getBackground(bgImage, bgColor, bgGradient) }}
      >
        <CardImage imageData={icon} className='big-display-card__img' alt='' />

        <FormatText
          tag='h4'
          className='big-display-card__title'
          formatData={formattedTitle}
          fallback={title}
        />

        <FormatText
          className='big-display-card__description'
          formatData={formattedDescription}
          fallback={description}
        />

        {ctaList.map((cta, i) => (
          <CTA key={i} cta={cta} />
        ))}
      </div>
    </div>
  );
}

export default BigDisplayCard;
