import CommonStyles from "../CommonStyles"
import CommonIcons from "../CommonIcons"
import User from "./Components/User"
import MenuItem from "./Components/MenuItem"
import PerfectScrollbar from "react-perfect-scrollbar"
import { useTheme } from "@emotion/react"
import Brand from "./Components/Brand"
import { useAuthentication } from "../../providers/AuthenticationProvider"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useMemo, useState } from "react"

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
]

const DefaultLayout = (props) => {
  //! State
  const theme = useTheme()
  const [open, setOpen] = useState(true)
  const { handleLogout } = useAuthentication()
  const location = useLocation()
  const navigate = useNavigate()
  const currentContent = useMemo(() => {
    if (location.pathname === "/") return "Welcome, Thanh Luan"

    return (
      nav.find((elm) => {
        return location.pathname === elm.path
      })?.content || "Path not found"
    )
  }, [location])

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "#fff",
        position: "relative",
        display: "flex",
        padding: open ? "0" : "0 30px",
      }}
    >
      <CommonStyles.Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          height: "calc(100% - 40px)",
          flexDirection: "column",
          width: open ? "280px" : "0",
          opacity: open ? "1" : "0",
          padding: "20px 0",
          transition: "all .2s ease-in-out",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <CommonStyles.Box centered sx={{ flex: 1, gap: "20px" }}>
          <img
            width="180"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 200px, (max-width: 1439px) 14vw, 200px"
            src="https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02.png"
            alt=""
            className="logo-image"
            onClick={() => {
              navigate("/ ")
            }}
            style={{ cursor: "pointer" }}
          />

          <CommonStyles.Box
            sx={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
          >
            <CommonIcons.Close />
          </CommonStyles.Box>
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
              gap: "25px",
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
              )
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
              handleLogout()
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
                setOpen(true)
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
  )
}

export default DefaultLayout
