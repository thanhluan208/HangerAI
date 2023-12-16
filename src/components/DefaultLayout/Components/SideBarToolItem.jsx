import React, { Fragment, useState } from "react";
import CommonStyles from "../../CommonStyles";
import { isArray } from "lodash";
import CommonIcons from "../../CommonIcons";
import { Collapse, Tooltip, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const windowWidth = window.innerWidth;

const SideBarToolItem = ({ content, level }) => {
  //! State
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const { title, children } = content || {};

  const isActive = window.location.pathname.includes(content.path);

  //! Function
  const handleClick = () => {
    if (isArray(children)) {
      setOpen(!open);
    } else {
      navigate(content.path);
    }
  };

  //! Render
  return (
    <CommonStyles.Box>
      <CommonStyles.Box
        sx={{
          paddingLeft: ` ${20 + level * 15}px`,
          paddingRight: "20px",
          cursor: "pointer",
          position: "relative",
          "&:hover": {
            svg: {
              opacity: 1,
            },
            ".text": {
              opacity: "1 !important",
            },
          },
        }}
        onClick={handleClick}
      >
        <CommonStyles.Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px 0 8px 20px",
            backgroundColor:
              isActive && !children
                ? theme.colors.custom.backgroundSecondary
                : "transparent",
            borderRadius: "6px",
            transition: "background-color .6s",
          }}
        >
          {children && (
            <CommonStyles.Box
              centered
              sx={{
                position: "absolute",
                left: `${10 + level * 10}px`,
                top: "50%",
                transform: `translateY(-50%) rotate(${open ? 0 : 180}deg)`,
                transition: "transform 0.3s",
              }}
            >
              <CommonIcons.Up style={{ fontSize: "1.2rem" }} />
            </CommonStyles.Box>
          )}
          <CommonStyles.Box>
            <CommonStyles.Tooltip
              title={windowWidth < 1600 ? title : null}
              placement="top"
            >
              <div>
                <CommonStyles.Typography
                  className="text"
                  sx={{
                    fontWeight: isActive && !children ? 560 : 400,
                    transition: "opacity 0.3s",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    [theme.breakpoints.down("xl")]: {
                      maxWidth: `calc(170px / 1496 * ${windowWidth})`,
                    },
                  }}
                >
                  {title}
                </CommonStyles.Typography>
              </div>
            </CommonStyles.Tooltip>
          </CommonStyles.Box>
        </CommonStyles.Box>
      </CommonStyles.Box>
      {isArray(children) && (
        <Collapse in={open}>
          <CommonStyles.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              marginTop: "5px",
            }}
          >
            {children.map((item) => {
              return (
                <SideBarToolItem
                  content={item}
                  level={level + 1}
                  key={item.id}
                />
              );
            })}
          </CommonStyles.Box>
        </Collapse>
      )}
    </CommonStyles.Box>
  );
};

export default SideBarToolItem;
