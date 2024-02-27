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
        title: "Virtual Model",
        id: Math.random().toString(),
        path: "virtual-model",

      },
      {
        title: "Virtual Try On (Coming)",
        id: Math.random().toString(),
        path: "virtual-try-on",

      },
      {
        title: "Image Editing",
        id: Math.random().toString(),

        path: "image-editing",
        children: [
          {
            title: "Background Generator",
            id: Math.random().toString(),

            path: "image-editing/background-generator",
          },
          {
            title: "Image Inpainting",
            id: Math.random().toString(),

            path: "image-editing/image-inpainting",
          },
          {
            title: "Image Recolor (Coming)",
            id: Math.random().toString(),

            path: "image-editing/image-recolor",
          },
          {
            title: "Magic Eraser (Coming)",
            id: Math.random().toString(),

            path: "image-editing/magic-eraser",
          },
          {
            title: "Upscale Image (Coming)",
            id: Math.random().toString(),

            path: "image-editing/upscale-image",
          },
        ],
      },

      {
        title: "Image Content Writing",
        id: Math.random().toString(),

        path: "image-content-writing",
        children: [
          {
            title: "Image Product Descriptions",
            id: Math.random().toString(),

            path: "image-content-writing/product-descriptions",
          },
          {
            title: "Social Media Marketing",
            id: Math.random().toString(),

            path: "image-content-writing/social-media-marketing",
          },
          {
            title: "Website/SEO",
            id: Math.random().toString(),

            path: "image-content-writing/website-seo",
          },
        ],
      },
      {
        title: "Product Tagging",
        id: Math.random().toString(),
        path: "product-tagging",

      },
    ],
    id: Math.random().toString(),
  },
  
];
