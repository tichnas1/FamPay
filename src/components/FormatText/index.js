import { Fragment } from 'react';

function FormatText({ formatData, fallback, tag, className }) {
  const CustomTag = tag || 'p';

  try {
    const { text, entities } = formatData;
    const textPieces = text.split('{}');

    if (textPieces.length - 1 !== entities.length) throw Error();

    return (
      <CustomTag className={className}>
        {textPieces[0]}
        {entities.map(({ text, color, url }, i) => (
          <Fragment key={i}>
            <a href={url} style={{ color }}>
              {text}
            </a>
            {textPieces[i + 1]}
          </Fragment>
        ))}
      </CustomTag>
    );
  } catch {
    if (fallback)
      return <CustomTag className={className}>{fallback}</CustomTag>;

    return null;
  }
}

export default FormatText;
