import React from 'react';
import CommonStyles from '../../../../components/CommonStyles';

const SidebarChat = ({ chatHistory }) => {
    return (
        <CommonStyles.Box
            sx={{
                width: "20%"
            }}
        >
            <CommonStyles.Typography
                sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    opacity: ".5",
                    padding:"10px"
                }}
            >
                Recents
            </CommonStyles.Typography>
            <CommonStyles.Box
                sx={{
                    padding :"10px"
                }}
            >
                {chatHistory.map((chat, index) => (
                    <CommonStyles.Button sx={{
                        width: "100%",
                        margin: "5px 0",
                        textAlign: "left",
                        justifyContent: "start",

                    }}>
                        <p style={{margin: "0",display:"-webkit-box","-webkit-box-orient": "vertical","-webkit-line-clamp":"1",overflow: "hidden"}}>
                        {chat.title}
                        </p>
                    </CommonStyles.Button>
                ))}

            </CommonStyles.Box>
        </CommonStyles.Box>
    );
};

export default SidebarChat;
