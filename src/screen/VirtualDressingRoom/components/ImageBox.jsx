import React, { useState, useEffect, useCallback } from "react";
import CommonStyles from "../../../components/CommonStyles";
import PerfectScrollBar from "react-perfect-scrollbar";
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import CommonIcons from "../../../components/CommonIcons";


const listImages = [
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },

    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },

    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name: 'Nynh',
    },
    {
        id: 3,
        path: 'https://bizweb.dktcdn.net/100/409/545/products/z3977215474781-f3fcdedeffd99d3b5b74ae6a54ab8eb4.jpg?v=1671615353703',
        name: 'Nynh',
    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name: 'Nynh',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name: 'Nynh',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name: 'Nynh',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name: 'Nynh',

    },
    {
        id: 1,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name: 'Nynh',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name: 'Nynh',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name: 'Nynh',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name: 'Nynh',
    },
    {
        id: 3,
        path: 'https://bizweb.dktcdn.net/100/409/545/products/z3977215474781-f3fcdedeffd99d3b5b74ae6a54ab8eb4.jpg?v=1671615353703',
        name: 'Nynh',
    },

]
const ImageBox = ({ isActive, imageModal }) => {
    const [listImages, setListImage] = useState([])
    const [data, setData] = useState(null);
    const [newData, setNewData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const filteredImages = allData.filter(image => image.type === isActive);

    const handleClick = (e) => {
        setNewData(e.target.src)
    }
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        setImagePreview(file);

    }, [])
    const mockFunction = (inputURL) => {
        let convertedURL = inputURL.replace(/^https:\/\/localhost:7238:/, 'http://26.105.105.31:8081');
        return convertedURL;
    }
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    // useEffect(() => {
    //     const bodyData = {
    //         human_image: { imageModal },
    //         cloth_image: { newData }
    //     }

    //     const bodyString = JSON.stringify(bodyData);
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Authorization': "Bearer " + localStorage.getItem("token"),
    //     };
    //     if (newData === null) return;
    //     axios.post('https://api.runpod.ai/v2/hkr2lke3wootls/runsync', bodyString, { headers: headers })
    //         .then(response => {
    //             setData(response.output.results);
    //             console.log('Data updated successfully');
    //         })
    //         .catch(error => {
    //             console.error('Error updating data: ', error);
    //         });
    // }, [newData, imageModal]);
    useEffect(() => {
        var jwtCode = 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTcxNTYxMzk0NywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzIzOCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcyMzgvIn0.Ex1Amfm7cljIckMdpbqRH-Cnu4WzP-mr61MxuTlDtrc";
        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + jwtCode,
        };
        const formData= new FormData();
        formData.append('File', imagePreview);
        formData.append('Type', isActive);

        if (imagePreview=== null) return;
        axios.post('http://26.105.105.31:8081/api/Images/Upload', formData,{ headers: headers })
            .then(response => {
                setData(response);
                console.log('Data updated successfully');
            })
            .catch(error => {
                console.error('Error updating data: ', error);
            });
    }, [imagePreview]);



    useEffect(() => {
        axios.get('http://26.105.105.31:8081/api/Images/GetAlls')
            .then(response => {
                setAllData(response.data);
                // console.log('Data updated successfully');
            })
            .catch(error => {
                console.error('Error updating data: ', error);
            });
    }, [imagePreview]);

    return (
        <PerfectScrollBar
            style={{
                maxHeight: "96%",
            }}
        >
            <CommonStyles.Box
                sx={{
                    marginTop: "10px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", // Chia thành 3 cột bằng nhau
                    gap: "5px",
                }}
            >
                <CommonStyles.Box
                    centered
                    sx={{
                        width: "100%",
                        borderRadius: "8px",
                        height: '200px',
                        border: "1px dashed #7530fe",


                    }}
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {
                        imagePreview ? ((<img src={imagePreview} alt="" width="100%" height="200px" style={{
                            objectFit: "contain"
                        }} />))
                            :
                            <CommonStyles.Box
                                centered
                            >
                                <CommonIcons.Image fontSize="4rem" />
                            </CommonStyles.Box>
                    }




                </CommonStyles.Box>
                {filteredImages.map((image, index) => (
                    <div key={index}>
                        <img
                            onClick={(e) => handleClick(e)}
                            src={mockFunction(image.filePath)}
                            alt={`image-${index}`}
                            width='100%'
                            height='200px'
                            style={{ borderRadius: "8px", cursor: "pointer" }} // Khoảng cách dưới của mỗi hình ảnh
                        />
                        <CommonStyles.Typography sx={{ textAlign: " center", fontSize: "12px" }} >{image.id}</CommonStyles.Typography>
                    </div>
                ))}
            </CommonStyles.Box>
        </PerfectScrollBar>
    )
}

export default ImageBox;