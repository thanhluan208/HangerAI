import MuiBox from "@mui/material/Box"
import React from "react"

const Box = ({ centered, children, ...otherProps }) => {
  //! State
  const style = React.useMemo(() => {
    if (centered) {
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    }
    return {}
  }, [centered])

  //! Function

  //! Render
  return (
    <MuiBox
      {...otherProps}
      sx={{ transition: "all .5s ease", ...style, ...otherProps.sx }}
    >
      {children}
    </MuiBox>
  )
}

export default Box
