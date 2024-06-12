import React, { useMemo } from "react";
import CommonStyles from "..";
import { useTheme } from "@emotion/react";
import { RxMagicWand } from "react-icons/rx";
import { Outlet, useNavigate } from "react-router-dom";

const ChipTwo = ({ content, active, onClick, activeBackground }) => {
  //! State
  const theme = useTheme();
  const navigate = useNavigate();
  const background = useMemo(() => {
    if (active) {
      if (activeBackground) return activeBackground;
      return "#bc82fd";
    }

    return theme.colors.custom.backgroundSecondary;
  }, [activeBackground, active, theme]);

  return (
    <CommonStyles.Box
      sx={{
        display: "flex",
        gap:"10px",
        padding: "16px 24px",
        borderRadius: "24px",
        backgroundColor: background,
        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all .15s ease-in",
      }}
      onClick={() => navigate("/virtual-model")}
    >
      <RxMagicWand />
      <CommonStyles.Typography
        type="boldText14"
        sx={active && { color: "#fff" }}
      >
        {content}
      </CommonStyles.Typography>
    </CommonStyles.Box>
  );
};

export default ChipTwo;
