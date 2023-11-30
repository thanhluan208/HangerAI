import React from "react"
import CommonStyles from "../../components/CommonStyles"
import SectionCommon from "./Components/SectionCommon"
import { Divider } from "@mui/material"
import Documents from "./Components/Documents"
import useFilter from "../../hooks/useFilter"

const section = [
  {
    name: "Virtual Try-on",
    subtitle: "Explore our most popular and highly-rated tools",
    tools: [
      {
        title: "Virtual Dressing Room",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Visual Models",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Indentify"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
        isNew: true,
      },
    ],
  },
  {
    name: "Virtual photoshoot studio",
    subtitle: "Improve your writing and repurpose content easily.",
    tools: [
      {
        title: "Photoshoot studio 1",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isNew: true,
      },
      {
        title: "Photoshoot studio 1",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Photoshoot studio 2",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Photoshoot studio 3",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Photoshoot studio 4",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
      },
    ],
  },
  {
    name: "Product tagging",
    subtitle: "Create compelling copy for your next campaign.",
    tools: [
      {
        title: "Product tagging 1",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Product tagging 2",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Indentify"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
        isNew: true,
      },
    ],
  },
]

const Home = () => {
  //! State

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      centered
      sx={{
        margin: "auto",
        marginTop: "80px",
        flexDirection: "column",
        padding: "0 20px",
        maxWidth: "1400px",
      }}
    >
      <CommonStyles.Box
        centered
        sx={{
          gap: "50px",
          flexDirection: "column",
        }}
      >
        {section.map((item) => {
          return (
            <SectionCommon
              tools={item.tools}
              sectionName={item.name}
              subtitle={item.subtitle}
              key={item.name}
            />
          )
        })}
      </CommonStyles.Box>

      <Documents />
    </CommonStyles.Box>
  )
}

export default Home
