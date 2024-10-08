import React from "react";

const Button = ({
  width = "23.8rem",
  height = "3.5rem",
  color = "#fff",
  fontSize = "1.4rem",
  cursor = "pointer",
  fontWeight = "500",
  borderRadius = "1rem",
  text = "View",
  background = "#161d6f",
  lineHeight = "1.641rem",
  textDecoration = "none",
  letterSpacing = "0",
  border = "0.1rem solid #161d6f",
  event = () => { },
}) => {
  return (
    <button
      type="submit"
      className="btn"
      style={{
        width: width,
        height: height,
        color: color,
        cursor: cursor,
        border: border,
        background: background,
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        textDecoration: textDecoration,
        text: text,
        borderRadius: borderRadius,
      }}
      onClick={event}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
