import React from "react";
import CommonStyles from "../../../../components/CommonStyles";
import { historyAnswer } from "../../../../constants/historyAnswer";
import SidebarChatHistory from "./SidebarChatHistory";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";
const headerHeight = "80px";

const SidebarChat = ({ chatHistory }) => {
  const theme = useTheme();
  return (
    <CommonStyles.Box
      sx={{
        width: "20%",
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
      {/* <CommonStyles.Typography
        sx={{
          fontSize: "12px",
          fontWeight: "600",
          opacity: ".5",
          padding: "10px",
        }}
      >
        Previous 7 Days
      </CommonStyles.Typography>
      <CommonStyles.Box
        sx={{
          padding: "10px",
        }}
      >
        {chatHistory.map((chat, index) => (
          <CommonStyles.Button
            sx={{
              width: "100%",
              margin: "5px 0",
              textAlign: "left",
              justifyContent: "start",
              background: "transparent",
            }}
          >
            {chat.title}
          </CommonStyles.Button>
        ))}
      </CommonStyles.Box> */}
    </CommonStyles.Box>
  );
};

export default SidebarChat;
