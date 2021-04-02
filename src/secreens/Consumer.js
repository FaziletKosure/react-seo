import React from "react";
import Discounts from "../components/Discounts";
import Benefits from "../components/Benefits";
import DataConsumer from "../components/DataConsumer";
// import useDocumentTitle from "../components/useDocumentTitle";
import { Helmet } from "react-helmet";

const Consumer = () => {
  // useDocumentTitle("Munetise data | Muna | Belgium");
  return (
    <div id="consumer">
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Monetise data | Muna | Belgium</title>
        <meta
          name="description"
          content="You can what you want with your data.Sell it, share it or delete it. Muna.io is a customer-centric direct marketing platform. Consumers get personalised deals and control over their data. "
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Monetise data | Muna | Belgium" />
        <meta
          itemprop="description"
          content="You can what you want with your data.Sell it, share it or delete it. Muna.io is a customer-centric direct marketing platform. Consumers get personalised deals and control over their data."
        />
        <meta
          itemprop="image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.muna.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Monetise data | Muna | Belgium" />
        <meta
          property="og:description"
          content="You can what you want with your data.Sell it, share it or delete it. Muna.io is a customer-centric direct marketing platform. Consumers get personalised deals and control over their data. "
        />
        <meta
          property="og:image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monetise data | Muna | Belgium" />
        <meta
          name="twitter:description"
          content="You can what you want with your data.Sell it, share it or delete it. Muna.io is a customer-centric direct marketing platform. Consumers get personalised deals and control over their data. "
        />
        <meta
          name="twitter:image"
          content="http://static.wixstatic.com/media/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png/v1/fill/w_1206,h_902,al_c/66c2f5_d216e103469a4625b69b570d3c6b6da3~mv2.png"
        />
      </Helmet>
      <Discounts />
      <Benefits />
      <DataConsumer />
    </div>
  );
};

export default Consumer;
