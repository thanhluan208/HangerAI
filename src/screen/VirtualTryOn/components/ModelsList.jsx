import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";

const modelLists = [
  {
    name: "Emily",
    image:
      "https://i.pinimg.com/originals/f3/aa/3e/f3aa3e9f655bc2777ae7bf64560c31f1.jpg",
    height: 170,
    weight: 50,
    bust: 80,
    waist: 60,
    hip: 90,
    hairColor: "Brown",
  },
  {
    name: "Melissa",
    image:
      "https://i.pinimg.com/originals/6f/2d/a2/6f2da214b8ecbb9e95980b71aaf6854d.jpg",
    height: 180,
    weight: 60,
    bust: 90,
    waist: 70,
    hip: 100,
    hairColor: "Brown",
  },
  {
    name: "Charlotte",
    image:
      "https://i.pinimg.com/originals/fb/35/a9/fb35a93cb47063ee8c74008925270917.jpg",
    height: 175,
    weight: 55,
    bust: 85,
    waist: 65,
    hip: 95,
    hairColor: "Brown",
  },
  {
    name: "Ciara",
    image:
      "https://i.pinimg.com/564x/1f/39/ef/1f39eff872bab70cdc5a0281a37c3930.jpg",
    height: 175,
    weight: 55,
    bust: 85,
    waist: 65,
    hip: 95,
    hairColor: "Brown",
  },
  {
    name: "Samantha",
    image:
      "https://i.pinimg.com/originals/e5/98/5e/e5985efac51eb4cdad2c0705ce2105c0.jpg",
    height: 175,
    weight: 55,
    bust: 85,
    waist: 65,
    hip: 95,
    hairColor: "Brown",
  },
];

const ModelsList = () => {
  const theme = useTheme();
  return (
    <CommonStyles.Box
      sx={{
        position: "relative",
        marginTop: "50px",
        "&:before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "85px",
          background: theme.colors.custom.background,
          left: "0",
          top: "-43px",
          zIndex: "2",
          borderRadius: "50%",
          transition: "all .5s ease-in-out",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "85px",
          background: theme.colors.custom.background,
          left: "0",
          bottom: "-40px",
          zIndex: "2",
          borderRadius: "50%",
          transition: "all .5s ease-in-out",
        },
      }}
    >
      <PerfectScrollbar
        style={{
          maxWidth: "100vw",
        }}
      >
        <CommonStyles.Box
          sx={{
            display: "flex",
            cursor: "pointer",
          }}
        >
          {[...modelLists, ...modelLists, ...modelLists].map((model) => {
            return (
              <CommonStyles.Box key={model.name} sx={{}}>
                <CommonStyles.Box
                  sx={{
                    width: "300px",
                    height: "450px",
                    backgroundImage: `url(${model.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    "&:hover": {
                      "& .model-info": {
                        height: "100%",
                        opacity: "1",
                      },
                    },
                  }}
                >
                  <CommonStyles.Box
                    className="model-info"
                    sx={{
                      position: "absolute",
                      bottom: "0%",
                      opacity: "0",
                      left: "0",
                      width: "100%",
                      height: "0%",
                      background:
                        "linear-gradient(0deg, #000000 8%, transparent 85%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "0 15px 65px 15px",
                      gap: "15px",
                      color: "#fff",
                      transition: "all .3s ease",
                    }}
                  >
                    <CommonStyles.Typography
                      type="boldText20"
                      sx={{ color: "#fff" }}
                    >
                      {model.name}
                    </CommonStyles.Typography>
                    <CommonStyles.Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "50% 50%",
                        gridGap: "10px",
                      }}
                    >
                      <CommonStyles.Typography
                        type="body12"
                        sx={{
                          color: "#ffffff9c",
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                        }}
                      >
                        Height:{" "}
                        <CommonStyles.Typography
                          sx={{ color: "#f7d46e", fontWeight: "700" }}
                        >
                          {model.height}
                        </CommonStyles.Typography>
                      </CommonStyles.Typography>

                      <CommonStyles.Typography
                        type="body12"
                        sx={{
                          color: "#ffffff9c",
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                        }}
                      >
                        Weight:{" "}
                        <CommonStyles.Typography
                          sx={{ color: "#f7d46e", fontWeight: "700" }}
                        >
                          {model.weight}
                        </CommonStyles.Typography>
                      </CommonStyles.Typography>

                      <CommonStyles.Typography
                        type="body12"
                        sx={{
                          color: "#ffffff9c",
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                        }}
                      >
                        Hip:{" "}
                        <CommonStyles.Typography
                          sx={{ color: "#f7d46e", fontWeight: "700" }}
                        >
                          {model.hip}
                        </CommonStyles.Typography>
                      </CommonStyles.Typography>

                      <CommonStyles.Typography
                        type="body12"
                        sx={{
                          color: "#ffffff9c",
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                        }}
                      >
                        Waist:{" "}
                        <CommonStyles.Typography
                          sx={{ color: "#f7d46e", fontWeight: "700" }}
                        >
                          {model.waist}
                        </CommonStyles.Typography>
                      </CommonStyles.Typography>

                      <CommonStyles.Typography
                        type="body12"
                        sx={{
                          color: "#ffffff9c",
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                        }}
                      >
                        Bust:{" "}
                        <CommonStyles.Typography
                          sx={{ color: "#f7d46e", fontWeight: "700" }}
                        >
                          {model.bust}
                        </CommonStyles.Typography>
                      </CommonStyles.Typography>
                    </CommonStyles.Box>
                  </CommonStyles.Box>
                </CommonStyles.Box>
                {/* <img src={model.image} alt="" style={{ width: "300px" }} /> */}
              </CommonStyles.Box>
            );
          })}
        </CommonStyles.Box>
      </PerfectScrollbar>
    </CommonStyles.Box>
  );
};

export default ModelsList;
