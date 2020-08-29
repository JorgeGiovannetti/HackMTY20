import React from "react";
import DefaultButton from "./elements";

const Button = ({
  children,
  color,
  uppercase,
  fullWidth,
  disabled,
  ...props
}) => (
  <DefaultButton
    color={color}
    uppercase={uppercase}
    fullWidth={fullWidth}
    disabled={disabled}
    {...props}
  >
    {children}
  </DefaultButton>
);

Button.defaultProps = {
  uppercase: true,
  color: "default",
  fullWidth: false,
  disabled: false,
};

export default Button;
