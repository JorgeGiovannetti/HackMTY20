import React from "react";
import {
  DefaultCard,
  CardHeaderContainer,
  Body,
  Footer,
  HeaderTitle,
  HeaderSubtitle,
} from "./elements";

const Card = ({ children, scaleOnHover, scale, ...props }) => (
  <DefaultCard scaleOnHover={scaleOnHover} scale={scale} {...props}>
    {children}
  </DefaultCard>
);

const CardHeader = ({ title, subtitle, ...props }) => (
  <CardHeaderContainer {...props}>
    {title && <HeaderTitle>{title}</HeaderTitle>}
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
  </CardHeaderContainer>
);

const CardBody = ({ children, ...props }) => <Body {...props}>{children}</Body>;

const CardFooter = ({ children, ...props }) => (
  <Footer {...props}>{children}</Footer>
);

Card.defaultProps = {
  scaleOnHover: false,
  scale: 1.021,
};

export { Card, CardFooter, CardBody, CardHeader };
