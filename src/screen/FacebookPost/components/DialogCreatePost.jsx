import React, { Fragment, useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { FastField, Form, Formik } from "formik";
import CustomFields from "../../../components/CustomFields";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogCreatePost = () => {
  //! State
  const [open, setOpen] = useState(false);

  //! Function
  const handleSubmit = () => {
    setOpen(false);
  };

  //! Render
  return (
    <Fragment>
      <CommonStyles.Button
        sx={{ display: "flex", gap: "10px", textTransform: "none" }}
        onClick={() => setOpen(true)}
      >
        <CommonIcons.Add />
        Create post
      </CommonStyles.Button>
      <CommonStyles.Box
        sx={{
          ".MuiPaper-root": {
            maxWidth: "unset",
          },
        }}
      >
        <Dialog
          open={open}
          TransitionComponent={Transition}
          onClose={() => setOpen(false)}
          sx={{
            minWidth: "800px",
          }}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Create facebook post"}</DialogTitle>
          <DialogContent
            sx={{
              minWidth: "800px",
            }}
          >
            <Formik>
              {() => {
                return (
                  <Form>
                    <CommonStyles.Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "25px",
                      }}
                    >
                      <CommonStyles.Box>
                        <FastField
                          name="content"
                          label="Content"
                          component={CustomFields.TextField}
                          placeholder="Write something here..."
                          fullWidth
                          multiline
                          minRows="4"
                          maxRows="6"
                        />
                      </CommonStyles.Box>
                    </CommonStyles.Box>
                  </Form>
                );
              }}
            </Formik>
          </DialogContent>
          <DialogActions>
            <CommonStyles.Button onClick={handleSubmit}>
              Create
            </CommonStyles.Button>
          </DialogActions>
        </Dialog>
      </CommonStyles.Box>
    </Fragment>
  );
};

export default DialogCreatePost;
