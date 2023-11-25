import React, { useMemo, Fragment } from "react";
import CommonStyles from "../../components/CommonStyles";
import { Formik, Form, FastField } from "formik";
import CustomFields from "../../components/CustomFields";
import * as Yup from "yup";
import Dropzone from "./Components/Dropzone";
import CommonIcons from "../../components/CommonIcons";
import { InputAdornment } from "@mui/material";
import TypingText from "./Components/TypingText";
import HistoryFile from "./Components/HistoryFile";

const writingToneOptions = [
  {
    label: "Funny",
    value: "Funny",
  },
  {
    label: "Formal",
    value: "Formal",
  },
  {
    label: "Academic",
    value: "Academic",
  },
  {
    label: "Luxury",
    value: "Luxury",
  },
  {
    label: "Casual",
    value: "Casual",
  },
];

const templateOptions = [
  {
    label: "Advertisement",
    value: "advertisement",
  },
  {
    label: "Facebook ad long post",
    value: "facebook_ad_long_post",
  },
  {
    label: "Facebook ad short post",
    value: "facebook_ad_short_post",
  },
];

const languageOptions = [
  {
    label: "English 🇬🇧",
    value: "english",
  },
  {
    label: "Vietnamese 🇻🇳",
    value: "vietnamese",
  },
];

const testText = [
  "In the heart of winter, where frost-laden breaths dance in the crisp air, there exists a sweater that transcends mere fabric and stitches—it is an embodiment of warmth and comfort. Woven with the meticulous care of skilled artisans, this cocoon of coziness is a testament to the artistry that can be found in the simplest of garments. The yarn, a harmonious blend of merino wool and cashmere, embraces the wearer in a gentle embrace, a tactile symphony of softness against the skin. The color palette of the sweater is a reflection of the season itself—deep hues of forest green and rich burgundy intermingling with the ivory of freshly fallen snow, creating a tapestry of winter's enchantment. The texture is a marvel, a play of subtle patterns that evoke the intricate dance of snowflakes as they settle on a quiet evening.",
  "As your fingers trace the lines of the cable-knit, you can almost feel the artisan's dedication, each twist and turn a deliberate expression of craftsmanship. The neckline is a portal to warmth, a generous cowl that cradles the neck and frames the face in a halo of comfort. The sleeves, slightly oversized, allow for the delicious sensation of being enveloped in a gentle hug, while the ribbed cuffs ensure that winter's chill remains at bay. This sweater is not just an article of clothing; it is a sanctuary against the biting winds and a companion for strolls through winter wonderlands.",
  "What sets this sweater apart is not just its physical attributes but the intangible sense of nostalgia and familiarity it carries. It holds within its fibers the laughter of holidays past, the crackling of fires, and the scent of cinnamon and cloves. As you slip it on, it becomes more than a garment—it becomes a vessel for memories and a shield against the cold, a tangible expression of the comfort and joy that winter brings.",
];

