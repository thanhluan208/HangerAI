import React from "react";
import CommonStyles from "../../components/CommonStyles";
import SetupOptions from "./Components/SetupOptions";
import PerfectScrollBar from "react-perfect-scrollbar";

const ProductDescriptionGenerate = () => {
  //! State

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "0 30px",
        maxWidth: "1500px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <CommonStyles.Box
        sx={{
          display: "grid",
          gridTemplateColumns: "calc(70% - 10px) calc(30% - 10px)",
          gridGap: "20px",
        }}
      >
        <CommonStyles.Editor
          init={{
            height: "70vh",
          }}
        />
        <PerfectScrollBar style={{ maxHeight: "70vh" }}>
          <SetupOptions />
        </PerfectScrollBar>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default ProductDescriptionGenerate;
