import getBackground from '../../utils/getBackground';
import openLink from '../../utils/openLink';
import CardImage from '../CardImage';
import FormatText from '../FormatText';
import arrowRightIcon from '../../assets/img/arrow-right-icon.svg';

function SmallCardWithArrow({ card, widthClassName, containerClassName }) {
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
      className={`small-card-with-arrow ${widthClassName} ${containerClassName}`}
      style={{ background: getBackground(bgImage, bgColor, bgGradient) }}
    >
      <CardImage
        imageData={icon}
        className='small-card-with-arrow__img'
        alt=''
      />

      <div className='small-card-with-arrow__text'>
        <FormatText
          tag='h4'
          className='small-card-with-arrow__title'
          formatData={formattedTitle}
          fallback={title}
        />

        <FormatText
          className='small-card-with-arrow__description'
          formatData={formattedDescription}
          fallback={description}
        />
      </div>

      <img src={arrowRightIcon} alt='>' />
    </div>
  );
}

export default SmallCardWithArrow;
