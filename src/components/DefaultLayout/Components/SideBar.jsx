import { useTheme } from "@emotion/react";
import React, { useMemo } from "react";
import CommonIcons from "../../CommonIcons";
import PerfectScrollbar from "react-perfect-scrollbar";
import MenuItem from "./MenuItem";
import CommonStyles from "../../CommonStyles";
import { adminNav, userNav } from "../../../constants/navigation";
import { Divider, IconButton, Tooltip } from "@mui/material";

const SideBar = () => {
  //! State
  const theme = useTheme();

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        height: "calc(100% )",
        flexDirection: "column",
        opacity: open ? "1" : "0",
        padding: "20px 0",
        transition: "all .2s ease-in-out",

        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      <CommonStyles.Box
        centered
        sx={{
          flex: 1,
          gap: "20px",
          paddingLeft: "20px",
        }}
      >
        <CommonStyles.Box>
          <img
            width="150px"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 200px, (max-width: 1439px) 14vw, 200px"
            src="https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02.png"
            alt=""
            className="logo-image"
            onClick={() => {
              navigate("/ ");
            }}
            style={{ cursor: "pointer" }}
          />
        </CommonStyles.Box>
      </CommonStyles.Box>
      <CommonStyles.Box
        sx={{
          flex: 7,
          display: "flex",
          justifyContent: "start",
          position: "relative",
          flexDirection: "column",
          paddingTop: "20px",
          ".ps__rail-y": {
            zIndex: 10000000,
          },
        }}
      >
        <PerfectScrollbar
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            gap: "25px",
            maxHeight: "60vh",
          }}
        >
          {userNav.map((item, index) => {
            return (
              <MenuItem
                key={index}
                content={item.content}
                path={item.path}
                icon={item.icon}
              />
            );
          })}
        </PerfectScrollbar>
      </CommonStyles.Box>
      <CommonStyles.Box centered sx={{ flex: 1 }}></CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default SideBar;
