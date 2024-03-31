import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";
import { Paper } from "@mui/material";
import { isEmpty } from "lodash";
import { useTheme } from "@emotion/react";
import {  useNavigate } from "react-router-dom";

const ToolCard = ({ item }) => {
  //! State
  const theme = useTheme();
  const navigate = useNavigate();
  const { tag, title, description, imgSrc, isPremium, isNew ,href} = item;

  //! Function
  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "20px 25px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        // background: theme.colors.custom.backgroundSecondary,
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
      onClick= {() => navigate(`/${href}`)}
    >
      {/* <CommonStyles.Box
        centered
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "80px",
          height: "68px",
          background: theme.colors.custom.background,
          borderRadius: "10px 0px 10px 0px",
          "&:after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "10px",
            background: theme.colors.custom.background,
            left: 0,
            bottom: "-10px",
          },
          "&:before": {
            content: '""',
            position: "absolute",
            height: "100%",
            width: "10px",
            background: theme.colors.custom.background,
            top: 0,
            right: "-10px",
          },
        }}
      >
        <CommonStyles.Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "10px",
            background: theme.colors.custom.backgroundSecondary,
            borderTopLeftRadius: "10px",
            zIndex: 10,
            left: 0,
            bottom: "-10px",
          }}
        />
        <CommonStyles.Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "10px",
            top: 0,
            right: "-10px",
            background: theme.colors.custom.backgroundSecondary,
            borderTopLeftRadius: "10px",
            zIndex: 10,
          }}
        />
        <CommonStyles.Box
          centered
          sx={{
            width: "55px",
            height: "55px",
            background: theme.colors.custom.backgroundSecondary,
            borderRadius: "12px",
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={imgSrc}
            alt="icon"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
            }}
          />
        </CommonStyles.Box>
      </CommonStyles.Box> */}
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
    </CommonStyles.Box>
  );
};

export default ToolCard;
