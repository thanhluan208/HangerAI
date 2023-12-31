import MuiIconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";

const Button = ({ isIconButton, sx, ...props }) => {
  if (isIconButton) {
    return <MuiIconButton {...props}>{props.children}</MuiIconButton>;
  }

  return (
    <LoadingButton
      variant="contained"
      sx={{
        textTransform: "none",
        ...sx,
      }}
      {...props}
    >
      {props.children}
    </LoadingButton>
  );
};

export default Button;
