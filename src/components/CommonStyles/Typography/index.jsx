import TypographyMui from "@mui/material/Typography";
import { useMemo } from "react";

const Typography = (props) => {
  //! State
  const { type = "normal", sx, ...restProps } = props;

  const sxCustomize = useMemo(() => {
    const styles = new Map();

    styles.set("boldText32", {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "28px",
      color: "#000000",
      fontFamily: "GilroyBold",
    });

    styles.set("boldText28", {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "28px",
      color: "#000000",
      fontFamily: "GilroyBold",
    });

    styles.set("boldText24", {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "28px",
      color: "#000000",
      fontFamily: "GilroyBold",
    });

    styles.set("boldText20", {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "28px",
      color: "#000000",
      fontFamily: "GilroyBold",
    });

    styles.set("boldText", {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "28px",
      color: "#000000",
      fontFamily: "GilroyBold",
    });

    styles.set("boldText14", {
      fontSize: "14px",
      fontWeight: 700,
      color: "#000",
      fontFamily: "GilroyBold",
    });

    styles.set("body14", {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#000",
      letterSpacing: "0.5px",
      fontFamily: "GilroyBold",
    });

    styles.set("body18", {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#000",
      letterSpacing: "0.5px",
      fontFamily: "GilroyBold",
    });

    styles.set("body24", {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#000",
      letterSpacing: "0.5px",
      fontFamily: "GilroyBold",
    });

    return styles.get(type);
  }, [type]);

  //! Render
  return (
    <TypographyMui
      sx={{
        ...sxCustomize,
        ...sx,
      }}
      {...restProps}
    >
      {props.children}
    </TypographyMui>
  );
};

export default Typography;
