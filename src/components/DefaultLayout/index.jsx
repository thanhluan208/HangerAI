import React, { useState, useEffect, useRef } from "react";
import CommonStyles from "../CommonStyles";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";
import { nav } from "../../constants/navigation";
import SideBarTool from "./Components/SideBarTool";
import { IconButton, TextField } from "@mui/material";
import CommonIcons from "../CommonIcons";
import { Outlet, useNavigate } from "react-router-dom";
import User from "./Components/User";
import SwitchTheme from "./Components/SwitchTheme";
import BottomItem from "./Components/BottomItem";
import TextUpgrade from "./Components/TextUpgrade";
import PopUpgrade from "./Components/PopUpgrade";

const headerHeight = "80px";

const DefaultLayout = (props) => {
  //! State
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [popUp, setPopUp] = useState(false);

  //! Effect
  useEffect(() => {
    const handleClickOutside = (event) => {

      const popup = document.querySelector(".popup-money");
      console.log("kt pop", popup.contains(event.target));
      if (popup && !popup.contains(event.target)) {
        setPopUp(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //! Render
  console.log('lala', popUp);
  return (
    <CommonStyles.Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.colors.custom.background,
        transition: "all 0.5s ease-in-out",
        position: "relative",
      }}
    >
      <CommonStyles.Box
        className="click-away"
        sx={{
          [theme.breakpoints.down("xlg")]: {
            position: "absolute",
            width: open ? "100%" : "0vw",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(5px)",
            zIndex: 1000,
          },
        }}
        onClick={(e) => {
          if (e.target.classList.contains("click-away")) setOpen(false);
        }}
      >
        <PerfectScrollbar
          style={{
            maxHeight: "100vh",
            width: open ? "260px" : "0vw",
            transition: "width 0.5s ease-in-out",
            borderRight: `2px solid ${theme.palette.divider}`,
          }}
        >
          <CommonStyles.Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              [theme.breakpoints.down("xlg")]: {
                zIndex: 10000,
                background: theme.colors.custom.backgroundSecondary,
                position: "relative",
              },
            }}
          >
            <CommonStyles.Box
              centered
              sx={{
                minHeight: headerHeight,
                maxHeight: headerHeight,
                position: "sticky",
                backdropFilter: "blur(100px)",
                zIndex: 10000,
                padding: "20px",
                top: 0,
                cursor: "pointer",
              }}
              onClick={() => navigate("/home")}
            >
              <CommonStyles.Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Hanger.AI
              </CommonStyles.Typography>
            </CommonStyles.Box>
            <CommonStyles.Box>
              {nav.map((item) => {
                return (
                  <SideBarTool
                    title={item.title}
                    listContent={item.listContent}
                    key={item.id}
                  />
                );
              })}
            </CommonStyles.Box>
            <CommonStyles.Box
              className="popup-money"
              sx={{
                display: "flex",
                padding: "0px 15px 30px 15px",
                alignItems: "end",
                marginTop: "auto",
                flex: 1,
              }}
            >
              <BottomItem setPopUp={setPopUp} />
              {popUp && (
                <PopUpgrade setPopUp={setPopUp}/>
              )}
            </CommonStyles.Box>
          </CommonStyles.Box>
        </PerfectScrollbar>
      </CommonStyles.Box>

      <CommonStyles.Box
        sx={{
          width: !open ? "100%" : "calc(100% - 260px)",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.5s ease-in-out",
          [theme.breakpoints.down("xlg")]: {
            width: "100%",
          },
        }}
      >
        <CommonStyles.Box
          sx={{
            padding: "0px 20px",
            width: "95%",
            margin: "10px auto 10px auto",
            background: theme.colors.custom.backgroundSecondary,
            borderRadius: "8px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <CommonStyles.Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <CommonStyles.Box
              sx={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                width: "100%",
                svg: {
                  color: theme.colors.custom.text,
                  fontSize: "1.25rem",
                },
                button: {
                  padding: "0",
                },
              }}
            >
              <IconButton onClick={() => setOpen((prev) => !prev)}>
                <CommonIcons.LeftArrow
                  style={{
                    transform: open ? "rotate(0)" : "rotate(180deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </IconButton>
              <TextField
                sx={{
                  maxWidth: "600px",
                  width: "100%",
                  input: {
                    padding: "0 12px !important",
                    height: "40px",
                    width: "100%",
                    background: theme.colors.custom.background,
                    borderRadius: "10px !important",
                  },
                  fieldset: {
                    border: "none !important",
                  },
                }}
                placeholder="Search for a project, tools, projects, etc..."
              />
            </CommonStyles.Box>

            <CommonStyles.Box centered>
              <SwitchTheme />
              <User />
            </CommonStyles.Box>
          </CommonStyles.Box>
        </CommonStyles.Box>
        <PerfectScrollbar style={{ maxHeight: "calc(100vh - 120px)" }}>
          <Outlet />
        </PerfectScrollbar>
      </CommonStyles.Box>


    </CommonStyles.Box>
  );
};

export default DefaultLayout;
