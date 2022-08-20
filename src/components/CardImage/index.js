import { CARD_IMAGE_TYPE } from '../../constants';

// alt is considered separately from imgProps to avoid warning of img tag must have alt attribute
function CardImage({ imageData, alt, ...imgProps }) {
  const { image_type, image_url } = imageData || {};

  switch (image_type) {
    case CARD_IMAGE_TYPE.External:
      return <img src={image_url} alt={alt} {...imgProps} />;
    // TODO: Handle asset image type
    default:
      return null;
  }
}

export default CardImage;
