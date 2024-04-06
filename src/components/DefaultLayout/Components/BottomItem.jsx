import { useGet } from "../../../stores/useStores";
import CommonStyles from "../../CommonStyles";
import CommonIcons from "../../CommonIcons";
import { useTheme } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { Divider, IconButton } from "@mui/material";
import EditImageButton from "./EditImageButton";

const BottomItem = ({setPopUp}) => {
  //! State
  const pathName = useLocation().pathname;
  const theme = useTheme();

  //! Function

  //! Render
  if (pathName.includes("product-recommendation")) {
    return <EditImageButton />;
  }

  const hanldeClick =() =>{
    setPopUp(true)
  }

  return (
    <CommonStyles.Box
      sx={{
        width: "100%",
        padding: "10px 0",
        backgroundColor: theme.colors.custom.backgroundSecondary,
        borderRadius: "8px",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        opacity: open ? 1 : 0,
        transition: `all 0.5s `,
      }}
    >
      <CommonStyles.Box centered>
        <CommonStyles.Typography
          sx={{
            color: theme.colors.custom.textPrimary,
            fontWeight: "bold",
          }}
        >
          Free plan
        </CommonStyles.Typography>
        <CommonStyles.Tooltip
          title={"Free plan account allows you to create 1 project"}
          placement="top"
        >
          <IconButton>
            <CommonIcons.Info
              style={{
                fontSize: "1.2rem",
                color: theme.colors.custom.textPrimary,
              }}
            />
          </IconButton>
        </CommonStyles.Tooltip>
      </CommonStyles.Box>
      <Divider />

      <CommonStyles.Box
        centered
        sx={{
          padding: "0 10px",
          textAlign: "center",
          margin: "10px 0",
          flexDirection: "column",
          gap: "10px",
          textWrap: "wrap",
        }}
      >
        <CommonStyles.Typography
          sx={{
            fontSize: ".9rem",
            opacity: 0.7,
            color: theme.colors.custom.text,
          }}
        >
          Upgrade to{" "}
          <CommonStyles.Typography
            type="boldText14"
            component="span"
            sx={{
              textTransform: "uppercase",
              color: theme.colors.custom.text,
              opacity: 1,
              letterSpacing: "0.175rem",
              margin: "0 5px",
            }}
          >
            premium
          </CommonStyles.Typography>{" "}
          to create unlimited projects
        </CommonStyles.Typography>

        <CommonStyles.Button sx={{ width: "100%" }} onClick={hanldeClick}>
          Upgrade
        </CommonStyles.Button>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default BottomItem;
