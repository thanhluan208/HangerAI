import { BiBorderRadius } from "react-icons/bi";
import CommonStyles from "../../components/CommonStyles";
import { useTheme } from "@emotion/react";
import { CircularProgress, TextField, colors } from "@mui/material";
import { GrFormSearch, GrRefresh } from "react-icons/gr";
import { MdOutlineReplay } from "react-icons/md";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { IoSearchOutline, IoShirtSharp } from "react-icons/io5";
import { GiLargeDress } from "react-icons/gi";
import { TbJacket } from "react-icons/tb";
import { GiTrousers } from "react-icons/gi";
import { PiSneakerLight } from "react-icons/pi";
import { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import ImageBox from "./components/ImageBox";
import ChangeModalDressRoom from "./components/ChangeModalDressRom";
import { GrUserFemale } from "react-icons/gr";


const tool = [
    {
        title: 'Tops',
        icon: IoShirtSharp,
    },
    {
        title: 'Bottom',
        icon: GiTrousers,
    },
    {
        title: 'Dresses',
        icon: GiLargeDress,
    },
    {
        title: 'Outerwear',
        icon: TbJacket,
    },
    {
        title: 'Footwear',
        icon: PiSneakerLight,
    },
    {
        title: 'Model',
        icon: GrUserFemale,
    }

]


const VirtualDressingRoom = () => {
    const theme = useTheme();
    const [isActive, setIsActive] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openChangeModal, setOpenChangeModal] = useState(false)
    const [imageModal, setImageModal] = useState("https://icdn.24h.com.vn/upload/2-2021/images/2021-06-10/Phat-hien-baaca0eb0e33dc4f9d45910b8c86623f0144cea0fe0c2093c5-1623311033-423-width1000height1499.jpg")
    const handleClick = (index) => {
        setIsActive(index);
        setOpenModal(true);
    }
    const handleClickOpen = () => {
        setOpenModal(true),
            setIsActive(0);
    }
    const handleClickClose = () => {
        setOpenModal(false);
        setIsActive(null);
    }


    return (<>

        <CommonStyles.Box
            centered
            sx={{
                width: "100%",
                height: "100%",
            }}
        >
            <CommonStyles.Box
                sx={{
                    width: "95%",
                    display: "flex",
                    height: "100%",
                    background: theme.colors.custom.backgroundSecondary,
                    borderRadius: "6px",

                }}
            >
                <CommonStyles.Box
                    sx={{ width: openModal === true ? '53%' : '92%', transition: "width 0.5s ease-in-out", position: "relative", }}
                >
                    <CommonStyles.Box
                        sx={{
                            paddingTop: "5px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingX: "10px"
                        }}
                    >

                        <CommonStyles.Button
                            sx={{
                                background: "none",
                                color: "#5F42AF",
                                border: "1px solid #5F42AF",
                                fontSize: "12px",
                                fontWeight: 600,
                                padding: "2px 6px",
                                borderRadius: "10px",
                                "&:hover": {
                                    color: "#FFFFFF",
                                },
                            }}
                            onClick={() => { setOpenModal(true), setIsActive(5) }}
                        >
                            Change Modal
                        </CommonStyles.Button>
                        <MdOutlineReplay size="20px" style={{ transform: "rotate(290deg)", cursor: "pointer" }} />
                    </CommonStyles.Box>
                    {/* <ChangeModalDressRoom setOpen = {openChangeModal} setClose= {setOpenChangeModal} setModal={setImageModal}/> */}
                    <CommonStyles.Box
                        centered
                        sx={{ height: "94%", position: 'relative' }}
                    >
                        <CircularProgress style={{ position: "absolute", top: "40%", left: "47%", opacity: 0.5 }} size={100} color="inherit" thickness={6} />
                        <img src={imageModal} width="350rem" height="98%" style={{ borderRadius: "6px", opacity: 0.4 }} />
                    </CommonStyles.Box>
                </CommonStyles.Box>
                <CommonStyles.Box
                    sx={{
                        width: openModal === true ? "47%" : "8%",
                        height: "100%",
                        transition: "width 0.5s ease-in-out",
                        borderRadius: "6px",
                    }}
                >
                    <CommonStyles.Box
                        centered
                        sx={{
                            width: "100%",
                            height: "6%",
                            backgroundColor: "#492F74",
                            borderRadius: "1rem 6px 0px 0px",

                        }}

                    >
                        <CommonStyles.Box
                            centered
                            sx={{
                                width: openModal === true ? "20%" : "100%",
                            }}
                        >
                            {openModal === true ? <BsArrowsAngleContract style={{ cursor: "pointer" }} onClick={handleClickClose} color="white" /> : <BsArrowsAngleExpand style={{ cursor: "pointer", }} color="white" onClick={handleClickOpen} />}
                        </CommonStyles.Box>
                        <CommonStyles.Typography
                            sx={{
                                display: openModal === true ? "block" : "none",
                                width: "80%",
                                textAlign: "center",
                                color: "#FFFFFF",

                            }}
                        >
                            Virtual Dressing Room
                        </CommonStyles.Typography>
                    </CommonStyles.Box>

                    <CommonStyles.Box
                        sx={{
                            width: '100%',
                            height: "94%",
                            display: 'flex',

                        }}

                    >
                        <CommonStyles.Box
                            sx={{ width: openModal === true ? '20%' : '100%', height: "100%", borderRadius: openModal === true ? "0px 0px 0px 1rem" : "0px 0px 1rem 1rem", backgroundColor: "#DACAFC", transition: "width 0.5s ease-in-out" }}
                        >
                            {
                                tool.map((item, index) => (
                                    <CommonStyles.Box
                                        key={index}
                                        centered
                                        sx={{
                                            width: "100%",
                                            padding: "4px 0px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => handleClick(index)}
                                    >
                                        <CommonStyles.Box
                                            centered
                                            sx={{
                                                width: "4.5rem",
                                                height: "4.5rem",
                                                padding: "0.5rem 0",
                                                backgroundColor: isActive === index ? "#C2ACF2" : "",
                                                borderRadius: "50%",
                                                "&:hover": {
                                                    backgroundColor: "#C2ACF2",
                                                }
                                            }}
                                        >
                                            <CommonStyles.Box
                                                centered
                                            >
                                                <item.icon size="3rem" />
                                            </CommonStyles.Box>
                                            {/* <CommonStyles.Typography
                                                sx={{
                                                    textAlign: "center",
                                                    fontSize: "12px",
                                                    fontWeight: "500"
                                                }}
                                            >
                                                {item.title}
                                            </CommonStyles.Typography> */}
                                        </CommonStyles.Box>
                                    </CommonStyles.Box>
                                ))
                            }
                        </CommonStyles.Box>
                        <CommonStyles.Box
                            sx={{
                                display: openModal === true ? "block" : "none",
                                padding: "15px",
                                width: "80%",
                                height: "100%",
                                backgroundColor: "#ECE4FF",
                                transition: "width 0.5s ease-in-out",
                                borderRadius: "0px 0px 6px 0px"


                            }}
                        >
                            <CommonStyles.Box
                                centered
                                sx={{
                                    padding: "5px 10px",
                                    background: theme.colors.custom.background,
                                    justifyContent: "space-between",
                                    borderRadius: "4px",
                                }}
                            >
                                <TextField
                                    sx={{
                                        width: "83%",
                                        input: {
                                            padding: "0 4px !important",
                                            fontSize: "12px",
                                        },
                                        fieldset: {
                                            border: "none !important",
                                        },
                                    }}
                                    placeholder="Search Anything..."
                                />
                                <FaSlidersH style={{ cursor: "pointer" }} />
                                <CommonStyles.Box centered
                                    sx={{
                                        backgroundColor: "#C2ACF2",
                                        padding: "4px",
                                        borderRadius: "4px",
                                        marginLeft: "3px",
                                        cursor: "pointer"
                                    }}
                                >
                                    <IoSearchOutline color="white" />
                                </CommonStyles.Box>
                            </CommonStyles.Box>

                            <ImageBox isActive={isActive} imageModal={imageModal} setImageModal={setImageModal} />
                        </CommonStyles.Box>
                    </CommonStyles.Box>

                </CommonStyles.Box>

            </CommonStyles.Box>

        </CommonStyles.Box>

    </>);
}

export default VirtualDressingRoom;