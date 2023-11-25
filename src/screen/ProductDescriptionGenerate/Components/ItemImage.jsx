import React, { useMemo } from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useGet } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";

const ItemImage = ({ src }) => {
  const currentSelectedItem = useGet(cachedKeys.currentSelectedItem);

  const maskInfo = useMemo(() => {
    const { coordinate } = currentSelectedItem || {};
    const rootWidth = document.getElementById("root_image")?.width;

    console.log("rootWidth", rootWidth);

    if (!coordinate) return null;

    const width = coordinate[1].x - coordinate[0].x;
    const height = coordinate[1].y - coordinate[0].y;
    const top = coordinate[0].y;
    const left = coordinate[0].x;

    return {
      width,
      height,
      top,
      left,
      rootWidth,
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
            borderRadius: "10px",
            transition: "all .1s ease-in",
          }}
        >
          <img
            src={src}
            alt="item"
            style={{
              width: maskInfo?.rootWidth,
              transform: `translateX(-${maskInfo?.left}px) translateY(-${maskInfo?.top}px)`,
            }}
          />
        </CommonStyles.Box>
      )}
    </CommonStyles.Box>
  );
};

export default ItemImage;
