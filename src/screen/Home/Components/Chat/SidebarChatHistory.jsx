import React, { useState } from "react";
import CommonStyles from "../../../../components/CommonStyles";
import SidebarChatHistoryItem from "./SidebarChatHistoryItem";
import { isArray } from "lodash";

const SidebarChatHistory = ({ title, listAnswer }) => {
  return (
    <CommonStyles.Box
      sx={{
        padding: "20px 0",
      }}
    >
      <CommonStyles.Box
        sx={{
          padding: "0 40px",
          marginBottom: "20px",
        }}
      >
        <CommonStyles.Typography
          sx={{
            color: "#737277",
            fontWeight: "800",
          }}
        >
          {title}
        </CommonStyles.Typography>
      </CommonStyles.Box>
      <CommonStyles.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {isArray(listAnswer) &&
          listAnswer.map((item) => {
            return (
              <SidebarChatHistoryItem content={item} key={item.id} level={0} />
            );
          })}
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default SidebarChatHistory;
