import React, { useMemo, useRef } from "react";
import CommonStyles from "../../components/CommonStyles";
import { FastField, Form, Formik } from "formik";
import ImageDrop from "./components/ImageDrop";
import CustomFields from "../../components/CustomFields";
import { useTheme } from "@emotion/react";
import Header from "./components/Header";
import PerfectScroolbar from "react-perfect-scrollbar";
import ExampleCard from "./components/ExampleCard";

const VirtualPhotoshoot = () => {
  //! State
  const theme = useTheme();
  const canvasRef = useRef(null);
  const initialValues = useMemo(() => {
    return {
      image: "",
      prompt: "",
    };
  }, []);

  console.log("canvas", canvasRef);

  //! Function

  //! Render
  return (
    <Formik initialValues={initialValues}>
      {({ resetForm }) => {
        return (
          <Form
            style={{
              padding: "0 100px",
            }}
          >
            <CommonStyles.Box
              sx={{
                maxWidth: "1500px",
                display: "flex",
                gap: "100px",
                margin: "50px auto",
              }}
            >
              <CommonStyles.Box
                sx={{
                  width: "60%",
                  height: "400px",
                }}
              >
                <FastField name="image" component={ImageDrop} />
              </CommonStyles.Box>

              <CommonStyles.Box
                sx={{
                  width: "calc(40% - 100px)",
                }}
              >
                <Header />
                <CommonStyles.Box
                  sx={{
                    padding: "16px 25px",
                    borderRadius: "10px",
                    background: theme.colors.custom.backgroundSecondary,
                  }}
                >
                  <CommonStyles.Typography
                    type="boldText"
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    Settings
                  </CommonStyles.Typography>
                  <CommonStyles.Box
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <FastField
                      name="prompt"
                      component={CustomFields.TextField}
                      label="Prompt"
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </CommonStyles.Box>
                  <CommonStyles.Typography
                    type="boldText"
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    Examples
                  </CommonStyles.Typography>
                  <PerfectScroolbar
                    style={{
                      maxHeight: "350px",
                    }}
                  >
                    <CommonStyles.Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2,1fr)",
                        gridGap: "10px",
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return <ExampleCard key={item} />;
                      })}
                    </CommonStyles.Box>
                  </PerfectScroolbar>

                  <CommonStyles.Box
                    sx={{
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "10px",
                    }}
                  >
                    <CommonStyles.Button variant="outlined" onClick={resetForm}>
                      <CommonStyles.Typography type="body">
                        Reset all
                      </CommonStyles.Typography>
                    </CommonStyles.Button>
                    <CommonStyles.Button>
                      <CommonStyles.Typography
                        type="body"
                        sx={{ color: "#ffffff" }}
                      >
                        Generate
                      </CommonStyles.Typography>
                    </CommonStyles.Button>
                  </CommonStyles.Box>
                </CommonStyles.Box>
              </CommonStyles.Box>
            </CommonStyles.Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default VirtualPhotoshoot;
