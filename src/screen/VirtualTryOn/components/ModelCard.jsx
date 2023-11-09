import React from "react";
import CommonStyles from "../../../components/CommonStyles";

const ModelCard = ({ item }) => {
  //! State

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        width: "250px",
        background: "#fff",
        borderRadius: "12px",
        padding: "6px",
        transition: "all 0.3s ease",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CommonStyles.Box
        centered
        sx={{
          width: "100%",
          height: "350px",
          background: "#ab78e7",
          borderRadius: "10px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        This is image
      </CommonStyles.Box>
      <CommonStyles.Box centered sx={{ marginTop: "20px" }}>
        <CommonStyles.Typography type="boldText20">
          Model {item}
        </CommonStyles.Typography>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default ModelCard;
