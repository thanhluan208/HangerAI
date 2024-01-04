import React, { useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";
import { useTheme } from "@emotion/react";
import { Collapse } from "@mui/material";

const Header = () => {
  //! State
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        background: theme.colors.custom.backgroundSecondary,
        marginBottom: "20px",
        padding: "16px 20px",
        borderRadius: "10px",
      }}
    >
      <CommonStyles.Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <CommonStyles.Typography type="boldText">
          Background change
        </CommonStyles.Typography>
        <CommonIcons.Up
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all .15s ease-in",
          }}
        />
      </CommonStyles.Box>
      <Collapse in={open}>
        <CommonStyles.Typography
          type="body12"
          sx={{
            marginTop: "10px",
            opacity: 0.5,
          }}
        >
          Re-imagine product photos and portraits by replacing their backgrounds
          with generated content using text-to-image descriptions.
        </CommonStyles.Typography>
      </Collapse>
    </CommonStyles.Box>
  );
};

export default Header;
