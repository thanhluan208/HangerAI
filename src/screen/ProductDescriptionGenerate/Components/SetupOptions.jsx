import { Collapse, Divider, Paper } from "@mui/material";
import { FastField, Form, Formik, useFormikContext } from "formik";
import React, { useCallback, useRef, useState } from "react";
import Dropzone from "./Dropzone";
import CommonStyles from "../../../components/CommonStyles";
import CustomFields from "../../../components/CustomFields";
import { useGet, useSave } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";
import { isEmpty } from "lodash";
import * as Yup from "yup";
import CommonIcons from "../../../components/CommonIcons";
import productRecomendationModel from "../../../models/productRecomendationModel";
import productRecomendationServices from "../../../services/productRecomendationServices";

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

const ListItemFromPic = () => {
  //! State
  const save = useSave();
  const listItem = useGet(cachedKeys.listItems);
  const { values, setFieldValue } = useFormikContext();

  const { selectedItem } = values;

  //! Function
  const handleClick = useCallback((item) => {
    setFieldValue("selectedItem", item);
  }, []);

  //! Render
  if (isEmpty(listItem)) return null;

  return (
    <CommonStyles.Box
      sx={{
        animation: "fadeIn 0.5s ease-in-out",
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
      <Divider />

      <CommonStyles.Box
        sx={{
          margin: "20px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {listItem.map((item, index) => {
          return (
            <CommonStyles.Chip
              content={item.name}
              key={index}
              active={selectedItem === item}
              onClick={() => handleClick(item)}
            />
          );
        })}
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

const fakeResponse =
  "Introducing the HangerMiracle shorts, a perfect combination of style and comfort. These symmetrical shorts feature a regular fit, ensuring a flattering and relaxed silhouette. With an above-the-knee length, they offer a trendy and versatile look suitable for various occasions. The fly opening type adds convenience and functionality to the design. Made with high-quality materials, these shorts feature a plain pattern textile, adding a touch of sophistication to your outfit. From casual outings to semi-formal events, the HangerMiracle shorts are a must-have addition to any fashion-forward individual's wardrobe.";

const SetupOptions = () => {
  //! State
  const [open, setOpen] = useState(false);
  const intervalRef = useRef();
  const setValueEditor = useGet(cachedKeys.setValueEditor);
  const productRecommendEditorKey = useGet(
    cachedKeys.productRecommendEditorKey
  );
  const initialValues = React.useMemo(() => {
    return {
      image: "",
      language: "english",
      tone: "Funny",
      template: "advertisement",
      selectedItem: "",
      companyName: "",
      brandName: "",
      productName: "",
      promotion: "",
    };
  }, []);

  const validationSchema = React.useMemo(() => {
    return Yup.object().shape({
      selectedItem: Yup.object().required("Please select item"),
    });
  }, []);

  //! Function
  const onSubmit = React.useCallback(
    async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);

        const uuid = Math.random() * 100000000;
        setValueEditor((prev) => prev + `<p id="content_${uuid}"></p>`);

        let contentContainer;
        await new Promise((res) => {
          setTimeout(() => {
            contentContainer = productRecommendEditorKey.current.editor.dom.get(
              `content_${uuid}`
            );
            res();
          }, 1);
        });

        const payload = productRecomendationModel.generateContent(values);
        const response = await productRecomendationServices.generateContent(
          payload
        );

        const content = response?.data?.content;

        if (intervalRef?.current) {
          clearInterval(intervalRef.current);
        }

        contentContainer.innerHTML = content[0];
        let count = 1;
        intervalRef.current = setInterval(() => {
          contentContainer.innerHTML += content[count++];
          if (count >= content.length) {
            clearInterval(intervalRef.current);
            setSubmitting(false);
          }
        }, 20);
      } catch (error) {
        console.log("err", error);
      }
    },
    [setValueEditor, intervalRef, productRecommendEditorKey]
  );

  //! Render

  return (
    <Paper
      sx={{
        minHeight: "70vh",
        padding: "0 20px  20px",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur
        validateOnChange
      >
        {({ values, errors, isSubmitting }) => {
          const { image, selectedItem } = values;
          const disabledGenerateContent = !image || !selectedItem;

          return (
            <Form>
              <CommonStyles.Box
                centered
                sx={{
                  flexDirection: "column",
                  gap: "10px",
                  paddingTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <FastField name="image" component={Dropzone} />
              </CommonStyles.Box>

              <ListItemFromPic />

              <Divider />

              <FastField
                name="template"
                label="Template"
                fullWidth
                component={CustomFields.SelectField}
                options={templateOptions}
                sxContainer={{
                  marginTop: "20px",
                }}
              />
              <CommonStyles.Box
                centered
                sx={{
                  gap: "12px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <FastField
                  name="language"
                  label="Language"
                  fullWidth
                  component={CustomFields.SelectField}
                  options={languageOptions}
                />

                <FastField
                  name="tone"
                  label="Wrting tone"
                  component={CustomFields.SelectField}
                  options={writingToneOptions}
                  fullWidth
                />
              </CommonStyles.Box>

              {/* <CommonStyles.Box
                centered
                sx={{
                  margin: "20px 0",
                }}
              >
                <CommonStyles.Button
                  type="button"
                  disabled={disabledTagGenerate}
                >
                  Tag and Description
                </CommonStyles.Button>
              </CommonStyles.Box> */}

              <Divider />

              <CommonStyles.Box
                sx={{
                  margin: "20px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setOpen((prev) => !prev)}
              >
                <CommonStyles.Typography>Option:</CommonStyles.Typography>

                <CommonStyles.Box>
                  <CommonIcons.More />
                </CommonStyles.Box>
              </CommonStyles.Box>
              <Collapse in={open}>
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
              </Collapse>

              <CommonStyles.Box centered sx={{ margin: "20px 0" }}>
                <CommonStyles.Button
                  type="submit"
                  disabled={disabledGenerateContent}
                  loading={isSubmitting}
                >
                  Generate
                </CommonStyles.Button>
              </CommonStyles.Box>
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

export default SetupOptions;
