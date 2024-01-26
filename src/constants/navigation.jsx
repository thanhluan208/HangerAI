import CommonIcons from "../components/CommonIcons";

export const nav = [
  {
    title: "Tools",
    listContent: [
      {
        title: "Virtual Dressing Room",
        id: Math.random().toString(),
        path: "virtual-dressing-room",
        
      },
      {
        title: "AI Photoshoots Studio Design",
        id: Math.random().toString(),

        path: "virtual-photoshoot-studio",
        children: [
          {
            title: "Virtual Try-on",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/virtual",
          },
          {
            title: "Upscale Image",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/photoshoot",
          },
          {
            title: "Background Generator",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/studio",
          },
          {
            title: "Image Recolor",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/studio",
          },
          {
            title: "Image Inpainting",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/studio",
          },
          {
            title: "Magic Eraser",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/studio",
          },
        ],
      },
      
      {
        title: "AI Content Writing",
        id: Math.random().toString(),

        path: "product-tagging",
        children: [
          {
            title: "AI Product Descriptions",
            id: Math.random().toString(),

            path: "product-recommendation",
          },
          {
            title: "Product Tagging",
            id: Math.random().toString(),

            path: "product-tagging/tagging",
          },
          {
            title: "Website/SEO",
            id: Math.random().toString(),

            path: "product-tagging/tagging",
          },
          {
            title: "Communications",
            id: Math.random().toString(),

            path: "product-tagging/tagging",
          },
          {
            title: "Social Media Marketing",
            id: Math.random().toString(),

            path: "product-tagging/tagging",
          },

        ],
      },
    ],
    id: Math.random().toString(),
  },
  {
    title: "Workspace",
    id: Math.random().toString(),
  },
  {
    title: "Account",
    id: Math.random().toString(),
  },
  {
    title: "Help",
    id: Math.random().toString(),
  },
];
