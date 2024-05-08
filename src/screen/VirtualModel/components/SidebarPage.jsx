import { IoIosAdd, IoMdAdd } from "react-icons/io";
import CommonStyles from "../../../components/CommonStyles";
import ListImages from "./ListImages";
import { MdArrowRight } from "react-icons/md";
import SidebarActive from "./SidebarActive";
import CommonIcons from "../../../components/CommonIcons";
import React from "react";
import { useTheme } from "@emotion/react";

const listImages = [
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: true,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: true,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },
    {
        image: "https://ai-global-image.weshop.com/51023952-0922-41f3-af46-0c646d028dae_800x1067.jpg_1024x1024.jpeg",
        title: "Task-6092870",
        completed: false,
    },

]


const SidebarPage = ({handleShow}) => {
    const theme = useTheme()
    const [openSideBarActive,setOpenSideBarActive] = React.useState(false);
    const handleCloseSidebar = () => {
        setOpenSideBarActive(false)
        handleShow(false)
    }
    const handleOpenSidebar = () => {
        setOpenSideBarActive(true)
        handleShow(true)

    }
    const handleReverse = () => {
        handleShow(!openSideBarActive)
        setOpenSideBarActive(prev => !prev)
    }

    return (
        <CommonStyles.Box
            sx={{
                borderRight: "1px solid #ccc",
                width: "100%",
                position: "sticky",
                top: "0",
                left: "0",
                display: "flex",
            }}
        >
            <CommonStyles.Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "calc(-120px + 100vh)",
                    overflow: "hidden",
                    width:"100%"
                }}
            >
                <CommonStyles.Box
                    sx={{
                        p: 3,
                        height: "30%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px"
                    }}
                >

                    <CommonStyles.Typography
                        sx={{
                            fontSize: "18px",
                        }}
                    >
                        Photos
                    </CommonStyles.Typography>
                    <CommonStyles.Typography
                        sx={{
                            fontSize: "12px",
                            opacity: ".5"
                        }}
                    >
                        Showcase clothing with a variety of models that aligns with your brand’s aesthetic.
                    </CommonStyles.Typography>
                    <CommonStyles.Button
                        sx={{
                            display: 'flex',
                            gap: "10px",
                            padding: "12px 16px"

                        }}
                        onClick= {handleOpenSidebar}
                    >
                        <IoMdAdd />
                        New task
                    </CommonStyles.Button>

                </CommonStyles.Box>
                <ListImages listImages={listImages} />
            </CommonStyles.Box>
            <CommonStyles.Box
                sx={{
                    position: "absolute",
                    "z-index": "2",
                    left: "100%",
                    width: "200%",
                    height: "calc(-120px + 100vh)",
                    display: "flex",
                    alignItems: "center"

                }}
            >
                <CommonStyles.Box
                    sx={{
                        position: "absolute",
                        background: "rgba(0,0,0,.45)",
                        width: "100vw",
                        height: "calc(-120px + 100vh)",
                        "z-index": "-1",
                        display: openSideBarActive === true ? "block" : "none",

                    }}
                    onClick={handleCloseSidebar}
                ></CommonStyles.Box>

                <CommonStyles.Box
                    sx={{
                        height: "100%",
                        display: openSideBarActive === true ? "block" : "none",
                        width: "100%",
                        transition: "display 10s ease-in-out"

                    }}
                >
                     <SidebarActive/>
                </CommonStyles.Box>
                <CommonStyles.Box
                    sx={{
                        background:theme.colors.custom.textPrimary,
                        py: 4,
                        borderRadius: "0 25px 25px 0",

                    }}
                    onClick={handleReverse}
                >
                    {openSideBarActive === true && (<CommonIcons.LeftArrow  color="#FFF" cursor={`pointer`}/>)}
                    {openSideBarActive === false && (<CommonIcons.RightArrow  color="#FFF" cursor={`pointer`}/>)}
                </CommonStyles.Box>
                

            </CommonStyles.Box>
        </CommonStyles.Box>

    );
}

export default SidebarPage;