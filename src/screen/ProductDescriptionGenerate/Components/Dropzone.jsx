import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";
import { useGet, useSave } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";
import ItemImage from "./ItemImage";
import productRecomendationServices from "../../../services/productRecomendationServices";
import axios from "axios";

const response = {
  image: [
    {
      bbox: [147, 351, 383, 683],
      name: "pants",
      supercategory: "lowerbody",
      attribute_info: {
        silhouette: ["symmetrical", "regular (fit)"],
        length: ["maxi (length)"],
        "opening type": ["fly (opening)"],
        "textile pattern": ["plain (pattern)"],
        pocket: [],
      },
    },
    {
      bbox: [111, 0, 404, 356],
      name: "hoodie",
      supercategory: "upperbody",
      attribute_info: {
        silhouette: ["symmetrical", "regular (fit)", "loose (fit)"],
        length: ["above-the-hip (length)"],
        "textile pattern": ["plain (pattern)"],
        sleeve: ["wrist-length", "dropped-shoulder sleeve"],
        hood: [],
      },
    },
    {
      bbox: [160, 328, 368, 370],
      name: "classic t-shirt",
      supercategory: "upperbody",
      attribute_info: {
        silhouette: ["symmetrical", "regular (fit)"],
        length: ["above-the-hip (length)", "hip (length)"],
        "textile pattern": ["plain (pattern)"],
      },
    },
    {
      bbox: [290, 675, 399, 791],
      name: "shoe",
      supercategory: "legs and feet",
      attribute_info: {},
    },
    {
      bbox: [147, 700, 220, 817],
      name: "shoe",
      supercategory: "legs and feet",
      attribute_info: {},
    },
    {
      bbox: [162, 675, 203, 718],
      name: "sock",
      supercategory: "legs and feet",
      attribute_info: {},
    },
    {
      bbox: [300, 656, 339, 708],
      name: "sock",
      supercategory: "legs and feet",
      attribute_info: {},
    },
  ],
};

const Dropzone = ({ form, field }) => {
  //! State
  const { name, value } = field;
  const { setFieldValue } = form;
  const setValueEditor = useGet(cachedKeys.setValueEditor);
  const save = useSave();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const img = new Image();
      const objectURL = URL.createObjectURL(file);

      img.onload = function () {
        save(cachedKeys.currentSizeSelectedItem, {
          width: this?.width || 0,
          height: this?.height || 0,
        });
        URL.revokeObjectURL(objectURL);
      };

      img.src = objectURL;

      const fileReader = new FileReader();

      fileReader.onload = async (e) => {
        const { result } = e.target;
        setFieldValue(name, result);

        try {
          // const response = await axios(config);
          const imgBase64 = result.split(",")[1];
          const response =
            await productRecomendationServices.extractItemFromImage(imgBase64);

          save(cachedKeys.listItems, response?.data?.infos?.image);
          setValueEditor((prev) => {
            return prev + `<p><img src="${result}" alt="file" /></p>`;
          });
        } catch (error) {
          console.log("err", error);
        }
      };

      fileReader.readAsDataURL(file);
    },
    [name, setFieldValue, setValueEditor, save]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: ["image/*"],
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
