import React, { Fragment, useState } from "react";
import CommonStyles from "../../CommonStyles";
import { useTheme } from "@emotion/react";
import CommonIcons from "../../CommonIcons";

const EditImageButton = () => {
  //! State
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  //! Function

  //! Render
  return (
    <Fragment>
      <CommonStyles.Box
        centered
        sx={{
          background: theme.colors.custom.backgroundSecondary,
          animation: "fadeInEditImage 0.5s ease-in-out",
          borderRadius: "8px",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
          "@keyframes fadeInEditImage": {
            from: {
              opacity: 0,
              transform: "translateX(-100%)",
            },
            to: {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
      >
        <CommonStyles.Button
          variant="text"
          onClick={() => setOpen(true)}
          sx={{
            padding: "10px 20px",
            textTransform: "none",
            color: "unset",
            display: "flex",
            gap: "10px",
          }}
        >
          <CommonIcons.Wand />
          Edit image
        </CommonStyles.Button>
      </CommonStyles.Box>
      <CommonStyles.Dialog
        open={open}
        toggle={() => setOpen(false)}
        maxWidth="60vw"
      />
    </Fragment>
  );
};

export default EditImageButton;
