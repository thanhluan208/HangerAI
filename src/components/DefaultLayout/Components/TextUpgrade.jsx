import React from "react";
import CommonStyles from "../../CommonStyles";
import { Divider } from "@mui/material";

const TextUpgrade = ({ items }) => { // Destructuring props here
    if (!items) return null;
    return (

        <CommonStyles.Box
            sx={{
                display: "flex",
                marginTop:"20px",
                borderRadius: "6px",
                marginLeft: "15px",
                border: "1px solid rgb(214, 214, 214)",
                padding: "16px 16px 16px",
                flexDirection: "column",
                '@media(max-width: 767px)':{
                    width:"94%",
                    marginBottom:"6px",
                },
                '@media(min-width: 768px)':{
                    width:"33%",
                    
                },
                '@media(min-width: 1025px)':{
                    width:"27%",
                    
                }
            }}
        >
            <CommonStyles.Typography
                sx={{
                    color: "#2A2C3A",
                    fontSize: "14px"
                }}
            >
                {items.packages}
            </CommonStyles.Typography>
            <CommonStyles.Typography
                sx={{
                    color: "#2A2C3A",
                    fontSize: "40px"
                }}
            >
                ${items.price}
            </CommonStyles.Typography>
            <CommonStyles.Typography
                sx={{
                    color: "#6904E9",
                    fontSize: "16px"
                }}
            >
                {items.benefit}
            </CommonStyles.Typography>
            <div style={{ height: "1px", backgroundColor: "rgb(214, 214, 214)", width: "calc(100% + 32px)", marginLeft: "-16px" }}></div>
            <ul style={{ color: "#000000", fontSize: "14px", fontFamily:"Roboto,Helvetica,Arial,sans-serif", padding: "0 0 0 20px" ,maxHeight:"300px", minHeight:"300px", overflow: "auto"}}>
                {items.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>

            <CommonStyles.Button>
                Upgrade to {items.packages}
            </CommonStyles.Button>

        </CommonStyles.Box >
    )
}

export default TextUpgrade;
