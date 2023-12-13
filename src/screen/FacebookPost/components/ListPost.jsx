import React, { useMemo } from "react";
import CommonStyles from "../../../components/CommonStyles";
import moment from "moment";

const ListPost = () => {
  //! State
  const column = useMemo(() => {
    return [
      {
        id: "id",
        title: "ID",
        width: 80,
      },
      {
        id: "message",
        title: "Content",
        width: "50%",
      },
      {
        id: "created_time",
        title: "Created time",
        renderContent: (props) => {
          return (
            <CommonStyles.Typography>
              {moment(props.created_time).format("DD/MM/YYYY")}
            </CommonStyles.Typography>
          );
        },
      },
      {
        id: "action",
        title: "Action",
        renderContent: (props) => {
          return (
            <CommonStyles.Box sx={{ display: "flex", gap: "10px" }}>
              <CommonStyles.Button variant="outlined" color="primary">
                Edit
              </CommonStyles.Button>
              <CommonStyles.Button variant="outlined" color="error">
                Delete
              </CommonStyles.Button>
            </CommonStyles.Box>
          );
        },
      },
    ];
  }, []);

  //! Function

  //! Render
  return <CommonStyles.Box></CommonStyles.Box>;
};

export default ListPost;
