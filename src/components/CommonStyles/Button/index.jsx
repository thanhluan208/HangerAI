import MuiIconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";

const Button = ({ isIconButton, ...props }) => {
  if (isIconButton) {
    return <MuiIconButton {...props}>{props.children}</MuiIconButton>;
  }

  return (
    <LoadingButton variant="contained" {...props}>
      {props.children}
    </LoadingButton>
  );
};

export default Button;
