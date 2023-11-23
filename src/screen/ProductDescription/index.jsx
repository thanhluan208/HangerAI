import React, { useMemo } from "react"
import CommonStyles from "../../components/CommonStyles"
import { Formik, Form, Field } from "formik"
import CustomFields from "../../components/CustomFields"
import * as Yup from "yup"
import Dropzone from "./Components/Dropzone"

const ProductDescription = () => {
  //! State
  const initialValues = useMemo(() => {
    return {
      currentWork: "Untitlted work",
      companyName: "",
      brandName: "",
      productName: "",
      promotion: "",
    }
  }, [])

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      currentWork: Yup.string().required(),
    })
  }, [])

  //! Function

  //! Render
  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validateOnBlur={true}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        return (
          <Form>
            <CommonStyles.Box
              sx={{
                padding: "20px",
                flexDirection: "column",
              }}
              centered
            >
              <CommonStyles.Box
                sx={{
                  width: "100%",
                  backgroundColor: "#5003b2",
                  borderRadius: "40px",
                  height: "350px",
                  position: "relative",
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CommonStyles.Box centered>
                  <CommonStyles.Typography
                    type="boldText32"
                    sx={{
                      marginTop: "40px",
                      color: "#f7d46e",
                    }}
                  >
                    Product description
                  </CommonStyles.Typography>
                </CommonStyles.Box>
              </CommonStyles.Box>
              <CommonStyles.Box
                sx={{
                  width: "90%",
                  background: "rgb(220 208 240 / 74%)",
                  borderRadius: "24px",
                  boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
                  padding: "20px",
                  display: "grid",
                  gridTemplateColumns: "30% 40% 30%",
                  backdropFilter: "blur(10px)",
                  marginTop: "-250px",
                }}
              >
                <CommonStyles.Box
                  sx={{
                    paddingTop: "30px",
                  }}
                >
                  <CommonStyles.Box
                    sx={{
                      fieldset: {
                        border: "none",
                      },
                      textarea: {
                        fontSize: "2rem",
                        lineHeight: "28px",
                        color: "#f7d46e",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <Field
                      name="currentWork"
                      component={CustomFields.TextField}
                      fullWidth
                      multiline
                    />
                  </CommonStyles.Box>

                  <CommonStyles.Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      marginTop: "25px",
                    }}
                  >
                    <CommonStyles.Box>
                      <Field
                        name="companyName"
                        label="Company Name"
                        component={CustomFields.TextField}
                        placeholder="Miracle Hanger"
                        fullWidth
                      />
                    </CommonStyles.Box>

                    <CommonStyles.Box>
                      <Field
                        name="brandName"
                        label="Brand Name"
                        component={CustomFields.TextField}
                        placeholder="Vanity Royals"
                        fullWidth
                      />
                    </CommonStyles.Box>

                    <CommonStyles.Box>
                      <Field
                        name="productName"
                        label="Product Name"
                        component={CustomFields.TextField}
                        placeholder="Nike air max"
                        fullWidth
                      />
                    </CommonStyles.Box>

                    <CommonStyles.Box>
                      <Field
                        name="promotion"
                        label="Promotion"
                        component={CustomFields.TextField}
                        placeholder="Nike air max"
                        fullWidth
                        multiline
                        minRows="4"
                        maxRows="6"
                      />
                    </CommonStyles.Box>
                  </CommonStyles.Box>
                </CommonStyles.Box>
                <CommonStyles.Box
                  centered
                  sx={{
                    padding: "15px 0",
                  }}
                >
                  <Field name="image" component={Dropzone} />
                </CommonStyles.Box>
                <CommonStyles.Box></CommonStyles.Box>
              </CommonStyles.Box>
            </CommonStyles.Box>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ProductDescription
