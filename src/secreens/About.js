import React from "react";
import { Helmet } from "react-helmet";

// import useDocumentTitle from "../components/useDocumentTitle";
import AboutPanel1 from "../components/AboutPanel1";
import AboutPanel2 from "../components/AboutPanel2";
import AboutPanel3 from "../components/AboutPanel3";
import AboutPanel4 from "../components/AboutPanel4";
import AboutCharter from "../components/AboutCharter";

const About = () => {
  // useDocumentTitle("About | Muna.io");
  return (
    <div id="about">
      <Helmet>
        <title>About us | Muna | Belgium</title>
        <meta
          name="description"
          content="Muna.io is a customer-centric direct marketing platform. Consumers get personalised deals and control over their data. "
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Monetise data | Muna | Belgium" />
        <meta
          itemprop="description"
          content="Muna.io is a customer-centric direct marketing platform. Consumers get personalised deals and control over their data."
        />
        <meta
          itemprop="image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />
      </Helmet>
      <AboutPanel1 />
      <AboutPanel2 />
      <AboutCharter />
      <AboutPanel3 />
      <AboutPanel4 />
    </div>
  );
};

export default About;
