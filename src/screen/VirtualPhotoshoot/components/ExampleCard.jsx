import React from "react";
import CommonStyles from "../../../components/CommonStyles";

const ExampleCard = () => {
  return (
    <CommonStyles.Box
      sx={{
        width: "100%",
        aspectRatio: " 16 / 9",
        background:
          'url("https://d3phaj0sisr2ct.cloudfront.net/app/magic-tools/replace-backdrop/indoors/Apartment.jpeg")',
        borderRadius: "10px",
        position: "relative",
        backgroundSize: "cover",
        overflow: "hidden",
        "&:hover": {
          "& .title": {
            bottom: "0%",
          },
        },
      }}
    >
      <CommonStyles.Box
        className="title"
        sx={{
          position: "absolute",
          bottom: "-100%",
          left: "0",
          display: "flex",
          gap: "10px",
          height: "100%",
          overflow: "hidden",
          width: "100%",
          padding: "15px 10px",
          alignItems: "end",
          transition: "all .3s ease-in",
          background: "linear-gradient(0deg, #000000 -13%, transparent 83%)",
        }}
      >
        <CommonStyles.Typography type="boldText14" sx={{ color: "#ffffff" }}>
          Indoors apartment
        </CommonStyles.Typography>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default ExampleCard;
