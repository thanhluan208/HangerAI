import { BsThreeDots } from "react-icons/bs";
import CommonStyles from "../../../components/CommonStyles";
import React from "react";
import PerfectScrollBar from "react-perfect-scrollbar";
import { useTheme } from "@emotion/react";

const ListImages = ({listImages}) => {
    const [imageSelected,setImageSelected] = React.useState(0)
    const theme = useTheme()
    return (  
        <CommonStyles.Box
            sx={{
                height: "70%"
            }}
        >
            <PerfectScrollBar style={{ height: "100%", overflow: "unset !important",padding: "0 20px" }}>
            {listImages.map((image,index) => (
                <CommonStyles.Box
                    key={index}
                    sx={{
                        display: "flex",
                        gap: "4px",
                        justifyContent: "space-between",
                        alignItems:"center",
                        p:1,
                        my: 1,
                        borderRadius: "8px",
                        background: index === imageSelected ? theme.colors.custom.backgroundSecondary : "none" ,
                        cursor: "pointer"

                    }}
                    onClick={() => setImageSelected(index)}
                >                    
                    
                    <CommonStyles.Box
                        sx={{
                            display:"flex",
                            alignItems: "center",
                            gap:"10px",
                        }}
                    >
                        <img src={image.image} alt="404" width="40" height="40" style={{borderRadius:"8px"}}  />
                        <CommonStyles.Typography>
                            {image.title}{image.completed === true ? "(Completed)" : ""}
                        </CommonStyles.Typography>      
                    </CommonStyles.Box>
                    <BsThreeDots />
                </CommonStyles.Box>
            ))}
            </PerfectScrollBar>
        </CommonStyles.Box>
    );
}
 
export default ListImages;