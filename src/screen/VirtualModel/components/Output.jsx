import CommonStyles from "../../../components/CommonStyles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from "react";
import SidebarPage from "./SidebarPage";
import PerfectScrollBar from "react-perfect-scrollbar";
import Modal from '@mui/material/Modal';
import { useTheme } from "@emotion/react";
import CommonIcons from "../../../components/CommonIcons";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    display: "flex",
    width: "60vw",
};

function CustomTabPanel(props) {
    const { handleOpen, images, children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <CommonStyles.Box
                    sx={{
                        pt: 3,
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)", // Chia thành 3 cột bằng nhau
                        gap: "10px",
                    }}
                >
                    {images.map((image, index) => (
                        <CommonStyles.Box
                            sx={{
                                width: "100%"
                            }}
                            onClick={() => handleOpen(image)}
                        >
                            <img key={index} src={image} alt="" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
                        </CommonStyles.Box>
                    ))}
                </CommonStyles.Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
    };
}


const Output = () => {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [imageSelected, setImageSelected] = React.useState("");
    const theme = useTheme();
    const handleOpen = (image) => {
        console.log("image" + image);
        setImageSelected(image)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const savedImages = [
        "https://ai-global-image.weshop.com/fd3c9b7b-e71f-4a86-b377-7d73226e5fcb_816x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/1b1ebc8e-1f1e-4b96-8de2-afdca7a1d991_768x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/8fbfbe1b-0e28-489c-be10-52dd2927799c_600x792.jpg_preview.webp",
        "https://ai-global-image.weshop.com/1b1ebc8e-1f1e-4b96-8de2-afdca7a1d991_768x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/8fbfbe1b-0e28-489c-be10-52dd2927799c_600x792.jpg_preview.webp",
        "https://ai-global-image.weshop.com/fd3c9b7b-e71f-4a86-b377-7d73226e5fcb_816x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/fd3c9b7b-e71f-4a86-b377-7d73226e5fcb_816x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/fd3c9b7b-e71f-4a86-b377-7d73226e5fcb_816x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/fd3c9b7b-e71f-4a86-b377-7d73226e5fcb_816x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/fd3c9b7b-e71f-4a86-b377-7d73226e5fcb_816x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/fd3c9b7b-e71f-4a86-b377-7d73226e5fcb_816x1024.jpg_preview.webp",


    ];

    const bestExampleImages = [
        "https://ai-global-image.weshop.com/8fbfbe1b-0e28-489c-be10-52dd2927799c_600x792.jpg_preview.webp",
        "https://ai-global-image.weshop.com/fbb08140-5e18-4d6a-a1b3-c0834c446e73_768x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/1b1ebc8e-1f1e-4b96-8de2-afdca7a1d991_768x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/8fbfbe1b-0e28-489c-be10-52dd2927799c_600x792.jpg_preview.webp",
        "https://ai-global-image.weshop.com/1b1ebc8e-1f1e-4b96-8de2-afdca7a1d991_768x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/1b1ebc8e-1f1e-4b96-8de2-afdca7a1d991_768x1024.jpg_preview.webp",
        "https://ai-global-image.weshop.com/8fbfbe1b-0e28-489c-be10-52dd2927799c_600x792.jpg_preview.webp",
        "https://ai-global-image.weshop.com/1b1ebc8e-1f1e-4b96-8de2-afdca7a1d991_768x1024.jpg_preview.webp",
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [show, setShow] = useState(false);
    console.log("show" + show);
    const handleShow = (data) => {
        setShow(data)
    }
    return (
        <CommonStyles.Box
            sx={{
                display: "flex",
                overflow: "hidden"
            }}
        >

            <CommonStyles.Box
                sx={{
                    width: "30%",
                }}
            >
                <SidebarPage handleShow={handleShow} />

            </CommonStyles.Box>
            <CommonStyles.Box
                sx={{
                    ml: 3,
                    width: "70%",
                    display: show === true ? "none" : 'block',
                    height: "calc(-120px + 100vh)"
                }}
            >
                <PerfectScrollBar>
                    <CommonStyles.Box>
                        <Tabs value={value} onChange={handleChange} aria-label="tabs">
                            <Tab label="Saved Images" {...a11yProps(0)} />
                            <Tab label="Best Example" {...a11yProps(1)} />
                        </Tabs>
                    </CommonStyles.Box>

                    <CustomTabPanel value={value} index={0} images={savedImages}>
                        Saved Images
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1} images={bestExampleImages} handleOpen={handleOpen}>
                        Best Example
                    </CustomTabPanel>
                </PerfectScrollBar>
            </CommonStyles.Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CommonStyles.Box sx={style}>
                    <img src={imageSelected} alt="404" width={`50%`} height={`100%`} style={{ objectFit: "contain" }} />
                    <img src={imageSelected} alt="404" width={`50%`} height={`100%`} style={{ objectFit: "contain" }} />
                    <CommonStyles.Box
                        sx={{
                            p: 3,
                            borderRadius: "20px",
                            bgcolor: theme.colors.custom.background,
                            position: 'absolute',
                            bottom: "10px",
                            right: "10px",
                            boxShadow: 24,
                            display: "flex",
                            gap: "100px"
                        }}
                    >
                        <CommonStyles.Box>
                            <CommonStyles.Typography
                                fontSize="18px"
                            >
                                Text Description
                            </CommonStyles.Typography>
                            <CommonStyles.Typography>外景优雅风格</CommonStyles.Typography>
                        </CommonStyles.Box>
                        <CommonStyles.Button
                            sx={{
                                height: "fit-content"
                            }}
                        >
                            <CommonIcons.Copy /> Copy
                        </CommonStyles.Button>
                    </CommonStyles.Box>
                </CommonStyles.Box>
            </Modal>
        </CommonStyles.Box>

    );
}

export default Output;