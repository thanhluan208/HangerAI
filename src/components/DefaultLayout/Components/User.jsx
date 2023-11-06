import React from "react";
import CommonStyles from "../../CommonStyles";

const User = () => {
  //! State

  //! Function

  //! Render
  return (
    <CommonStyles.Button variant="text" sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        position: 'absolute',
        padding: '5px 10px',
        top: '10px',
        right: '15px',
        cursor: 'pointer',
        textTransform: 'none',
    }}>
      <CommonStyles.Avatar src="https://lh3.googleusercontent.com/ogw/AKPQZvyASBUcpQgfbJFtlWST2R3jgHPG-CdGKfsicVCI=s32-c-mo" />
      <CommonStyles.Typography type="boldText">Thanh Luan</CommonStyles.Typography>
    </CommonStyles.Button>
  );
};

export default User;
