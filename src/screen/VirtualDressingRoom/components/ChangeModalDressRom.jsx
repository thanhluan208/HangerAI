import React, { useRef, useEffect, useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import ImageBox from "./ImageBox";
import ModalImage from "./ModalImage";

const ChangeModalDressRoom = (props) => {
    const { setOpen, setClose,setModal } = props;
    const modalRef = useRef();
   

    useEffect(() => {
        const handleClickOutside = (e) => {
           
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setClose(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setClose]);

    return (
        <div
            ref={modalRef}
            className='modalPopup'
            style={{
                display: setOpen ? "block" : "none",
                padding:"4px",
                width: "27%",
                marginTop:"5px",
                marginLeft:"5px",
                height: "95%",
                border: "1px solid #5F42AF",
                borderRadius:"6px",
                backgroundColor: "#ECE4FF",
                position: "absolute",
                zIndex: "1000"
            }}
        >
            <ModalImage isActive={1} setModal={setModal}/>
        </div>
    );
};

export default ChangeModalDressRoom;
