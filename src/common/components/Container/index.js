import React from "react";
import { ContentContainer, TitleContainer } from "./elements";

const Container = ({
  children,
  title,
  background,
  margin,
  padding,
  width,
  height,
  display,
  direction,
  justify,
  align,
}) => {
  return (
    <ContentContainer
      background={background}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      display={display}
      direction={direction}
      justify={justify}
      align={align}
    >
      {title && <TitleContainer>{title}</TitleContainer>}
      {children}
    </ContentContainer>
  );
};

export default Container;
