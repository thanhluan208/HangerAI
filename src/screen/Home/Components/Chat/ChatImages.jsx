import { FastField, Field, Form, Formik } from "formik";
import CommonStyles from "../../../../components/CommonStyles";
import { useTheme } from "@emotion/react";
import CustomFields from "../../../../components/CustomFields";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Message from "./Message";
import BrandLogo from "../../../../components/CommonStyles/BrandLogo";
import { MdClose } from "react-icons/md";
import PerfectScrollBar from "react-perfect-scrollbar";
import SidebarChat from "./SidebarChat";

const ChatImage = () => {
    // State
    const [imagePreview, setImagePreview] = React.useState(null);
    const [messages, setMessages] = React.useState([]);
    const [chatHistory, setChatHistory] = React.useState([
        { title: 'Hello!' },
        { title: 'Hi there! How can I help you?' },
    ]);
    const theme = useTheme()
    const initialValues = React.useMemo(() => {
        return {
            message: "",
        };
    }, []);
    const formikRef = useRef(null)
    const [scrollEl, setScrollEl] = React.useState();

    // function 
    const handleFileChange = (event) => {
        const selectedFile = event.currentTarget.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setImagePreview(null);
        }


    };
    const handleRemoveImage = () => {
        setImagePreview(null)
    }
    const scrollbarRef = useRef(null);
    const handleSendMessage = async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true)
        setMessages(prev => [...prev, { type: "sender", message: values.message }])
        resetForm()
        setSubmitting(false)
        

    }
    useLayoutEffect(() => {
        scrollEl?.scrollTo(0,scrollEl.scrollHeight);
    },[messages])
    const validate = (values) => {
        const errors = {};

        if (!values.message) {
            errors.message = 'Please enter a message.';
        }

        return errors;
    };



    return (
        <>
            <CommonStyles.Box
                sx={{
                    padding: "20px",
                    borderRadius: "10px",
                    width: "95%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: theme.colors.custom.backgroundSecondary,

                }}
            >



                <CommonStyles.Box

                    sx={{
                        width: "100%",
                        display: "flex"
                    }}
                >

                    <SidebarChat chatHistory={chatHistory} />
                    <CommonStyles.Box
                        sx={{
                            margin: "0 20px",
                            borderRadius: "10px",
                            width: "70%",
                        }}
                    >
                        <CommonStyles.Box
                            sx={{
                                width: "100%"
                            }}
                        >

                            <CommonStyles.Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: "600"
                                }}
                            >
                                ChatAI
                            </CommonStyles.Typography>
                        </CommonStyles.Box>
                        <PerfectScrollBar containerRef={(ref) => setScrollEl(ref)} style={{ height: "unset" }}>
                            <CommonStyles.Box

                                sx={{
                                    padding: "20px",
                                    height: "50vh",
                                    margin: "20px 0"
                                }}
                            >
                                {messages.length === 0 && (<CommonStyles.Box

                                    sx={{
                                    }}>
                                    <BrandLogo />
                                    <CommonStyles.Typography
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            padding: "20px"
                                        }}
                                    >
                                        How can I help you today ?
                                    </CommonStyles.Typography>

                                </CommonStyles.Box>)}
                                {messages.map((message, index) => (
                                    <div key={index}>
                                        <Message type="sender" message={message.message} />
                                        <Message type="receiver" message={message.message} />
                                    </div>

                                ))}

                            </CommonStyles.Box>
                        </PerfectScrollBar>
                        <Formik
                            initialValues={initialValues}
                            validate={validate}
                            validateOnChange
                            validateOnBlur
                            innerRef={formikRef}
                            onSubmit={(values, { resetForm, setSubmitting }) => {
                                handleSendMessage(values, { resetForm, setSubmitting })
                            }}
                        >
                            <Form>
                                {imagePreview === null && (<CommonStyles.Box
                                    centered
                                    sx={{
                                        margin: "20px 0"
                                    }}
                                >
                                    <CommonStyles.Button>
                                        <label htmlFor="fileImage" >Upload Image</label>
                                    </CommonStyles.Button>
                                    <Field id="fileImage" name="file" type="file" hidden onChange={handleFileChange} />
                                </CommonStyles.Box>)}
                                {imagePreview && (<CommonStyles.Box
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        padding: "20px 0 "
                                    }}
                                >
                                    {imagePreview && (
                                        <CommonStyles.Box sx={{
                                            position: "relative"
                                        }}>
                                            <CommonStyles.Box
                                                centered
                                                sx={{
                                                    position: "absolute",
                                                    top: "-5px",
                                                    right: "-5px",
                                                    padding: 0,
                                                    background: "#6904e9",
                                                    color: "#FFF",
                                                    borderRadius: "50%",
                                                    cursor: "pointer"

                                                }}
                                                onClick={handleRemoveImage}
                                            >
                                                <MdClose />
                                            </CommonStyles.Box>
                                            <img src={imagePreview} alt="Preview" width="100px" height="100px" />
                                        </CommonStyles.Box>
                                    )}
                                </CommonStyles.Box>)}
                                <CommonStyles.Box
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center"
                                    }}
                                >
                                    <Field
                                        name="message"
                                        label="Enter Your Message"
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
                                        disabled={imagePreview === null ? true : false}
                                        onBlur={() => {
                                            const { setFieldError } = formikRef.current;
                                            setFieldError("message", null)
                                        }}

                                    ></Field>


                                    <CommonStyles.Button
                                        type="submit"
                                        disabled={imagePreview === null ? true : false}
                                    >
                                        Send
                                    </CommonStyles.Button>
                                </CommonStyles.Box>
                            </Form>
                        </Formik>
                    </CommonStyles.Box>
                </CommonStyles.Box>
            </CommonStyles.Box>
        </>
    );
}

export default ChatImage;