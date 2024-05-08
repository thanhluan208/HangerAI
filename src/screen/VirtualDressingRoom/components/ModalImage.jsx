import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import PerfectScrollBar from "react-perfect-scrollbar";


const listImages = [
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },

    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },

    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
        name:'Nynh',
    },
    {
        id: 3,
        path: 'https://bizweb.dktcdn.net/100/409/545/products/z3977215474781-f3fcdedeffd99d3b5b74ae6a54ab8eb4.jpg?v=1671615353703',
        name:'Nynh',
    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name:'Nynh',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name:'Nynh',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name:'Nynh',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
        name:'Nynh',

    },
    {
        id: 1,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name:'Nynh',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name:'Nynh',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name:'Nynh',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
        name:'Nynh',
    },
    {
        id: 3,
        path: 'https://bizweb.dktcdn.net/100/409/545/products/z3977215474781-f3fcdedeffd99d3b5b74ae6a54ab8eb4.jpg?v=1671615353703',
        name:'Nynh',
    },

]
const ModalImage = ({ isActive , setModal}) => {
    const filteredImages = listImages.filter(image => image.id === isActive);
    const handleClick =(e)=>{
        setModal(e.target.src)
        console.log('kt image',e.target.src );
    }

    return (
        <PerfectScrollBar
            style={{
                maxHeight: "100%",             
            }}
        >
            <CommonStyles.Box
                sx={{
                    marginTop: "10px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // Chia thành 3 cột bằng nhau
                    gap: "5px",
                }}
            >
                {filteredImages.map((image, index) => (
                    <div>
                    <img
                        onClick={(e)=>handleClick(e)}
                        key={index}
                        src={image.path}
                        alt={`image-${index}`}
                        width='100%'
                        height='200px'
                        style={{ borderRadius: "8px" ,cursor: "pointer"}} // Khoảng cách dưới của mỗi hình ảnh
                    />
                    <CommonStyles.Typography sx={{textAlign:" center", fontSize:"12px"}} >{image.name}</CommonStyles.Typography>
                    </div>
                ))}
            </CommonStyles.Box>
        </PerfectScrollBar>
    )
}

export default ModalImage;