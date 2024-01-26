import React from "react"
import Box from "../Box"

const BrandLogo = () => {
  return (
    <Box
      centered
      sx={{
        cursor: "pointer",
      }}
    >
      <img
        width="180"
        sizes="(max-width: 479px) 100vw, (max-width: 991px) 200px, (max-width: 1439px) 14vw, 200px"
        src="/src/assets/Logo/logo.jpg"
        alt=""
        className="logo-image"
      />
    </Box>
  )
}

export default BrandLogo
