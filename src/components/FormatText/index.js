function FormatText({ formatData, fallback, tag, className }) {
  if (!formatData && !fallback) return null;

  const CustomTag = tag || 'p';

  // TODO: Implement formatted string
  return <CustomTag className={className}>{fallback}</CustomTag>;
}

export default FormatText;
