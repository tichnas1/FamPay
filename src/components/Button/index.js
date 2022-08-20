function Button({ text, onClick, bgColor, textColor, className }) {
  return (
    <button
      className={`btn ${className || ''}`}
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </button>
  );
}

export default Button;
