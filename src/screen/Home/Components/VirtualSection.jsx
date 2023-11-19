import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useTheme } from "@emotion/react";
import CommonIcons from "../../../components/CommonIcons";
import ToolCard from "./ToolCard";

const tools = [
  {
    title: "Virtual Dressing Room",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tag: [
      "Customer support",
      "Intension of purchase",
      "Tag 3",
      "Customer support",
      "Intension of purchase",
    ],
    imgSrc:
      "https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/63bed79bd2865b81b70b4235_visuel%201ere%20de%20couv%20flyer.png",
  },
  {
    title: "Visual Models",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tag: ["Indentify", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    imgSrc:
      "https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/63bed79bd2865b81b70b4235_visuel%201ere%20de%20couv%20flyer.png",
  },
];

const VirtualSection = () => {
  //! State
  const theme = useTheme();
  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        maxWidth: "1200px",
        width: "1500px",
        [theme.breakpoints.down("xl")]: {
          maxWidth: "1000px",
        },
      }}
    >
      <CommonStyles.Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CommonStyles.Box>
          <CommonStyles.Typography type="boldText32">
            Virtual Try-on
          </CommonStyles.Typography>
        </CommonStyles.Box>

        {tools.map((item) => {
          return <ToolCard key={item.id} item={item} />;
        })}
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default VirtualSection;
