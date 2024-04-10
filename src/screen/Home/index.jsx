import React from "react"
import CommonStyles from "../../components/CommonStyles"
import SectionCommon from "./Components/SectionCommon"
import { Divider } from "@mui/material"
import Documents from "./Components/Documents"
import useFilter from "../../hooks/useFilter"
import ChatImage from "../ProductImageChat"

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
        imgSrc: "virtualmodel.png",
        href: "virtual-dressing-room",

      },
      {
        title: "Visual Models",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tag: ["Indentify"],
        imgSrc:
          "virtualmodel.png",
        isPremium: true,
        isNew: true,
        href: "virtual-model",
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
          "virtualmodel.png",
        href: "virtual-try-on",
      },
      {
        title: "Upscale Image",
        description:
          "Boost resolution for pixel-perfect close-ups and model shots.",
        tag: ["Indentify"],
        imgSrc:
          "virtualmodel.png",
        isPremium: true,
        isNew: true,
        href: "image-editing/upscale-image",
      },
      {
        title: "Background Generator",
        description:
          "Generate custom backgrounds that complement the product",
        tag: ["Indentify"],
        imgSrc:
          "virtualmodel.png",
        isPremium: true,
        isNew: true,
        href: "image-editing/background-generator",
      },
      {
        title: "Image Recolor",
        description:
          "Find the perfect shade for your product.",
        tag: ["Indentify"],
        imgSrc:
          "virtualmodel.png",
        isPremium: true,
        isNew: true,
        href: "image-editing/image-recolor",
      },
      {
        title: "Image Inpainting",
        description:
          "Retouch image, remove and/or generate patterns on product.",
        tag: ["Indentify"],
        imgSrc:
          "virtualmodel.png",
        isPremium: true,
        isNew: true,
        href: "image-editing/image-inpainting",
      },
      {
        title: "Magic Eraser",
        description:
          "Remove distractions and unwanted objects.",
        tag: ["Indentify"],
        imgSrc:
          "virtualmodel.png",
        isPremium: true,
        isNew: true,
        href: "image-editing/magic-eraser",
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
          "ProductDescription.png",
        isNew: true,
        href: "image-content-writing/product-descriptions",
      },
      {
        title: "Product Tagging",
        description:
          "Tame the inventories with smart tags for better shopping experience.",
        tag: ["Customer support"],
        imgSrc:
          "AutomaticTagging.png",
        href: "product-tagging",
      },
      {
        title: "Website/SEO",
        description:
          "Craft impactful copywriting & keywords for skyrocketing search visibility.",
        tag: ["Customer support"],
        imgSrc:
          "virtualmodel.png",
        href: "image-content-writing/website-seo",
      },
      {
        title: "Communications",
        description:
          "Make compelling emails, memos, and more.",
        tag: ["Customer support"],
        imgSrc:
          "virtualmodel.png",
        href: "virtual-try-on",
      },
      {
        title: "Social Media Marketing",
        description:
          "Transform product images into descriptive Facebook posts, ad copy,..",
        tag: ["Customer support"],
        imgSrc:
          "virtualmodel.png",
        isPremium: true,
        href: "image-content-writing/social-media-marketing",
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
        <CommonStyles.Box 
          sx={{width:"100%", paddingLeft:"20px" }}
        >
          <CommonStyles.Typography
            variant="h5"
            component="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Home
          </CommonStyles.Typography>
        </CommonStyles.Box>
        <CommonStyles.Box
          sx={{
            textAlign: "center",
            padding: "60px 20px",
            borderRadius: "10px",
            width: "97%",
            minHeight: '332px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            background: `url('virtualmodel.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",

          }}
        >
          <CommonStyles.Typography
            variant="h4"
            component="h4"
            sx={{
              fontWeight: "bold",
            }}>
            Bring your image to life with Gen‑2
          </CommonStyles.Typography>
          <CommonStyles.Typography type="boldText">
            Generate video using text, image, or both
          </CommonStyles.Typography>
          <CommonStyles.ChipTwo
            content="Start Generating"
            activeBackground="#E52C69"
            borderRadius="24px !important"
            active
          />

        </CommonStyles.Box>
        {/* <Banner /> */}
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
    </CommonStyles.Box>
  )
}

export default Home
