import CommonIcons from "../components/CommonIcons";

export const nav = [
  {
    title: "Tools",
    listContent: [
      {
        title: "Virtual Dressing Room",
        id: Math.random().toString(),
        path: "virtual-dressing-room",
        children: [
          {
            title: "Virtual",
            id: Math.random().toString(),
            path: "virtual-dressing-room/virtual",
            children: [
              {
                title: "Virt",
                id: Math.random().toString(),
                path: "virtual-dressing-room/virtual/virt",
              },
            ],
          },
          {
            title: "Dressing",
            id: Math.random().toString(),
            path: "virtual-dressing-room/dressing",
          },
          {
            title: "Room",
            id: Math.random().toString(),
            path: "virtual-dressing-room/room",
          },
        ],
      },
      {
        title: "Virtual Photoshoot Studio",
        id: Math.random().toString(),

        path: "virtual-photoshoot-studio",
        children: [
          {
            title: "Virtual",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/virtual",
          },
          {
            title: "Photoshoot",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/photoshoot",
          },
          {
            title: "Studio",
            id: Math.random().toString(),

            path: "virtual-photoshoot-studio/studio",
          },
        ],
      },
      {
        title: "Product Recommendation",
        id: Math.random().toString(),

        path: "product-recommendation",
      },
      {
        title: "Product Tagging",
        id: Math.random().toString(),

        path: "product-tagging",
        children: [
          {
            title: "Product",
            id: Math.random().toString(),

            path: "product-tagging/product",
          },
          {
            title: "Tagging",
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
