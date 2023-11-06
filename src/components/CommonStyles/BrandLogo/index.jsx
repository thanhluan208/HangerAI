import React from "react";
import Box from "../Box";

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
        src="https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02.png"
        srcset="https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-500.png 500w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-800.png 800w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-1080.png 1080w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02-p-1600.png 1600w, https://assets-global.website-files.com/625465cda3c9d02b8aadcec3/62546600cf41d9ae2da5c6ad_logo%20Veesual-02.png 2513w"
        alt=""
        class="logo-image"
      />
    </Box>
  );
};

export default BrandLogo;
