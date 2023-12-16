import React from "react";
import CommonStyles from "../../CommonStyles";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ path, content, icon }) => {
  //! State
  const navigate = useNavigate();
  const isActive = window.location.pathname === path;

  //! Function
  const handleClick = () => {
    navigate(path);
  };
  //! Render
  return <CommonStyles.Box></CommonStyles.Box>;
};

export default MenuItem;
