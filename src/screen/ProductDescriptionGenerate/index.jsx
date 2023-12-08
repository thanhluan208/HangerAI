import React, { useEffect, useState } from "react";
import CommonStyles from "../../components/CommonStyles";
import SetupOptions from "./Components/SetupOptions";
import PerfectScrollBar from "react-perfect-scrollbar";
import ItemsList from "./Components/ItemsList";
import cachedKeys from "../../constants/cachedKeys";
import { useGet, useSave } from "../../stores/useStores";
import TestSocket from "./Components/TestSocket";

const ProductDescriptionGenerate = () => {
  //! State
  const socket = useGet(cachedKeys.socket);

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
          editorKey={cachedKeys.productRecommendEditorKey}
        />
        <PerfectScrollBar style={{ maxHeight: "70vh" }}>
          <SetupOptions />
        </PerfectScrollBar>
      </CommonStyles.Box>

      <ItemsList type="Example" />

      <ItemsList type="Uploaded" />

      <TestSocket />
    </CommonStyles.Box>
  );
};

export default ProductDescriptionGenerate;
