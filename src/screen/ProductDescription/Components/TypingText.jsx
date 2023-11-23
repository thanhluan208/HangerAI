import React from "react";
import CommonStyles from "../../../components/CommonStyles";

const speed = 50;

const TypingText = ({ content }) => {
  //! State
  const [text, setText] = React.useState("");
  const intervalRef = React.useRef(null);

  //! Function
  React.useEffect(() => {
    let i = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setText(content.charAt(0));
    }

    const typing = () => {
      if (i < content.length) {
        setText((text) => text + content.charAt(i));
        i++;
      }
    };

    intervalRef.current = setInterval(typing, speed);
  }, [content]);

  //! Render
  return <CommonStyles.Typography>{text}</CommonStyles.Typography>;
};

export default TypingText;
