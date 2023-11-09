import React from "react"
import CommonStyles from ".."
import { useTheme } from "@emotion/react"

const Chip = ({ content, active, onClick }) => {
  //! State
  const theme = useTheme()

  return (
    <CommonStyles.Box
      sx={{
        padding: "5px 10px",
        borderRadius: "6px",
        backgroundColor: active ? "#bc82fd" : theme.colors.white,
        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all .15s ease-in",
      }}
      onClick={onClick}
    >
      <CommonStyles.Typography
        type="boldText14"
        sx={active && { color: "#fff" }}
      >
        {content}
      </CommonStyles.Typography>
    </CommonStyles.Box>
  )
}

export default Chip
