import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";
import { Paper } from "@mui/material";
import { isEmpty } from "lodash";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { Height } from "@mui/icons-material";

const ToolCard = ({ item }) => {
  //! State
  const theme = useTheme();
  const navigate = useNavigate();
  const { tag, title, description, imgSrc, isPremium, isNew, href } = item;

  //! Function
  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "20px 20px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",

        justifyContent: "space-between",
        position: "relative",
        background: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        transition: "all .3s ease",
        "&:hover": {
          boxShadow: "5px 3px 5px rgba(0, 0, 0, 0.25)",
        },
      }}
      onClick={() => navigate(`/${href}`)}
    >
      <CommonStyles.Box>
        <CommonStyles.Box
          centered
          sx={{
            // gap: "15px",
            justifyContent: "space-between",
            flexWrap: "wrap",
            // paddingLeft: "80px",
          }}
        >
          <CommonStyles.Typography type="boldText">
            {title}
          </CommonStyles.Typography>


          <CommonStyles.Box
            centered
            sx={{
              gap: "15px",
              justifyContent: "space-around",
              flexWrap: "wrap",
              // paddingLeft: "80px",
            }}>
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
        </CommonStyles.Box>

        <CommonStyles.Box
          sx={{
            marginTop: "35px",
          }}
        >
          <CommonStyles.Typography
            variant="body1"
            sx={{
              margin: "20px 0",
              zIndex: 110,
              position: "relative",
            }}
          >
            {description}
          </CommonStyles.Typography>
        </CommonStyles.Box>
      </CommonStyles.Box>

      <CommonStyles.Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
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
    </CommonStyles.Box>
  );
};

export default ToolCard;
