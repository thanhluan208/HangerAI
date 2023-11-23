import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import CommonIcons from "../../../components/CommonIcons";

const ToolCard = ({ item }) => {
  //! State
  const { tag, title, description, imgSrc } = item;

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        marginTop: "40px",
        padding: "0 20px",
        display: "flex",
      }}
    >
      <CommonStyles.Box
        sx={{
          display: "grid",
          gridGap: "40px",
          gridTemplateColumns: "30% calc(70% - 40px)",
          padding: "10px 20px 30px",
          borderRadius: "12px",
          background: "#fff",
          minWidth: "1000px",
        }}
      >
        <CommonStyles.Box
          sx={{
            position: "relative",
            height: "227px",
          }}
        >
          <CommonStyles.Box
            sx={{
              background: "#5c3883",
              borderRadius: "8px",
              zIndex: 1000,
              position: "relative",
              height: "227px",
              overflow: "hidden",
            }}
          >
            <img
              src={imgSrc || "https://via.placeholder.com/250"}
              style={{
                width: "250px",
                height: "227px",
              }}
            />
          </CommonStyles.Box>
          <CommonStyles.Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              bottom: "-10px",
              right: "-10px",
              backgroundColor: "#ccc",
              borderRadius: "8px",
            }}
          ></CommonStyles.Box>
        </CommonStyles.Box>
        <CommonStyles.Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CommonStyles.Box>
            <CommonStyles.Typography type="boldText24">
              {title}
            </CommonStyles.Typography>
            <CommonStyles.Typography
              type="body18"
              sx={{
                maxWidth: "400px",
                marginTop: "15px",
                fontFamily: "Gilroy",
                opacity: ".6",
              }}
            >
              {description}
            </CommonStyles.Typography>
          </CommonStyles.Box>
          <CommonStyles.Box
            centered
            sx={{ justifyContent: "space-between", alignItems: "end" }}
          >
            <CommonStyles.Box
              centered
              sx={{
                gap: "10px",
                maxWidth: "600px",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {!!tag &&
                tag.map((item) => {
                  return (
                    <CommonStyles.Box
                      key={item}
                      centered
                      sx={{
                        padding: "5px 10px",
                        borderRadius: "8px",
                        backgroundColor: "#6310bd",
                        color: "#fff",
                      }}
                    >
                      {item}
                    </CommonStyles.Box>
                  );
                })}
            </CommonStyles.Box>

            <CommonStyles.Box>
              <CommonStyles.Button variant="text">
                <CommonIcons.Next />
              </CommonStyles.Button>
            </CommonStyles.Box>
          </CommonStyles.Box>
        </CommonStyles.Box>
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default ToolCard;
