import CommonStyles from "../CommonStyles";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";
import { nav } from "../../constants/navigation";
import SideBarTool from "./Components/SideBarTool";
import { ClickAwayListener, Divider, IconButton } from "@mui/material";
import CommonIcons from "../CommonIcons";
import { Outlet, useNavigate } from "react-router-dom";
import User from "./Components/User";
import { useState } from "react";
import SwitchTheme from "./Components/SwitchTheme";

const headerHeight = "80px";

const DefaultLayout = (props) => {
  //! State
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  //! Function
  console.log("open", open);

  //! Render
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
          if (e.clientX > 335) setOpen(false);
        }}
      >
        <PerfectScrollbar
          style={{
            maxHeight: "100vh",
            width: open ? "335px" : "0vw",
            transition: "width 0.5s ease-in-out",
            borderRight: `1px solid ${theme.palette.divider}`,
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
                boxShadow: "0 5px 5px 0 rgb(0 0 0 / 20%)",
                top: 0,
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
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
              sx={{
                display: "flex",
                padding: "0px 15px 30px 15px",
                alignItems: "end",
                marginTop: "auto",
                flex: 1,
              }}
            >
              <CommonStyles.Box
                sx={{
                  width: "100%",
                  padding: "10px 0",
                  backgroundColor: theme.colors.custom.backgroundSecondary,
                  borderRadius: "8px",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                  opacity: open ? 1 : 0,
                  transition: `all 0.5s `,
                }}
              >
                <CommonStyles.Box centered>
                  <CommonStyles.Typography
                    sx={{
                      color: theme.colors.custom.textPrimary,
                      fontWeight: "bold",
                    }}
                  >
                    Free plan
                  </CommonStyles.Typography>
                  <CommonStyles.Tooltip
                    title={"Free plan account allows you to create 1 project"}
                    placement="top"
                  >
                    <IconButton>
                      <CommonIcons.Info
                        style={{
                          fontSize: "1.2rem",
                          color: theme.colors.custom.textPrimary,
                        }}
                      />
                    </IconButton>
                  </CommonStyles.Tooltip>
                </CommonStyles.Box>
                <Divider />

                <CommonStyles.Box
                  centered
                  sx={{
                    padding: "0 10px",
                    textAlign: "center",
                    margin: "10px 0",
                    flexDirection: "column",
                    gap: "10px",
                    textWrap: "wrap",
                  }}
                >
                  <CommonStyles.Typography
                    sx={{
                      fontSize: ".9rem",
                      opacity: 0.7,
                      color: theme.colors.custom.text,
                    }}
                  >
                    Upgrade to{" "}
                    <CommonStyles.Typography
                      type="boldText14"
                      component="span"
                      sx={{
                        textTransform: "uppercase",
                        color: theme.colors.custom.text,
                        opacity: 1,
                        letterSpacing: "0.175rem",
                        margin: "0 5px",
                      }}
                    >
                      premium
                    </CommonStyles.Typography>{" "}
                    to create unlimited projects
                  </CommonStyles.Typography>

                  <CommonStyles.Button sx={{ width: "100%" }}>
                    Upgrade
                  </CommonStyles.Button>
                </CommonStyles.Box>
              </CommonStyles.Box>
            </CommonStyles.Box>
          </CommonStyles.Box>
        </PerfectScrollbar>
      </CommonStyles.Box>

      <CommonStyles.Box
        sx={{
          width: !open ? "100%" : "calc(100% - 335px)",
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
            height: headerHeight,
            padding: "20px",
            boxShadow: "0 5px 5px 0 rgb(0 0 0 / 20%)",
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
                gap: "10px",
                alignItems: "center",
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
