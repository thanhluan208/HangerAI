import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";
import { Paper } from "@mui/material";
import { isEmpty } from "lodash";

const ToolCard = ({ item }) => {
  //! State
  const { tag, title, description, imgSrc, isPremium, isNew } = item;

  //! Function

  //! Render
  return (
    <Paper
      sx={{
        padding: "20px 25px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CommonStyles.Box>
        <CommonStyles.Box
          centered
          sx={{
            gap: "15px",
            justifyContent: "start",
            flexWrap: "wrap",
          }}
        >
          <img
            src={imgSrc}
            alt="icon"
            style={{
              height: "35px",
              width: "35px",
              borderRadius: "50%",
            }}
          />

          <CommonStyles.Typography type="boldText">
            {title}
          </CommonStyles.Typography>

          {isPremium && (
            <CommonStyles.Chip
              content="Premium"
              activeBackground="#f7bb6a"
              active
            />
          )}

          {isNew && (
            <CommonStyles.Chip
              content="New"
              activeBackground="#4edffd"
              active
            />
          )}
        </CommonStyles.Box>

        <CommonStyles.Typography
          variant="body1"
          sx={{
            margin: "20px 0",
          }}
        >
          {description}
        </CommonStyles.Typography>
      </CommonStyles.Box>

      <CommonStyles.Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <CommonStyles.Box
          sx={{
            flexWrap: " wrap",
            display: "flex",
            gap: "10px",
            width: "80%",
          }}
        >
          {!isEmpty(tag) &&
            tag.map((item) => {
              const key = Math.random() * 100000 + new Date().valueOf();
              return (
                <CommonStyles.Typography
                  variant="body1"
                  key={key}
                  sx={{ opacity: ".6" }}
                >
                  {item}
                </CommonStyles.Typography>
              );
            })}
        </CommonStyles.Box>
      </CommonStyles.Box>
    </Paper>
  );
};

export default ToolCard;
