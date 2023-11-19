import React from "react";
import CommonStyles from "../../components/CommonStyles";
import VirtualSection from "./Components/VirtualSection";

const Home = () => {
  return (
    <CommonStyles.Box centered sx={{ marginTop: "80px" }}>
      <VirtualSection />
    </CommonStyles.Box>
  );
};

export default Home;
