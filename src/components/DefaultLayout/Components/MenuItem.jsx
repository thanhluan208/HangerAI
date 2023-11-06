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
  return (
    <CommonStyles.Box
      centered
      sx={{
        background: isActive ? "rgba(255,255,255,0.6)" : "transparent",
        width: "90%",
        padding: "15px 15px 15px 30px",
        display: "flex",
        justifyContent: "start",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        position: "relative",
        cursor: "pointer",
        gap:'15px',
        transition: "all 0.5s ease",
      }}
      onClick={handleClick}
    >
      <CommonStyles.Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "35px",
          left: "0",
          top: "-35px",
          background: "rgba(255,255,255,0.6)",
          opacity: isActive ? 1 : 0,
          transition: "all 0.5s ease",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
            background: "#b2f1fc",
            borderBottomRightRadius: "30px",
          },
        }}
      />
      <CommonStyles.Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "35px",
          left: "0",
          bottom: "-35px",
          background: "rgba(255,255,255,0.6)",
          opacity: isActive ? 1 : 0,
          transition: "all 0.5s ease",

          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
            background: "#b2f1fc",
            borderTopRightRadius: "30px",
          },
        }}
      />
      {icon}
      <CommonStyles.Typography type="boldText">
        {content}
      </CommonStyles.Typography>
    </CommonStyles.Box>
  );
};

export default MenuItem;
