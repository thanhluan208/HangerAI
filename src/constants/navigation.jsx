import CommonIcons from "../components/CommonIcons";

export const userNav = [
  {
    content: "Virtual Dressing Room",
    path: "/virtual-try-on",
    icon: <CommonIcons.Room style={{ fontSize: "1rem" }} />,
  },
  {
    content: "Virtual Photoshoot Studio",
    path: "/virtual-photoshoot-studio",
    icon: <CommonIcons.Studio style={{ fontSize: "1rem" }} />,
  },
  {
    content: "Product Tagging",
    path: "/product-tagging",
    icon: <CommonIcons.Tag style={{ fontSize: "1rem" }} />,
  },
  {
    content: "Product Recommendation",
    path: "/product-recommendation",
    icon: <CommonIcons.Recommend style={{ fontSize: "1rem" }} />,
  },
  {
    content: "Facebook Post",
    path: "/facebook-post",
    icon: <CommonIcons.Facebook startOffset={{ fontSize: "1rem" }} />,
  },
];

export const adminNav = [
  {
    content: "User Management",
    path: "/user-management",
    icon: <CommonIcons.User style={{ fontSize: "1rem" }} />,
  },
];
