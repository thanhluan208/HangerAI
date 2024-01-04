import { Collapse, Divider, Paper } from "@mui/material";
import { FastField, Form, Formik, useFormikContext } from "formik";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
    value: "funny",
  },
  {
    label: "Formal",
    value: "formal",
  },
  {
    label: "Academic",
    value: "academic",
  },
  {
    label: "Luxury",
    value: "luxury",
  },
  {
    label: "Casual",
    value: "casual",
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
    value: "en",
  },
  {
    label: "Vietnamese 🇻🇳",
    value: "vi",
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

const SetupOptions = () => {
  //! State
  const [open, setOpen] = useState(false);
  const [currentTag, setCurrentTag] = useState(null);
  const intervalRef = useRef();
  const socket = useGet(cachedKeys.socket);
  const setValueEditor = useGet(cachedKeys.setValueEditor);
  const formikRef = useRef(null);

  const editorDom = useGet(cachedKeys.editorDom);
  const initialValues = React.useMemo(() => {
    return {
      image: "",
      emoji: false,
      language: "en",
      tone: "funny",
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
      setSubmitting(true);
      try {
        const uuid = Math.random() * 100000000;
        setValueEditor(
          (prev) =>
            prev + `<p id="content_${uuid}" style="white-space:pre-line"></p>`
        );
        let currentTag;
        currentTag = await new Promise((res) => {
          setTimeout(() => {
            res(editorDom.get(`content_${uuid}`));
          }, 1);
        });
        console.log("currentTag", currentTag);
        setCurrentTag(currentTag);

        const switchPayload = productRecomendationModel.switchStatus(values);
        socket.emit("switch", switchPayload);
      } catch (error) {
        console.log("err", error);
        setSubmitting(false);
      }
    },
    [setValueEditor, intervalRef, editorDom]
  );

  useEffect(() => {
    if (currentTag) {
      let generatedContent = "";
      let count = 0;
      let interval;
      const { setSubmitting } = formikRef.current;

      socket.on("chunk_retrieve", (data) => {
        console.log("data", data);
        if (data.toLowerCase().includes("eos")) {
          console.log("end of sentence");
          setSubmitting(false);
          return;
        }
        generatedContent += ` ${data}`;
        if (!interval) {
          console.log("go here");
          interval = setInterval(() => {
            currentTag.innerHTML = generatedContent.slice(0, count);
            count++;
            if (count > generatedContent.length) {
              clearInterval(interval);
              interval = null;
            }
          }, 10);
        }
      });
    }
  }, [currentTag]);

  useEffect(() => {
    socket.on("switch", (data) => {
      const { values, setSubmitting } = formikRef.current;
      try {
        const payload = productRecomendationModel.generateContent(values);
        socket.emit("start_process", payload.infos);
      } catch (error) {
        setSubmitting(false);
      }
    });
  }, []);

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
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values, { setSubmitting });
        }}
        innerRef={formikRef}
        // validationSchema={validationSchema}
        validateOnBlur
        validateOnChange
      >
        {({ values, isSubmitting }) => {
          const { image, selectedItem } = values;
          const disabledGenerateContent = !image || !selectedItem;

          console.log("isSubmitting", isSubmitting);
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

              <CommonStyles.Box
                sx={{ padding: "0 10px", marginBottom: "20px" }}
              >
                <FastField
                  name="emoji"
                  label="Emoji"
                  component={CustomFields.SwitchField}
                />
              </CommonStyles.Box>

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
                  // disabled={disabledGenerateContent}
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
