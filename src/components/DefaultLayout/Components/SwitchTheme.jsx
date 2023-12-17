import React from "react";
import CommonStyles from "../../CommonStyles";
import { Switch } from "@mui/material";
import CommonIcons from "../../CommonIcons";
import { useTheme } from "@emotion/react";
import { useGet } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";

const SwitchTheme = () => {
  //! State
  const theme = useTheme();
  const toggleTheme = useGet(cachedKeys.toggleTheme);
  const mode = theme.palette.mode;

  //! Function
  console.log("mode", mode);

  //! Render
  return (
    <CommonStyles.Box
      centered
      sx={{
        gap: "5px",
        span: {
          span: {
            color: theme.colors.custom.switchTheme,
            backgroundColor: `${theme.colors.custom.switchTheme} !important`,
          },
        },
        ".MuiTouchRipple-root, .MuiSwitch-switchBase ": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <CommonIcons.Sun
        style={{
          fontSize: "1.5rem",
          color: "#f3d28a",
          opacity: mode === "light" ? 1 : 0.6,
        }}
      />
      <Switch
        onChange={toggleTheme}
        checked={mode === "dark"}
        sx={{ color: "#f3d28a" }}
      />
      <CommonIcons.Moon
        style={{
          fontSize: "1.5rem",
          color: "#b9cff3",
          opacity: mode === "dark" ? 1 : 0.9,
        }}
      />
    </CommonStyles.Box>
  );
};

export default SwitchTheme;
