import CommonIcons from "../components/CommonIcons";

export const nav = [
  {
    title: "Assets",
    listContent: [
      {
        title: "Favorites",
        id: Math.random().toString(),
        path: "assets/favorites",

      },
      {
        title: "All",
        id: Math.random().toString(),
        path: "/assets/all",

      }
    ],
    id: Math.random().toString()
  }
  ,
  {
    title: "Tools",
    listContent: [
      {
        title: "Product Image Chat",
        id: Math.random().toString(),
        path: "product-image-chat",

      },
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
        title: "Virtual Try On (Beta)",
        id: Math.random().toString(),
        path: "virtual-try-on",

      },
      {
        title: "Product Image Editing",
        id: Math.random().toString(),

        path: "product-images-editing",
        children: [
          {
            title: "Background Generator",
            id: Math.random().toString(),

            path: "product-images-editing/background-generator",
          },
          {
            title: "Image Inpainting",
            id: Math.random().toString(),

            path: "product-images-editing/image-inpainting",
          },
          {
            title: "Image Recolor (comming soon)",
            id: Math.random().toString(),

            path: "product-images-editing/image-recolor",
          },
          {
            title: "Magic Eraser (comming soon)",
            id: Math.random().toString(),

            path: "product-images-editing/magic-eraser",
          },
          {
            title: "Upscale Image (comming soon))",
            id: Math.random().toString(),

            path: "product-images-editing/upscale-image",
          },
        ],
      },

      {
        title: "Product Content Writing",
        id: Math.random().toString(),

        path: "product-content-writing",
        children: [
          {
            title: "Product Descriptions",
            id: Math.random().toString(),

            path: "product-content-writing/product-descriptions",
          },
          {
            title: "Image Social Media Marketing",
            id: Math.random().toString(),

            path: "product-content-writing/image-social-media-marketing",
          },
          {
            title: "Image Website/SEO",
            id: Math.random().toString(),

            path: "product-content-writing/image-website-seo",
          },
        ],
      },
      {
        title: "Automatic Tagging",
        id: Math.random().toString(),
        path: "automatic-tagging",

      },
    ],
    id: Math.random().toString(),
  },

];
