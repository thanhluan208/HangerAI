import CommonStyles from "../CommonStyles";
import CommonIcons from "../CommonIcons";
import User from "./Components/User";
import MenuItem from "./Components/MenuItem";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";
import Brand from "./Components/Brand";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const nav = [
  {
    content: "Virtual Dressing Room",
    path: "/virtual-try-on",
    icon: <CommonIcons.Room style={{ fontSize: "1rem" }} />,
  },
  {
    content: "Virtual Photoshoot Studio",
    path: "/virtual-photoshoot-studio",
    icon: <CommonIcons.Studio style={{ fontSize: "1rem" }} />,
  },
  {
    content: "Product Tagging",
    path: "/product-tagging",
    icon: <CommonIcons.Tag style={{ fontSize: "1rem" }} />,
  },
  {
    content: "Product Recommendation",
    path: "/product-recommendation",
    icon: <CommonIcons.Recommend style={{ fontSize: "1rem" }} />,
  },
];

const DefaultLayout = (props) => {
  //! State
  const theme = useTheme();
  const { handleLogout } = useAuthentication();
  const location = useLocation();
  const navigate = useNavigate();
  const currentContent = useMemo(() => {
    if (location.pathname === "/") return "Welcome, Thanh Luan";

    return (
      nav.find((elm) => {
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
        // backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
        position: "relative",
        display: "flex",
        // "&:before": {
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   width: "100%",
        //   height: "100%",
        //   background: "rgba(255,255,255,0.4)",
        //   backdropFilter: "blur(2px)",
        // },
      }}
    >
      <CommonStyles.Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          height: "calc(100% - 40px)",
          flexDirection: "column",
          width: "280px",
          padding: "20px 0",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <CommonStyles.Box
          centered
          sx={{ flex: 1, cursor: "pointer" }}
          onClick={() => {
            navigate("/ ");
          }}
        >
          <img
            width="180"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 200px, (max-width: 1439px) 14vw, 200px"
            src="https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02.png"
            alt=""
            className="logo-image"
          />
        </CommonStyles.Box>
        <CommonStyles.Box
          sx={{
            flex: 7,
            display: "flex",
            justifyContent: "start",
            position: "relative",
            flexDirection: "column",
            paddingTop: "70px",
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
              gap: "20px",
              maxHeight: "55vh",
            }}
          >
            {nav.map((item, index) => {
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
        <CommonStyles.Box centered sx={{ flex: 1, cursor: "pointer" }}>
          <CommonStyles.Button
            variant="text"
            sx={{
              display: "flex",
              gap: "10px",
              width: "100%",
              textTransform: "none",
            }}
            onClick={() => {
              handleLogout();
            }}
          >
            <CommonIcons.LogoutIcon />
            <CommonStyles.Typography type="boldText">
              Log out
            </CommonStyles.Typography>
          </CommonStyles.Button>
        </CommonStyles.Box>
      </CommonStyles.Box>
      <CommonStyles.Box
        id="containerLayout"
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
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
          sx={{
            position: "absolute",
            top: "20px",
            left: "30px",
          }}
        >
          <CommonStyles.Typography type="boldText24" sx={{ color: "#5c3883" }}>
            {currentContent}
          </CommonStyles.Typography>
        </CommonStyles.Box>
        <PerfectScrollbar
          style={{
            maxHeight: "calc(100vh - 200px)",
          }}
        >
          <Outlet />
        </PerfectScrollbar>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default DefaultLayout;
