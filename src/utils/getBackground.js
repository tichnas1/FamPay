import { CARD_IMAGE_TYPE } from '../constants';

export default function getBackground(bgImage, bgColor, bgGradient) {
  const result = { backgroundSize: 'cover' };

  const { image_type, image_url } = bgImage || {};

  switch (image_type) {
    case CARD_IMAGE_TYPE.External:
      result.backgroundImage = `url(${image_url})`;
      break;
    // TODO: Handle asset image type
  }

  if (bgColor) result.backgroundColor = bgColor;

  return result;
}
