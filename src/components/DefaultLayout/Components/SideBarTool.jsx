import React, { useState } from "react";
import CommonStyles from "../../CommonStyles";
import CommonIcons from "../../CommonIcons";
import { Collapse } from "@mui/material";
import SideBarToolItem from "./SideBarToolItem";
import { isArray } from "lodash";

const SideBarTool = ({ title, listContent }) => {
  return (
    <CommonStyles.Box
      sx={{
        padding: "20px 0",
      }}
    >
      <CommonStyles.Box
        sx={{
          padding: "0 30px",
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
        {isArray(listContent) &&
          listContent.map((item) => {
            return <SideBarToolItem content={item} key={item.id} level={0} />;
          })}
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default SideBarTool;
