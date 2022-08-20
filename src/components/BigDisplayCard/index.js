import openLink from '../../utils/openLink';
import CardImage from '../CardImage';
import CTA from '../CTA';
import FormatText from '../FormatText';

function BigDisplayCard({ card }) {
  const {
    formatted_title: formattedTitle,
    title,
    formatted_description: formattedDescription,
    description,
    icon,
    url,
    // TODO: Use bg details from here, instead of hardcoding
    // bg_image: bgImage,
    // bg_color: bgColor,
    // bg_gradient: bgGradient,
    cta: ctaList,
  } = card;

  return (
    <div onClick={() => url && openLink(url)} className='big-display-card'>
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
  );
}

export default BigDisplayCard;
