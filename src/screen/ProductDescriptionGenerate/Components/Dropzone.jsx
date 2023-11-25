import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";
import { useGet, useSave } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";
import ItemImage from "./ItemImage";

const dataItems = [
  {
    name: "Hoodie",
    coordinate: [
      {
        x: 60,
        y: 0,
      },
      {
        x: 190,
        y: 162,
      },
    ],
  },
  {
    name: "Pants",
    coordinate: [
      {
        x: 76,
        y: 170,
      },
      {
        x: 172,
        y: 320,
      },
    ],
  },
  {
    name: "Left Shoe",
    coordinate: [
      {
        x: 71,
        y: 331,
      },
      {
        x: 101,
        y: 380,
      },
    ],
  },
  {
    name: "Right Shoe",
    coordinate: [
      {
        x: 134,
        y: 317,
      },
      {
        x: 189,
        y: 367,
      },
    ],
  },
];

const Dropzone = ({ form, field }) => {
  //! State
  const { name, value } = field;
  const { setFieldValue } = form;
  const setValueEditor = useGet(cachedKeys.setValueEditor);
  const save = useSave();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        const { result } = e.target;
        setFieldValue(name, result);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        save(cachedKeys.listItems, dataItems);
        setValueEditor((prev) => {
          return prev + `<p><img src="${result}" alt="file" /></p>`;
        });
      };

      fileReader.readAsDataURL(file);
    },
    [name, setFieldValue, setValueEditor, save]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: [".png", ".jpeg", ".jpg"],
    onDropAccepted: onDrop,
  });

  //! Function

  //! Render

  return (
    <CommonStyles.Box
      centered
      sx={{
        width: "90%",
        aspectRatio: "16/9",
        borderRadius: "23px",
        backgroundColor: value ? "transparent" : "#fafcfe26",
        border: value ? "" : "1px dashed #000",
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {value ? (
        <ItemImage src={value} />
      ) : (
        <CommonStyles.Box
          centered
          sx={{
            height: "100%",
            flexDirection: "column",
            gap: "20px",
            cursor: "pointer",
          }}
        >
          <CommonStyles.Box
            centered
            sx={{
              flexDirection: "column",
              width: "80%",
              padding: "80px 0",
              borderRadius: "23px",
            }}
          >
            <CommonIcons.Image fontSize="4rem" />

            <CommonStyles.Box>
              {"Drag 'n' drop your image here..."}
            </CommonStyles.Box>
          </CommonStyles.Box>
        </CommonStyles.Box>
      )}
    </CommonStyles.Box>
  );
};

export default Dropzone;
