import React, { useMemo } from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useGet } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";
import { useFormikContext } from "formik";

const ItemImage = ({ src }) => {
  const formikProps = useFormikContext();
  const { values } = formikProps || {};

  const { selectedItem: currentSelectedItem } = values || {};

  const currentSizeSelectedItem = useGet(cachedKeys.currentSizeSelectedItem);

  const maskInfo = useMemo(() => {
    const { bbox: coordinate } = currentSelectedItem || {};

    const currentWidth = document.getElementById("root_image")?.width;
    const currentHeight = document.getElementById("root_image")?.height;
    const { width: rootWidth, height: rootHeight } =
      currentSizeSelectedItem || {};

    if (!coordinate) return null;

    const width = coordinate[2] - coordinate[0];
    const height = coordinate[3] - coordinate[1];
    const top = coordinate[1];
    const left = coordinate[0];

    return {
      width: width * (currentWidth / rootWidth),
      height: height * (currentHeight / rootHeight),
      top: top * (currentHeight / rootHeight),
      left: left * (currentWidth / rootWidth),
      currentWidth,
    };
  }, [currentSelectedItem]);

  return (
    <CommonStyles.Box
      sx={{
        position: "relative",
        lineHeight: 0,
      }}
    >
      <img
        id="root_image"
        src={src}
        alt="item"
        style={{
          borderRadius: "12px",
          width: "100%",
        }}
      />
      <CommonStyles.Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: maskInfo ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0,0)",
          top: 0,
          left: 0,
          borderRadius: "12px",
          transition: "all .5s ease-in",
        }}
      ></CommonStyles.Box>
      {maskInfo && (
        <CommonStyles.Box
          sx={{
            position: "absolute",
            width: maskInfo?.width,
            height: maskInfo?.height,
            top: maskInfo?.top,
            left: maskInfo?.left,
            overflow: "hidden",
            borderRadius: "4px",
            transition: "all .1s ease-in",
          }}
        >
          <img
            src={src}
            alt="item"
            style={{
              width: maskInfo?.currentWidth,
              transform: `translateX(-${maskInfo?.left}px) translateY(-${maskInfo?.top}px)`,
            }}
          />
        </CommonStyles.Box>
      )}
    </CommonStyles.Box>
  );
};

export default ItemImage;
