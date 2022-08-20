import openLink from '../../utils/openLink';
import Button from '../Button';

function CTA({ cta }) {
  const { text, bg_color: bgColor, url, text_color: textColor } = cta;

  const handleClick = e => {
    e.stopPropagation();

    if (url) openLink(url);
  };

  return (
    <Button
      text={text}
      bgColor={bgColor}
      textColor={textColor}
      onClick={handleClick}
      className='mr-s mb-s'
    />
  );
}

export default CTA;
