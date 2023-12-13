import React from "react";
import CommonStyles from "../../components/CommonStyles";
import DialogCreatePost from "./components/DialogCreatePost";
import ListPost from "./components/ListPost";

const FacebookPost = () => {
  //! State

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "0 80px",
        paddingTop: "50px",
      }}
    >
      <DialogCreatePost />
      <ListPost />
    </CommonStyles.Box>
  );
};

export default FacebookPost;
