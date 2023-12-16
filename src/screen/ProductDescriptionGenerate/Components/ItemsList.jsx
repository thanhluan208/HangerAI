import React from "react";
import CommonIcons from "../../../components/CommonIcons";
import { Collapse, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import CommonStyles from "../../../components/CommonStyles";

const ItemsList = ({ type = "Example" }) => {
  //! State
  const theme = useTheme();
  const [openCollapse, setOpenCollapse] = React.useState(true);
  const data = React.useMemo(() => {
    if (type === "Example") {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    return [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
  }, []);

  //! Function

  //! Render
  return (
    <Paper
      sx={{
        marginTop: "25px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CommonStyles.Box
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setOpenCollapse((prev) => !prev)}
      >
        <CommonStyles.Typography type="boldText24">
          {type} item
        </CommonStyles.Typography>

        <CommonIcons.Up
          style={{
            transform: openCollapse ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all .15s ease-in",
          }}
        />
      </CommonStyles.Box>

      <Collapse in={openCollapse}>
        <CommonStyles.Box
          sx={{
            marginTop: "20px",
            padding: "0 10px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gridGap: "10px",
          }}
        >
          {data.map((item) => {
            return (
              <CommonStyles.Box
                key={item}
                centered
                sx={{
                  borderRadius: "8px",
                  border: ".5px solid #ccc",
                  minHeight: "80px",
                  padding: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                Example item: {item}
              </CommonStyles.Box>
            );
          })}
        </CommonStyles.Box>
      </Collapse>
    </Paper>
  );
};

export default ItemsList;
