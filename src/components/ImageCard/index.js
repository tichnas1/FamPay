import getBackground from '../../utils/getBackground';
import openLink from '../../utils/openLink';
import CardImage from '../CardImage';

function ImageCard({ card, widthClassName, containerClassName }) {
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
      className={`image-card ${widthClassName} ${containerClassName}`}
      style={{ ...getBackground(bgImage, bgColor, bgGradient) }}
    >
      {/* CardImage is added just to set card size. UI displays bgImage */}
      <CardImage imageData={bgImage} className='image-card__img' alt='' />
    </div>
  );
}

export default ImageCard;
