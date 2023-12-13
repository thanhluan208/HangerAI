import React from "react";
import { Tooltip as MUITooltip } from "@mui/material";

const Tooltip = ({ children, ...otherProps }) => {
  return <MUITooltip {...otherProps}>{children}</MUITooltip>;
};

export default Tooltip;
