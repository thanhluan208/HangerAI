import React, { useMemo } from "react";
import CommonStyles from "../../components/CommonStyles";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomFields from "../../components/CustomFields";
import ChangePassword from "./components/ChangePassword";
import { useToastPromise } from "../../hooks/useToast";

const UserProfile = () => {
  //! State
  const initialValues = useMemo(() => {
    return {
      userName: "Thanh Luan",
      email: "thanhluan20880@gmail.com",
      password: "",
      confirmPassword: "",
      firstName: "Luan",
      lastName: "Dang",
      organization: "",
      phone: "0789 999 999",
      address: "123, ABC, XYZ, VN",
      avatar: "",
      isChangePassword: false,
    };
  }, []);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      userName: Yup.string().required("User name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().test(
        "passwords-required",
        "Passwords is required",
        function (value) {
          if (this.parent.isChangePassword === false) return true;
          return !!this.parent.password;
        }
      ),
      confirmPassword: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          if (this.parent.isChangePassword === false) return true;
          return this.parent.password === value;
        }
      ),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phone: Yup.string().required("Phone is required"),
      address: Yup.string().required("Address is required"),
    });
  }, []);

  //! Function
  const handleSubmit = async (value, { setSubmitting }) => {
    const onSuccess = (response, toast) => {
      console.log("response", response);
      toast("Your informations have been saved");
    };

    const promiseFunc = async () => {
      return new Promise((resolve, reject) => {
        const isSuccess = Math.random() * 10 > 5;
        setTimeout(() => {
          if (!isSuccess) return reject("Error");
          resolve("Success", value);
        }, 2000);
      });
    };

    useToastPromise(
      promiseFunc,
      {
        pending: "Saving...",
        success: "Saved",
        error: "Error",
      },
      onSuccess
    );
    setSubmitting(false);
  };

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "50px 0",
      }}
    >
      <CommonStyles.Box
        sx={{
          padding: "0 50px",
        }}
      >
        <CommonStyles.Typography type="boldText24">
          User Profile
        </CommonStyles.Typography>
      </CommonStyles.Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={handleSubmit}
      >
        {({ resetForm, isSubmitting, errors }) => {
          console.log("erroe", errors);
          return (
            <Form
              style={{
                margin: "100px auto 0 auto",
                padding: "0 100px",
                maxWidth: "1200px",
                display: "flex",
                alignItems: "start",
                gap: "50px",
              }}
            >
              <CommonStyles.Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <CommonStyles.Box
                  sx={{
                    background:
                      'url("https://i.pinimg.com/564x/3e/93/b9/3e93b96fba3223316afda88ad1846429.jpg")',
                    height: "300px",
                    borderRadius: "8px",
                    aspectRatio: "1/1",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CommonStyles.Button
                  variant="outlined"
                  sx={{
                    marginTop: "20px",
                    width: "100%",
                    textTransform: "none",
                  }}
                >
                  <CommonStyles.Typography type="body18">
                    Change Avatar
                  </CommonStyles.Typography>
                </CommonStyles.Button>
              </CommonStyles.Box>
              <CommonStyles.Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "100%",
                }}
              >
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
                      name="firstName"
                      component={CustomFields.TextField}
                      label="First Name"
                      fullWidth
                    />
                  </CommonStyles.Box>
                  <CommonStyles.Box>
                    <FastField
                      name="lastName"
                      component={CustomFields.TextField}
                      label="Last Name"
                      fullWidth
                    />
                  </CommonStyles.Box>
                  <CommonStyles.Box>
                    <FastField
                      name="userName"
                      component={CustomFields.TextField}
                      label="User Name"
                      fullWidth
                    />
                  </CommonStyles.Box>
                  <CommonStyles.Box>
                    <FastField
                      name="email"
                      component={CustomFields.TextField}
                      label="Email"
                      fullWidth
                    />
                  </CommonStyles.Box>
                  <CommonStyles.Box>
                    <FastField
                      name="phone"
                      component={CustomFields.TextField}
                      label="Phone"
                      fullWidth
                    />
                  </CommonStyles.Box>
                  <CommonStyles.Box>
                    <FastField
                      name="address"
                      component={CustomFields.TextField}
                      label="Address"
                      fullWidth
                    />
                  </CommonStyles.Box>
                </CommonStyles.Box>
                <CommonStyles.Box sx={{ marginTop: "30px" }}>
                  <FastField
                    name="organization"
                    component={CustomFields.TextField}
                    label="Organization"
                    fullWidth
                  />
                </CommonStyles.Box>

                <ChangePassword />

                <CommonStyles.Box
                  centerer
                  sx={{
                    position: "fixed",
                    bottom: 30,
                    right: 30,
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <CommonStyles.Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                    }}
                    type="button"
                    disabled={isSubmitting}
                    onClick={resetForm}
                  >
                    <CommonStyles.Typography type="body18">
                      Reset
                    </CommonStyles.Typography>
                  </CommonStyles.Button>
                  <CommonStyles.Button
                    sx={{
                      textTransform: "none",
                    }}
                    loading={isSubmitting}
                    type="submit"
                  >
                    <CommonStyles.Typography type="body18">
                      Save
                    </CommonStyles.Typography>
                  </CommonStyles.Button>
                </CommonStyles.Box>
              </CommonStyles.Box>
            </Form>
          );
        }}
      </Formik>
    </CommonStyles.Box>
  );
};

export default UserProfile;
