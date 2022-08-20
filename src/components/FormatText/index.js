import { Fragment } from 'react';

function FormatText({ formatData, fallback, tag, className }) {
  if (!formatData && !fallback) return null;

  const CustomTag = tag || 'p';

  const { text, entities } = formatData;
  const textPieces = text.split('{}');

  if (textPieces.length - 1 !== entities.length)
    return <CustomTag className={className}>{fallback}</CustomTag>;

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
}

export default FormatText;
