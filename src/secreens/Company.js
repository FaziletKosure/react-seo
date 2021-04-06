import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Customers from "../components/Customers";
import CompanyBenefits from "../components/CompanyBenefits";
import CompanyChange from "../components/CompanyChange";

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="company">
      <Helmet>
        <title>Company | Muna | Belgium</title>
        <meta
          name="description"
          content="Muna enables you to build a one-to-one trust relatioship with your customers and prospects.While growing your business and sharing your gain with them."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Company | Muna | Belgium" />
        <meta
          itemprop="description"
          content="Muna enables you to build a one-to-one trust relatioship with your customers and prospects.While growing your business and sharing your gain with them."
        />
        <meta
          itemprop="image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />
      </Helmet>
      <Customers />
      <CompanyBenefits />
      <CompanyChange />
    </div>
  );
};

export default Company;
