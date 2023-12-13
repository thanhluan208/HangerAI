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
        minHeight: "55px",
        background: isActive ? "#f6f7fb" : "transparent",
        width: "calc(100% - 20px)",
        padding: "5px 15px",
        display: "flex",
        justifyContent: "start",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        position: "relative",
        cursor: "pointer",
        gap: "15px",
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
          background: "#f6f7fb",
          opacity: isActive ? 1 : 0,
          transition: "all 0.5s ease",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
            background: "#fff",
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
          background: "#f6f7fb",
          opacity: isActive ? 1 : 0,
          transition: "all 0.5s ease",

          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
            background: "#fff",
            borderTopRightRadius: "30px",
          },
        }}
      />
      <CommonStyles.Box
        sx={
          ({
            display: "flex",
          },
          isActive && {
            svg: {
              color: "#5c3883",
            },
          })
        }
      >
        {icon}
      </CommonStyles.Box>
      <CommonStyles.Typography
        type="boldText14"
        sx={
          isActive && {
            color: "#5c3883",
          }
        }
      >
        {content}
      </CommonStyles.Typography>
    </CommonStyles.Box>
  );
};

export default MenuItem;
