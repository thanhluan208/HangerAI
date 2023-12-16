import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useTheme } from "@emotion/react";
import CommonIcons from "../../../components/CommonIcons";
import ToolCard from "./ToolCard";
import { Divider } from "@mui/material";

const VirtualSection = ({ sectionName, subtitle, tools }) => {
  //! State
  const theme = useTheme();
  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "20px",
      }}
    >
      <CommonStyles.Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CommonStyles.Box>
          <CommonStyles.Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            {sectionName}
          </CommonStyles.Typography>
          <CommonStyles.Typography variant="subtitle1">
            {subtitle}
          </CommonStyles.Typography>
        </CommonStyles.Box>

        <CommonStyles.Box
          sx={{
            margin: "20px 0",
          }}
        >
          <Divider />
        </CommonStyles.Box>

        <CommonStyles.Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "20px",
            [theme.breakpoints.down("md")]: {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {tools.map((item) => {
            return <ToolCard key={item.id} item={item} />;
          })}
        </CommonStyles.Box>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default VirtualSection;