const ProductDescription = () => {
  //! State
  const [submitted, setSubmitted] = React.useState(false);
  const [currentDraft, setCurrentDraft] = React.useState(0);
  const initialValues = useMemo(() => {
    return {
      currentWork: "Untitlted work",
      companyName: "",
      brandName: "",
      productName: "",
      promotion: "",
      tone: "Funny",
      template: "advertisement",
      language: "english",
      image: "",
    };
  }, []);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      currentWork: Yup.string().required(),
    });
  }, []);

  //! Function
  const handleChangeDraft = React.useCallback(
    (type) => {
      if (type === "back") {
        if (currentDraft === 0) {
          setCurrentDraft(testText.length - 1);
        } else {
          setCurrentDraft(currentDraft - 1);
        }
      } else {
        if (currentDraft === testText.length - 1) {
          setCurrentDraft(0);
        } else {
          setCurrentDraft(currentDraft + 1);
        }
      }
    },
    [currentDraft]
  );

  //! Render
  const renderContent = React.useCallback(() => {
    if (!submitted) {
      return (
        <Fragment>
          <CommonStyles.Box
            sx={{
              paddingTop: "30px",
              animation: "fadeIn 1s ease-in-out",
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                },
                "100%": {
                  opacity: 1,
                },
              },
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
              <FastField
                name="currentWork"
                component={CustomFields.TextField}
                fullWidth
                multiline
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CommonIcons.Edit />
                    </InputAdornment>
                  ),
                }}
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
                <FastField
                  name="companyName"
                  label="Company Name"
                  component={CustomFields.TextField}
                  placeholder="Miracle Hanger"
                  fullWidth
                />
              </CommonStyles.Box>

              <CommonStyles.Box>
                <FastField
                  name="brandName"
                  label="Brand Name"
                  component={CustomFields.TextField}
                  placeholder="Vanity Royals"
                  fullWidth
                />
              </CommonStyles.Box>

              <CommonStyles.Box>
                <FastField
                  name="productName"
                  label="Product Name"
                  component={CustomFields.TextField}
                  placeholder="Nike air max"
                  fullWidth
                />
              </CommonStyles.Box>

              <CommonStyles.Box>
                <FastField
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
              animation: "fadeIn 1s ease-in-out",
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                },
                "100%": {
                  opacity: 1,
                },
              },
            }}
          >
            <FastField name="image" component={Dropzone} />
          </CommonStyles.Box>
          <CommonStyles.Box
            sx={{
              paddingTop: "30px",
              display: "flex",
              flexDirection: "column",
              animation: "fadeIn 1s ease-in-out",
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                },
                "100%": {
                  opacity: 1,
                },
              },
            }}
          >
            <CommonStyles.Typography
              type="boldText20"
              sx={{ color: "#f7d46e" }}
            >
              Setup options
            </CommonStyles.Typography>

            <CommonStyles.Box
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <CommonStyles.Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <FastField
                  name="useEmoji"
                  component={CustomFields.SwitchField}
                  label="Use emoji"
                />
                <FastField
                  name="useEmoji2"
                  component={CustomFields.SwitchField}
                  label="Use emoji 2"
                />
                <FastField
                  name="useEmoji3"
                  component={CustomFields.SwitchField}
                  label="Use emoji 3"
                />
                <FastField
                  name="useEmoji4"
                  component={CustomFields.SwitchField}
                  label="Use emoji 4"
                />
              </CommonStyles.Box>

              <CommonStyles.Box>
                <FastField
                  name="language"
                  label="Language"
                  fullWidth
                  component={CustomFields.SelectField}
                  options={languageOptions}
                />
              </CommonStyles.Box>

              <CommonStyles.Box>
                <FastField
                  name="tone"
                  label="Wrting tone"
                  fullWidth
                  component={CustomFields.SelectField}
                  options={writingToneOptions}
                />
              </CommonStyles.Box>

              <CommonStyles.Box>
                <FastField
                  name="template"
                  label="Template"
                  fullWidth
                  component={CustomFields.SelectField}
                  options={templateOptions}
                />
              </CommonStyles.Box>
            </CommonStyles.Box>

            <CommonStyles.Box
              sx={{
                marginTop: "20px",
                display: "flex",
                gap: "20px",
              }}
            >
              <CommonStyles.Button onClick={() => setSubmitted(true)}>
                <CommonStyles.Typography type="boldText16">
                  Generate
                </CommonStyles.Typography>
              </CommonStyles.Button>

              <CommonStyles.Button variant="outlined">
                <CommonStyles.Typography type="boldText16">
                  Save
                </CommonStyles.Typography>
              </CommonStyles.Button>
            </CommonStyles.Box>
          </CommonStyles.Box>
        </Fragment>
      );
    }
    return (
      <CommonStyles.Box
        sx={{
          animation: "fadeInSubmitted 1s ease-in-out",
          "@keyframes fadeInSubmitted": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}
      >
        <CommonStyles.Box
          sx={{
            height: "400px",
            width: "30%",
            backgroundColor: "#5c3883",
            borderRadius: "24px",
            float: "left",
            marginRight: "40px",
          }}
        ></CommonStyles.Box>
        <CommonStyles.Box
          sx={{
            marginLeft: "20px",
          }}
        >
          <TypingText content={testText[currentDraft]} />
        </CommonStyles.Box>
        <CommonStyles.Button onClick={() => setSubmitted(false)}>
          Back
        </CommonStyles.Button>
      </CommonStyles.Box>
    );
  }, [submitted, currentDraft]);

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          const { values } = formikProps;
          const { image } = values;
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
                    backgroundColor: "#5c3883",
                    borderRadius: "40px",
                    height: "350px",
                    position: "relative",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CommonStyles.Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "30% 40% 30%",
                      width: "100%",
                    }}
                  >
                    <CommonStyles.Box></CommonStyles.Box>
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
                    <CommonStyles.Box
                      sx={{
                        display: submitted ? "flex" : "none",
                        justifyContent: "space-around",
                        alignItems: "end",
                        paddingRight: "80px",
                      }}
                    >
                      <CommonStyles.Typography
                        type="boldText20"
                        sx={{
                          color: "#f7d46e",
                        }}
                      >
                        Current draft: {currentDraft + 1}
                      </CommonStyles.Typography>
                      <CommonStyles.Box centered sx={{ gap: "5px" }}>
                        <CommonIcons.Back
                          style={{
                            fontSize: "28px",
                            color: "#f7d46e",
                            cursor: "pointer",
                          }}
                          onClick={() => handleChangeDraft("back")}
                        />
                        <CommonIcons.Next
                          style={{
                            fontSize: "28px",
                            color: "#f7d46e",
                            cursor: "pointer",
                          }}
                          onClick={() => handleChangeDraft("next")}
                        />
                      </CommonStyles.Box>
                    </CommonStyles.Box>
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
                    gridTemplateColumns: submitted ? "1fr" : "30% 40% 30%",
                    backdropFilter: "blur(10px)",
                    marginTop: "-250px",
                    transition: "all .5s ease-in-out",
                  }}
                >
                  {renderContent()}
                </CommonStyles.Box>
              </CommonStyles.Box>
            </Form>
          );
        }}
      </Formik>

      <CommonStyles.Box
        sx={{
          padding: "0 20px",
          margin: "40px 0",
        }}
      >
        <CommonStyles.Typography type="boldText24" sx={{ color: "#5c3883" }}>
          Uploaded Image
        </CommonStyles.Typography>
      </CommonStyles.Box>
      <HistoryFile />
    </Fragment>
  );
};

export default ProductDescription;
