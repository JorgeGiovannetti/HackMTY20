import React from "react";
import { ProfilePictureContainer, ProfilePictureImage } from "./elements";

const Avatar = ({
  src,
  size,
  alt,
  borderColor,
  borderWidth,
  className,
  ...props
}) => (
  <ProfilePictureContainer
    borderColor={borderColor}
    borderWidth={borderWidth}
    className={className}
    size={size}
    {...props}
  >
    <ProfilePictureImage src={src} alt={alt} />
  </ProfilePictureContainer>
);

Avatar.defaultProps = {
  size: 32,
  alt: "",
  borderColor: "default",
  borderWidth: "0",
  className: "",
};

export default Avatar;
