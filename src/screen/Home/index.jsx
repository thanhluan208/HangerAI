import React from "react"
import CommonStyles from "../../components/CommonStyles"
import SectionCommon from "./Components/SectionCommon"
import { Divider } from "@mui/material"
import Documents from "./Components/Documents"
import useFilter from "../../hooks/useFilter"
import ChatImage from "./Components/Chat/ChatImages"

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
    name: "AI Photoshoots Studio Design",
    subtitle: "Create compelling copy for your next campaign.",
    tools: [
      {
        title: "Virtual Try-on",
        description:
          "Try on clothes online and see how different outfits look on you.",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Upscale Image",
        description:
          "Boost resolution for pixel-perfect close-ups and model shots.",
        tag: ["Indentify"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
        isNew: true,
      },
      {
        title: "Background Generator",
        description:
          "Generate custom backgrounds that complement the product",
        tag: ["Indentify"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
        isNew: true,
      },
      {
        title: "Image Recolor",
        description:
          "Find the perfect shade for your product.",
        tag: ["Indentify"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
        isNew: true,
      },
      {
        title: "Image Inpainting",
        description:
          "Retouch image, remove and/or generate patterns on product.",
        tag: ["Indentify"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
        isNew: true,
      },
      {
        title: "Magic Eraser",
        description:
          "Remove distractions and unwanted objects.",
        tag: ["Indentify"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
        isNew: true,
      },
      
      
    ],
  },
  {
    name: "AI Content Writing",
    subtitle: "Improve your writing and repurpose content easily.",
    tools: [
      {
        title: "AI Product Descriptions",
        description:
          "Automate product descriptions, enrich product catalog.",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isNew: true,
      },
      {
        title: "Product Tagging",
        description:
          "Tame the inventories with smart tags for better shopping experience.",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Website/SEO",
        description:
          "Craft impactful copywriting & keywords for skyrocketing search visibility.",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Communications",
        description:
          "Make compelling emails, memos, and more.",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
      },
      {
        title: "Social Media Marketing",
        description:
          "Transform product images into descriptive Facebook posts, ad copy,..",
        tag: ["Customer support"],
        imgSrc:
          "https://app.hypotenuse.ai/static/media/instagram_new.4e71cb6e.svg",
        isPremium: true,
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
        <ChatImage/>
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
