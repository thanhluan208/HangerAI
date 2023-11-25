import { Divider, Paper } from "@mui/material";
import { FastField, Form, Formik, useFormikContext } from "formik";
import React, { Fragment, useCallback } from "react";
import Dropzone from "./Dropzone";
import CommonStyles from "../../../components/CommonStyles";
import CustomFields from "../../../components/CustomFields";
import { useGet, useSave } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";
import { isEmpty } from "lodash";

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
    save(cachedKeys.currentSelectedItem, item);
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
  const initialValues = React.useMemo(() => {
    return {
      image: "",
      language: "english",
      tone: "Funny",
      template: "advertisement",
    };
  }, []);

  //! Function
  const onSubmit = React.useCallback((values) => {}, []);

  //! Render

  return (
    <Paper
      sx={{
        minHeight: "70vh",
        padding: "0 20px  20px",
      }}
    >
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) => {
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

                <CommonStyles.Button type="button">
                  Tag and Description
                </CommonStyles.Button>
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

              <Divider />

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

              <CommonStyles.Box centered sx={{ margin: "20px 0" }}>
                <CommonStyles.Button>
                  Generate Product Description
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
