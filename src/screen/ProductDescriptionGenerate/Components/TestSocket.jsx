import React, { useEffect, useRef, useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useGet } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";

const TestSocket = () => {
  //! State
  const socket = useGet(cachedKeys.socket);
  const [content, setContent] = useState("");

  //! Function
  const testSocket = () => {
    socket.emit("generate content", {
      title: "Test title",
      description: "Test description",
    });
  };

  useEffect(() => {
    let generatedContent = "";
    let count = 0;
    let interval;
    socket.on("generate content", (data) => {
      generatedContent += ` ${data}`;
      if (!interval) {
        console.log("go here");
        interval = setInterval(() => {
          setContent(generatedContent.slice(0, count));
          count++;
          if (count > generatedContent.length) {
            clearInterval(interval);
            interval = null;
          }
        }, 100);
      }
    });
  }, [socket]);

  //! Render
  return (
    <CommonStyles.Box centered sx={{ flexDirection: "column" }}>
      <CommonStyles.Button onClick={testSocket}>
        Test socket
      </CommonStyles.Button>
      <CommonStyles.Box>{content}</CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default TestSocket;
