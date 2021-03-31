import React from "react";
import useDocumentTitle from "../components/useDocumentTitle";
import AboutPanel1 from "../components/AboutPanel1";
import AboutPanel2 from "../components/AboutPanel2";
import AboutPanel3 from "../components/AboutPanel3";
import AboutPanel4 from "../components/AboutPanel4";
import AboutCharter from "../components/AboutCharter";

const About = () => {
  useDocumentTitle("About | Muna.io");
  return (
    <>
      <AboutPanel1 />
      <AboutPanel2 />
      <AboutCharter />
      <AboutPanel3 />
      <AboutPanel4 />
    </>
  );
};

export default About;
