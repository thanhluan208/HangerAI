import React, { useCallback } from "react";
import CommonStyles from "../../CommonStyles";
import { Divider, Link, Popover } from "@mui/material";
import { useAuthentication } from "../../../providers/AuthenticationProvider";
import CommonIcons from "../../CommonIcons";

const SettingTab = ({ icon, title, subTitle, sxContainer }) => {
  return (
    <CommonStyles.Button
      variant="text"
      sx={{
        marginTop: "30px",
        marginBottom: "10px",
        textTransform: "none",
        width: "90%",
        color: "unset",
        padding: "5px 20px",
        ...sxContainer,
      }}
    >
      <CommonStyles.Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "20% 80%",
          cursor: "pointer",
        }}
      >
        <CommonStyles.Box
          sx={{
            paddingTop: "5px",
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          {icon}
        </CommonStyles.Box>
        <CommonStyles.Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <CommonStyles.Typography type="boldText14">
            {title}
          </CommonStyles.Typography>
          <CommonStyles.Typography
            type="normalText"
            sx={{ opacity: 0.6, fontSize: ".85rem" }}
          >
            {subTitle}
          </CommonStyles.Typography>
        </CommonStyles.Box>
      </CommonStyles.Box>
    </CommonStyles.Button>
  );
};

const User = () => {
  //! State
  const { handleLogout } = useAuthentication(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  //! Function
  const handleOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  //! Render
  return (
    <div>
      <CommonStyles.Button
        variant="text"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          padding: "5px 10px",
          top: "10px",
          right: "15px",
          cursor: "pointer",
          textTransform: "none",
        }}
        onClick={handleOpen}
      >
        <CommonStyles.Avatar src="https://lh3.googleusercontent.com/ogw/AKPQZvyASBUcpQgfbJFtlWST2R3jgHPG-CdGKfsicVCI=s32-c-mo" />
        <CommonStyles.Typography type="boldText">
          Thanh Luan
        </CommonStyles.Typography>
      </CommonStyles.Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          marginTop: "10px",
        }}
      >
        <CommonStyles.Box
          centered
          sx={{
            width: "300px",
            padding: "10px 0",
            paddingTop: "20px",
            flexDirection: "column",
          }}
        >
          <CommonStyles.Box centered sx={{ flexDirection: "column" }}>
            <CommonStyles.Avatar
              sx={{ borderRadius: "8px" }}
              src="https://lh3.googleusercontent.com/ogw/AKPQZvyASBUcpQgfbJFtlWST2R3jgHPG-CdGKfsicVCI=s32-c-mo"
            />
            <CommonStyles.Box
              centered
              sx={{
                flexDirection: "column",
              }}
            >
              <CommonStyles.Typography type="boldText">
                Thanh Luan
              </CommonStyles.Typography>
              <CommonStyles.Typography
                type="normalText"
                sx={{ opacity: 0.6, fontSize: ".85rem" }}
              >
                thanhluan20880@gmail.com
              </CommonStyles.Typography>
            </CommonStyles.Box>
          </CommonStyles.Box>

          <SettingTab
            icon={<CommonIcons.User style={{ fontSize: "1rem" }} />}
            title="Personal setting"
            subTitle="Edit account profile"
          />

          <Divider
            sx={{
              width: "90%",
            }}
          />

          <SettingTab
            icon={<CommonIcons.Group style={{ fontSize: "1rem" }} />}
            title="Workspace setting"
            subTitle="Edit workspace profile"
            sxContainer={{
              marginTop: "10px",
            }}
          />

          <SettingTab
            icon={<CommonIcons.MoneyBill style={{ fontSize: "1rem" }} />}
            title="Manage your plan"
            subTitle="Plans and billing"
            sxContainer={{
              marginTop: "10px",
            }}
          />
          <CommonStyles.Button sx={{ width: "90%", marginBottom: "20px" }}>
            Update plan
          </CommonStyles.Button>

          <Divider
            sx={{
              width: "90%",
            }}
          />

          <CommonStyles.Button
            variant="text"
            sx={{
              width: "90%",
              margin: "20px 0",
              display: "grid",
              gridTemplateColumns: "20% 80%",
              padding: "5px 20px",
              color: "unset",
              textTransform: "none",
            }}
          >
            <CommonIcons.LogoutIcon />
            <CommonStyles.Box sx={{ display: "flex" }}>
              <CommonStyles.Typography type="boldText14">
                Logout
              </CommonStyles.Typography>
            </CommonStyles.Box>
          </CommonStyles.Button>

          <Divider
            sx={{
              width: "90%",
            }}
          />

          <CommonStyles.Typography
            sx={{
              width: "80%",
              fontSize: ".9rem",
              opacity: ".7",
              marginTop: "10px",
            }}
          >
            By using HangerAI, you agree to our <Link>Terms of Use </Link>
            and <Link> Privacy Policy </Link>.
          </CommonStyles.Typography>
        </CommonStyles.Box>
      </Popover>
    </div>
  );
};

export default User;
