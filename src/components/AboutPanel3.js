import React from "react";
import noun_Quote1 from "../assets/noun_Quote_1.svg";
import noun_Quote2 from "../assets/noun_Quote_2.svg";

const AboutPanel3 = () => {
  return (
    <div className="dataconsumer py-5 container company aboutpanel3">
      <h3>Company culture</h3>
      <div className="flex-culture">
        <aside className="left-quote">
          <img
            className="panel3-quote"
            loading="lazy"
            src={noun_Quote1}
            alt="noun_Quote1"
          />
        </aside>
        <h1 className="flex-width">
          We all come from different cultures with different stories. We embrace
          our differences and believe that transparency creates trust and
          success.
        </h1>

        <aside className="right-quote">
          <img
            className="panel3-quote"
            loading="lazy"
            src={noun_Quote2}
            alt="noun_Quote2"
          />
        </aside>
      </div>
    </div>
  );
};

export default AboutPanel3;
