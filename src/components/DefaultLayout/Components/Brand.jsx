import { useTheme } from "@emotion/react";
import React, { Fragment } from "react";
import CommonStyles from "../../CommonStyles";
import useToggleDialog from "../../../hooks/useToggleDialog";

const Brand = () => {
  //! State
  const theme = useTheme();
  const { open, shouldRender, toggle } = useToggleDialog();

  //! Function

  //! Render
  return (
    <Fragment>
        {shouldRender && (
            <CommonStyles.Dialog
                open={open}
                content={
                    <div>hehe</div>
                }
                title={<div>VEESUAL TOOLS</div>}
                toggle={toggle}
                disableClickOutside={false}
                maxWidth="xl"
                showCloseIcon
            />
        )}
      <CommonStyles.Box
        centered
        sx={{
          flex: 1,
          cursor: "pointer",
          display: "none",
          [theme.breakpoints.down("md")]: {
            display: "block",
            position: "absolute",
            top: "15px",
            left: "15px",
            cursor: "pointer",
          },
        }}
        onClick={toggle}
      >
        <img
          width="180"
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 200px, (max-width: 1439px) 14vw, 200px"
          src="https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02.png"
          srcset="https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-500.png 500w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-800.png 800w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-1080.png 1080w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-1600.png 1600w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02.png 2513w"
          alt=""
          class="logo-image"
        />
      </CommonStyles.Box>
    </Fragment>
  );
};

export default Brand;
