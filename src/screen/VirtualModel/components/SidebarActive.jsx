import CommonStyles from "../../../components/CommonStyles";
import { useTheme } from "@emotion/react";
import React, { useCallback, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import CommonIcons from "../../../components/CommonIcons";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Field, Form, Formik } from "formik";
import CustomFields from "../../../components/CustomFields";
import PerfectScrollBar from "react-perfect-scrollbar";


function TabDescription(props) {
    const { children, value, index, ...other } = props;
    const formikRef = useRef(null)
    const initialValues = React.useMemo(() => {
        return {
            description: "",
        };
    }, []);

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
                        py: 5
                    }}
                >
                    <Formik
                        initialValues={initialValues}
                        validateOnChange
                        validateOnBlur
                        innerRef={formikRef}

                    >
                        <Form>
                            <Field
                                name="description"
                                label="Enter Your description"
                                component={CustomFields.TextField}
                                fullWidth
                                multiline
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        const { submitForm } = formikRef.current;
                                        submitForm()
                                    }
                                }}
                                rows={5}
                                
                            ></Field>
                        </Form>
                    </Formik>
                    <CommonStyles.Box
                        sx={{
                            py: 2
                        }}
                    >
                        <CommonStyles.Typography 
                            fontWeight="600"
                        >
                            Describe the image you want to generate, in ANY language, for example:
                        </CommonStyles.Typography>
                        <CommonStyles.Typography>
                            <ul style={{paddingInlineStart: "25px"}}>
                                <li>A girl wearing a floral sundress walks on the streets of Tokyo</li>
                                <li>A girl wearing a floral sundress walks on the streets of Tokyo</li>
                                <li>A girl wearing a floral sundress walks on the streets of Tokyo</li>
                                <li>A girl wearing a floral sundress walks on the streets of Tokyo</li>
                                <li>A girl wearing a floral sundress walks on the streets of Tokyo</li>
                            </ul>
                        </CommonStyles.Typography>
                        <CommonStyles.Typography 
                            fontWeight="600"
                        >
                            You can also provide extremely detailed descriptions of elements such ascharacters, locations, actions, time, weather, environment, props, atmosphere, etc. , and simultaneously specify the shooting technique, such as “shot with an iPhone, gaze directed at the camera, deep depth of field.“
                        </CommonStyles.Typography>
                    </CommonStyles.Box>
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

const SidebarActive = () => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [imagePreview, setImagePreview] = useState(null);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        console.log("kt file", file);
        const imagePreviewURL = URL.createObjectURL(file);
        console.log("kt, file", imagePreviewURL);
        setImagePreview(imagePreviewURL);

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <CommonStyles.Box
            sx={{
                background: theme.colors.custom.backgroundSecondary,
                width: "100%",
                height: "100%",
                position: "relative"
            }}
        >
            <PerfectScrollBar>
                <CommonStyles.Box
                    sx={{
                        p:3
                    }}
                >
                    <CommonStyles.Box
                    sx={{
                        display: "flex",
                        gap: "30px",
                        width: "100%",

                    }}
                >
                    <CommonStyles.Box
                        sx={{
                            width: "50%"
                        }}
                        className="image-input"
                    >
                        <CommonStyles.Box
                            centered
                            sx={{
                                width: "100%",
                                borderRadius: "23px",
                                border: "1px dashed #7530fe",
                                height: "384px"

                            }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {
                                imagePreview ?
                                    (<img src={imagePreview} alt="" width={`100%`} height={`384px`} style={{
                                        objectFit: "contain"
                                    }} />)
                                    : (<CommonStyles.Box
                                        centered
                                        sx={{
                                            flexDirection: "column",
                                            width: "100%",
                                            padding: "80px 0",
                                            borderRadius: "23px",
                                        }}
                                    >
                                        <CommonIcons.Image fontSize="4rem" />

                                        <CommonStyles.Box>
                                            {"Drag 'n' drop your image here..."}
                                        </CommonStyles.Box>
                                    </CommonStyles.Box>)
                            }

                        </CommonStyles.Box>
                        <CommonStyles.Typography
                            textAlign="center"
                            marginTop="10px"
                        >
                            Original
                        </CommonStyles.Typography>
                    </CommonStyles.Box>
                    <CommonStyles.Box
                        sx={{
                            width: "50%"
                        }}
                        className="image-output"

                    >

                        <CommonStyles.Box
                            sx={{
                                width: "100%",
                                borderRadius: "23px",
                                border: "1px dashed #7530fe",
                                position: "relative",
                                height: "384px"

                            }}
                        >
                            {imagePreview ? (
                                <img src={imagePreview} alt="" width="100%" height={`384px`} style={{
                                    objectFit: "contain"
                                }} />
                            ) : (<></>)}
                            <CommonStyles.Button
                                sx={{
                                    display: "flex",
                                    gap: "10px",
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "0",
                                    left: "0",
                                    width: "fit-content",
                                    margin: "0 auto"
                                }}
                            >
                                <CommonIcons.Edit />Edit
                            </CommonStyles.Button>
                            <CommonStyles.Box
                                sx={{
                                    display: imagePreview ? "none" : "flex",
                                    gap: "10px",
                                    position: "absolute",
                                    top: "40%",
                                    right: "0",
                                    left: "0",
                                    width: "fit-content",
                                    margin: "0 auto",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    px: 5,

                                }}
                            >
                                <CommonIcons.Image />
                                <CommonStyles.Typography
                                    fontSize="16px"
                                >
                                    Edit Area
                                </CommonStyles.Typography>
                                <CommonStyles.Typography
                                    textAlign="center"
                                    fontSize="14px"
                                >
                                    Click to edit areas in the original image that do not require any changes
                                </CommonStyles.Typography>

                            </CommonStyles.Box>
                        </CommonStyles.Box>
                        <CommonStyles.Typography
                            textAlign="center"
                            marginTop="10px"
                        >
                            Edit area
                        </CommonStyles.Typography>
                    </CommonStyles.Box>
                </CommonStyles.Box>
                <CommonStyles.Box
                    className="tabs"
                    sx={{
                        py: 3
                    }}
                >
                    <Tabs value={value} onChange={handleChange} aria-label="tabs">
                        <Tab label="Text Description" {...a11yProps(0)} />
                        <Tab label="Prompt" {...a11yProps(1)} />
                    </Tabs>
                    <TabDescription value={value} index={0} />
                    <TabDescription value={value} index={1} />

                </CommonStyles.Box>
                </CommonStyles.Box>
            </PerfectScrollBar>
            <CommonStyles.Box
                sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    p: 3,                    
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: theme.colors.custom.backgroundSecondary,
                    "z-index": "1"
                }}
            >
                <CommonStyles.Typography>
                    This task will consume <span><CommonIcons.Product/> 40 points</span>
                </CommonStyles.Typography>
                <CommonStyles.Box
                    sx={{
                        display:'flex',
                        gap: "10px"
                    }}
                >
                    <CommonStyles.Button
                        sx={{
                            px:5
                        }}
                    >
                        Generate
                    </CommonStyles.Button>
                    <CommonStyles.Button>
                        <CommonIcons.Setting fontSize={`24px`}/>
                    </CommonStyles.Button>
                </CommonStyles.Box>
            </CommonStyles.Box>
        </CommonStyles.Box>
    );
}

export default SidebarActive;