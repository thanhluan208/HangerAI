import React, { useEffect, useRef, useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useGet } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";

const infos = {
  "item category": "hoodie",
  "attributes informations": {
    silhouette: ["symmetrical", "regular (fit)", "loose (fit)"],
    length: ["above-the-hip (length)"],
    "textile pattern": ["plain (pattern)"],
    sleeve: ["wrist-length", "dropped-shoulder sleeve"],
    hood: [],
  },
  Company: "Miracle Hanger Luan",
};

const TestSocket = () => {
  //! State
  const socket = useGet(cachedKeys.socket);
  const [content, setContent] = useState("");

  //! Function
  const testSocket = () => {
    console.log("infos", socket);
    // socket.emit("switch", {
    //   lang: "en",
    //   task: "advertisement",
    //   tone: "funny",
    //   more_options: {
    //     emoji: true,
    //   },
    // });

    socket.emit("message", "hello world");
  };

  useEffect(() => {
    let generatedContent = "";
    let count = 0;
    let interval;
    console.log("listening to chunk_retrieve");
    socket.on("chunk_retrieve", (data) => {
      console.log("data", data);
      // generatedContent += ` ${data}`;
      // if (!interval) {
      //   console.log("go here");
      //   interval = setInterval(() => {
      //     setContent(generatedContent.slice(0, count));
      //     count++;
      //     if (count > generatedContent.length) {
      //       clearInterval(interval);
      //       interval = null;
      //     }
      //   }, 100);
      // }
    });

    socket.on("switch", (socket) => {
      console.log("connected", socket);
    });

    socket.on("generated content", (data) => {
      console.log("data", data);
    });

    socket.on("connect", (data) => {
      console.log("data", data);
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
