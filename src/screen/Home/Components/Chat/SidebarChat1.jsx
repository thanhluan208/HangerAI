import CommonStyles from "../../../../components/CommonStyles";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { historyAnswer } from "../../../../constants/historyAnswer";
import SidebarChatHistory from "./SidebarChatHistory";

const headerHeight = "80px";

const SidebarChat1 = ({ chatHistory }) => {
  //! State
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        display: "flex",
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
            width: open ? "335px" : "0vw",
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
              onClick={() => navigate("/")}
            >
              <CommonStyles.Button
                sx={{
                  width: "100%",
                  margin: "5px 0",
                  textAlign: "left",
                  justifyContent: "center",
                  borderRadius: "35px",
                  padding: "10px",
                }}
              >
                New Chat
              </CommonStyles.Button>
            </CommonStyles.Box>
            <CommonStyles.Box>
              {historyAnswer.map((historyAnswer) => {
                return (
                  <SidebarChatHistory
                    title={historyAnswer.title}
                    listAnswer={historyAnswer.listAnswer}
                    key={historyAnswer.id}
                  />
                );
              })}
            </CommonStyles.Box>
          </CommonStyles.Box>
        </PerfectScrollbar>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default SidebarChat1;
