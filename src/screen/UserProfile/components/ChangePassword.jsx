import React, { Fragment, useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useTheme } from "@emotion/react";
import { FastField, useFormikContext } from "formik";
import CustomFields from "../../../components/CustomFields";

const ChangePassword = () => {
  //! State
  const { setFieldValue, values } = useFormikContext();
  const { isChangePassword } = values;
  const theme = useTheme();
  //! Function

  const handleChangePass = () => {
    setFieldValue("isChangePassword", !isChangePassword);
  };

  //! Render
  return (
    <CommonStyles.Box sx={{ marginTop: "20px" }}>
      {!isChangePassword ? (
        <CommonStyles.Typography
          type="body18"
          sx={{
            marginBottom: "20px",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              color: theme.colors.custom.textPrimary,
              textDecoration: "underline",
            },
          }}
          onClick={handleChangePass}
        >
          Change Password
        </CommonStyles.Typography>
      ) : (
        <Fragment>
          <CommonStyles.Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridGap: "20px",
              rowGap: "40px",
            }}
          >
            <CommonStyles.Box>
              <FastField
                name="password"
                type="password"
                component={CustomFields.TextField}
                label="Password"
                fullWidth
              />
            </CommonStyles.Box>

            <CommonStyles.Box>
              <FastField
                name="confirmPassword"
                type="password"
                component={CustomFields.TextField}
                label="Confirm Password"
                fullWidth
              />
            </CommonStyles.Box>
          </CommonStyles.Box>
          <CommonStyles.Typography
            type="body18"
            sx={{
              marginTop: "10px",
              color: "#d43333",
              cursor: "pointer",
              width: "fit-content",
            }}
            onClick={handleChangePass}
          >
            Cancel
          </CommonStyles.Typography>
        </Fragment>
      )}
    </CommonStyles.Box>
  );
};

export default ChangePassword;
