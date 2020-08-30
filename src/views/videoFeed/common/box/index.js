import React from "react";

import StyledBox from "./elements";

const Box = ({ clickable, ...props }) => (
  <StyledBox clickable={clickable} {...props} />
);

Box.defaultProps = {
  clickable: false,
};

export default Box;
