import React, { useCallback, useRef, useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useDropzone } from "react-dropzone";
import CommonIcons from "../../../components/CommonIcons";
import { useTheme } from "@emotion/react";
import CanvasDraw from "react-canvas-draw";

const ImageDrop = ({ form, field }) => {
  //! State
  const { name, value } = field;
  const { setFieldValue } = form;
  const theme = useTheme();
  const canvasRef = useRef(null);
  const [canvasHeight, setCanvasHeight] = useState(null);

  //! Function
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const img = new Image();
      const objectURL = URL.createObjectURL(file);

      img.onload = function () {
        setCanvasHeight((this?.height / this?.width) * 500 || 0);
        URL.revokeObjectURL(objectURL);
      };

      img.src = objectURL;
      const fileReader = new FileReader();

      fileReader.onload = async (e) => {
        const { result } = e.target;
        setFieldValue(name, result);
      };

      fileReader.readAsDataURL(file);
    },
    [name, setFieldValue]
  );

  const saveCanvas = () => {
    const data = canvasRef.current.getDataURL();
    console.log("data", data);
  };
  //! Render
  const { getRootProps, getInputProps } = useDropzone({
    accept: ["image/*"],
    onDropAccepted: onDrop,
  });

  console.log("getInputProps", getInputProps);
  return (
    <CommonStyles.Box
      centered
      sx={{
        width: "100%",
        minHeight: "100%",
        borderRadius: "23px",
        backgroundColor: value
          ? "transparent"
          : theme.colors.custom.backgroundSecondary,
        // border: value ? "" : "1px dashed #000",
        boxShadow: value ? "" : "0 5px 10px rgba(0,0,0,0.2)",
        canvas: {
          borderRadius: "10px",
        },
      }}
    >
      <input {...getInputProps()} />
      {value ? (
        <CommonStyles.Box>
          <CanvasDraw
            ref={canvasRef}
            imgSrc={value}
            style={{
              borderRadius: "10px",
            }}
            canvasWidth={500}
            canvasHeight={canvasHeight}
            brushColor="#000"
          />
          <CommonStyles.Button onClick={saveCanvas}>Save</CommonStyles.Button>
        </CommonStyles.Box>
      ) : (
        <CommonStyles.Box
          centered
          sx={{
            height: "100%",
            flexDirection: "column",
            gap: "20px",
            cursor: "pointer",
          }}
          {...getRootProps()}
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

export default ImageDrop;
