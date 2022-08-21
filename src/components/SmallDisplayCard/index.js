import getBackground from '../../utils/getBackground';
import openLink from '../../utils/openLink';
import CardImage from '../CardImage';
import FormatText from '../FormatText';

function SmallDisplayCard({ card, widthClassName, containerClassName }) {
  const {
    formatted_title: formattedTitle,
    title,
    formatted_description: formattedDescription,
    description,
    icon,
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
      className={`small-display-card ${widthClassName} ${containerClassName}`}
      style={{ ...getBackground(bgImage, bgColor, bgGradient) }}
    >
      <CardImage imageData={icon} className='small-display-card__img' alt='' />

      <div className='small-display-card__text'>
        <FormatText
          tag='h4'
          className='small-display-card__title'
          formatData={formattedTitle}
          fallback={title}
        />

        <FormatText
          className='small-display-card__description'
          formatData={formattedDescription}
          fallback={description}
        />
      </div>
    </div>
  );
}

export default SmallDisplayCard;
