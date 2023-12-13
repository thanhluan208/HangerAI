import React, { useCallback, useEffect, useMemo } from "react";
import CommonStyles from "../../components/CommonStyles";
import { useTheme } from "@emotion/react";
import { Field, Form, Formik } from "formik";
import CustomFields from "../../components/CustomFields";
import { Link } from "@mui/material";
import CommonIcons from "../../components/CommonIcons";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import * as Yup from "yup";
import { loginFacebookURL, loginGoogleURL } from "../../constants/api";

const Login = () => {
  //! State
  const theme = useTheme();
  const { handleLoginTest } = useAuthentication();
  const initialValue = useMemo(() => {
    return {
      email: "",
      password: "",
    };
  }, []);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required field"),
      password: Yup.string().required("Password is required field"),
    });
  }, []);

  //! Function
  const onSubmit = useCallback(
    (values, { setSubmitting }) => {
      handleLoginTest(values, setSubmitting);
    },
    [handleLoginTest]
  );

  const handleLoginGoogle = useCallback(() => {
    window.open(loginGoogleURL, "_self");
  }, []);

  const handleLoginFacebook = useCallback(() => {
    window.open(loginFacebookURL, "_self");
  }, []);

  //! Render

  return (
    <CommonStyles.Box
      centered
      sx={{
        background: "linear-gradient(135deg, #f2fdff, #7ee8fa)",
        backgroundSize: "400% 400%",
        animation: "gradientTransform 5s linear infinite",
        width: "100vw",
        height: "100vh",
        position: "relative",
        "@keyframes gradientTransform": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      }}
    >
      <CommonStyles.Box
        sx={{
          position: "absolute",
          top: "30px",
          left: "60px",
        }}
      >
        <CommonStyles.BrandLogo />
      </CommonStyles.Box>

      <CommonStyles.Button
        sx={{
          position: "absolute",
          top: "30px",
          right: "60px",
          padding: "5px 25px",
          backgroundColor: theme.colors.primary250,
          "&:hover": {
            backgroundColor: theme.colors.primary250,
          },
        }}
      >
        <CommonStyles.Typography type="boldText14">
          Request an account
        </CommonStyles.Typography>
      </CommonStyles.Button>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <CommonStyles.Box
                centered
                sx={{
                  padding: "20px 40px",
                  background: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  minWidth: "400px",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <CommonStyles.Typography
                  type="boldText24"
                  sx={{ marginBottom: "20px" }}
                >
                  Agent Login
                </CommonStyles.Typography>
                <CommonStyles.Typography
                  type="body14"
                  sx={{ width: "250px", textAlign: "center" }}
                >
                  Hey, Enter your detail to get sign in your account !
                </CommonStyles.Typography>
                <CommonStyles.Box
                  sx={{
                    width: "100%",
                    padding: "10px 0",
                    marginTop: "20px",
                  }}
                >
                  <Field
                    name="email"
                    component={CustomFields.TextField}
                    fullWidth
                    placeholder="Email"
                  />
                </CommonStyles.Box>
                <CommonStyles.Box
                  sx={{
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <Field
                    name="password"
                    type="password"
                    component={CustomFields.TextField}
                    fullWidth
                    placeholder="password"
                  />
                </CommonStyles.Box>

                <CommonStyles.Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    width: "100%",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  <Link>
                    <CommonStyles.Typography type="body14" variant="link">
                      Having trouble logging in?
                    </CommonStyles.Typography>
                  </Link>
                </CommonStyles.Box>

                <CommonStyles.Button
                  sx={{
                    width: "100%",
                    backgroundColor: theme.colors.primary250,
                    color: theme.colors.black,
                    textTransform: "none",
                    fontWeight: 700,
                    marginTop: "20px",
                    "&:hover": {
                      backgroundColor: theme.colors.primary250,
                    },
                  }}
                  loading={isSubmitting}
                  type="submit"
                >
                  Sign in
                </CommonStyles.Button>

                <CommonStyles.Typography
                  type="body14"
                  sx={{ marginTop: "20px" }}
                >
                  --- Or sign in with ---
                </CommonStyles.Typography>
                <CommonStyles.Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexWrap: "wrap",
                    flexDirection: "row",
                  }}
                >
                  <CommonStyles.Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      color: theme.colors.black,
                      border: `.5px solid ${theme.colors.primary550}`,
                      textTransform: "none",
                      fontWeight: 700,
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: theme.colors.primary250,
                      },
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleLoginGoogle}
                  >
                    <CommonIcons.Google />
                    Google
                  </CommonStyles.Button>

                  <CommonStyles.Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      color: theme.colors.black,
                      border: `.5px solid ${theme.colors.primary550}`,
                      textTransform: "none",
                      fontWeight: 700,
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: theme.colors.primary250,
                      },
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                    disabled={isSubmitting}
                    onClick={handleLoginFacebook}
                  >
                    <CommonIcons.Facebook />
                    Facebook
                  </CommonStyles.Button>
                </CommonStyles.Box>

                <CommonStyles.Typography
                  type="body14"
                  sx={{ marginTop: "20px" }}
                >
                  Don't have an account?{" "}
                  <CommonStyles.Typography
                    type="boldText14"
                    variant="link"
                    sx={{ cursor: "pointer" }}
                  >
                    Request now !
                  </CommonStyles.Typography>
                </CommonStyles.Typography>
                <CommonStyles.Box
                  sx={{ position: "absolute", bottom: "-50px" }}
                >
                  <CommonStyles.Typography
                    type="body14"
                    sx={{ marginTop: "20px" }}
                  >
                    © 2021 All Rights Reserved.{" "}
                    <CommonStyles.Typography
                      type="boldText14"
                      variant="link"
                      sx={{ cursor: "pointer" }}
                    >
                      Privacy Policy
                    </CommonStyles.Typography>
                  </CommonStyles.Typography>
                </CommonStyles.Box>
              </CommonStyles.Box>
            </Form>
          );
        }}
      </Formik>
    </CommonStyles.Box>
  );
};

export default Login;
