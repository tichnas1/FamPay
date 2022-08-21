import getBackground from '../../utils/getBackground';
import openLink from '../../utils/openLink';
import CardImage from '../CardImage';

function DynamicWidthCard({ card, height }) {
  const {
    url,
    bg_image: bgImage,
    bg_color: bgColor,
    bg_gradient: bgGradient,
  } = card;

  const onCardClick = () => {
    if (url) openLink(url);
  };

  return (
    <div
      onClick={onCardClick}
      className='dynamic-width-card'
      style={{
        ...getBackground(bgImage, bgColor, bgGradient),
        height: `${height}px`,
      }}
    >
      {/* CardImage is added just to set card size. UI displays bgImage */}
      <CardImage
        imageData={bgImage}
        className='dynamic-width-card__img'
        alt=''
      />
    </div>
  );
}

export default DynamicWidthCard;
