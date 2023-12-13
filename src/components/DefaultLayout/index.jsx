import CommonStyles from "../CommonStyles";
import CommonIcons from "../CommonIcons";
import User from "./Components/User";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";
import Brand from "./Components/Brand";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import SideBar from "./Components/SideBar";
import { userNav } from "../../constants/navigation";

const DefaultLayout = (props) => {
  //! State
  const theme = useTheme();
  const location = useLocation();
  const currentContent = useMemo(() => {
    if (location.pathname === "/") return "Welcome, Thanh Luan";

    return (
      userNav.find((elm) => {
        return location.pathname === elm.path;
      })?.content || "Path not found"
    );
  }, [location]);

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "#fff",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "16% 84%",
        padding: open ? "0" : "0 30px",
      }}
    >
      <SideBar />
      <CommonStyles.Box
        id="containerLayout"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "calc(100vh - 40px)",
          background: "#f6f7fb",
          margin: "20px 20px 20px 0",
          borderRadius: "20px",
          backdropFilter: "blur(2px)",
          paddingTop: "60px",
          [theme.breakpoints.down("md")]: {
            margin: "20px ",
          },
        }}
      >
        <Brand />
        <User />
        <CommonStyles.Box
          centered
          sx={{
            position: "absolute",
            top: "20px",
            left: "30px",
            gap: "20px",
          }}
        >
          {!open && (
            <CommonStyles.Box
              centered
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <CommonIcons.Menu />
            </CommonStyles.Box>
          )}
          <CommonStyles.Typography type="boldText" sx={{ color: "#5c3883" }}>
            {currentContent}
          </CommonStyles.Typography>
        </CommonStyles.Box>
        <PerfectScrollbar
          style={{
            maxHeight: "calc(100vh - 200px)",
          }}
        >
          <CommonStyles.Box sx={{ paddingBottom: "50px" }}>
            <Outlet />
          </CommonStyles.Box>
        </PerfectScrollbar>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default DefaultLayout;
