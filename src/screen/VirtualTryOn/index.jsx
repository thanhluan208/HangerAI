import React, { Fragment } from "react";
import CommonStyles from "../../components/CommonStyles";
import CommonIcons from "../../components/CommonIcons";
import ModelsList from "./components/ModelsList";
import { useTheme } from "@emotion/react";

const tabs = [
  {
    title: "Models",
    icon: <CommonIcons.People style={{ fontSize: "32px", color: "#ccc" }} />,
    total: 55,
  },
  {
    title: "Products",
    icon: <CommonIcons.Product style={{ fontSize: "32px", color: "#ccc" }} />,
    total: 24320,
  },
  {
    title: "Categories",
    icon: <CommonIcons.Category style={{ fontSize: "32px", color: "#ccc" }} />,
    total: 25,
  },
  {
    title: "Categories 2",
    total: 26,
  },
  {
    title: "Categories 3",
    total: 234,
  },
];

const VirtualTryOn = () => {
  //! State
  const [currentTab, setCurrentTab] = React.useState("Dashboard");
  const theme = useTheme();

  console.log("theme", theme);

  //! Function
  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "50px 30px",
      }}
    >
      {/* <CommonStyles.Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "30px",
          display: "flex",
          gap: "25px",
        }}
      >
        {["Dashboard", "Studio"].map((tab) => {
          return (
            <CommonStyles.Chip
              content={tab}
              active={currentTab === tab}
              key={tab}
              onClick={() => {
                setCurrentTab(tab)
              }}
            />
          )
        })}
      </CommonStyles.Box> */}

      <CommonStyles.Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 ",
        }}
      >
        <CommonStyles.Box
          centered
          sx={{
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <CommonStyles.Typography
            sx={{
              fontSize: "60px",
              color: "#5c3883",
            }}
          >
            Welcome!
          </CommonStyles.Typography>
          <CommonStyles.Typography
            sx={{
              fontSize: "24px",
              opacity: ".75",
            }}
          >
            Visualize and style products on models.
          </CommonStyles.Typography>
        </CommonStyles.Box>

        <CommonStyles.Box
          centered
          sx={{
            gap: "20px",
          }}
        >
          {["Dashboard", "Studio"].map((elm) => {
            const isActive = currentTab === elm;

            return (
              <CommonStyles.Box
                key={elm}
                sx={{
                  background: isActive ? "#5c3883" : "transparent",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all .3s ease-in-out",
                }}
              >
                <CommonStyles.Button
                  variant="text"
                  sx={{
                    width: "200px",
                    height: "60px",
                    borderRadius: "12px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    setCurrentTab(elm);
                  }}
                >
                  <CommonStyles.Typography
                    type="boldText"
                    sx={{ color: isActive ? "#fff" : theme.colors.custom.text }}
                  >
                    {elm}
                  </CommonStyles.Typography>
                </CommonStyles.Button>
              </CommonStyles.Box>
            );
          })}
          <CommonStyles.Box
            centered
            sx={{
              background: theme.colors.custom.background,
              borderRadius: "8px",
              transition: "all .5s ease-in-out",
            }}
          >
            <CommonStyles.Button
              variant="text"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "8px",
              }}
            >
              <CommonIcons.More
                style={{ fontSize: "30px", color: "#5c3883" }}
              />
            </CommonStyles.Button>
          </CommonStyles.Box>
        </CommonStyles.Box>
      </CommonStyles.Box>

      <CommonStyles.Box
        centered
        sx={{
          padding: "20px 0",
          marginTop: "50px",
        }}
      >
        <CommonStyles.Box
          sx={{
            width: "calc(100% - 60px)",
            borderRadius: "20px",
            backgroundColor: "#5c3883",
            paddingTop: "40px",
            paddingBottom: "60px",
          }}
        >
          <CommonStyles.Box
            centered
            sx={{
              gap: "80px",
              [theme.breakpoints.down("xl")]: {
                gap: "40px",
              },
            }}
          >
            {tabs.map((tab) => {
              return (
                <CommonStyles.Box key={tab.title}>
                  <CommonStyles.Typography
                    type="body18"
                    sx={{ color: "#fff", opacity: ".7" }}
                  >
                    {tab.title}
                  </CommonStyles.Typography>
                  <CommonStyles.Box
                    sx={{
                      position: "relative",
                      minWidth: "150px",
                      paddingLeft: "15px",
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "100%",
                        width: "5px",
                        borderRadius: "5px",
                        backgroundColor: "#f7d46e",
                      },
                    }}
                  >
                    <CommonStyles.Box
                      // type="boldText28"
                      sx={{
                        color: "#f7d46e",
                        lineHeight: "unset",
                        fontSize: "30px",
                        fontWeight: "bold",
                        fontFamily: "SuisseIntl",
                      }}
                    >
                      {tab.total}
                    </CommonStyles.Box>
                  </CommonStyles.Box>
                </CommonStyles.Box>
              );
            })}
          </CommonStyles.Box>
        </CommonStyles.Box>
      </CommonStyles.Box>

      <CommonStyles.Box
        centered
        sx={{
          marginTop: "30px",
        }}
      >
        <CommonStyles.Typography type="boldText24">
          Top 10 models
        </CommonStyles.Typography>
      </CommonStyles.Box>

      <ModelsList />
    </CommonStyles.Box>
  );
};

export default VirtualTryOn;
