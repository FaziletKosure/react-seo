import React from "react";
import noun_Quote1 from "../assets/noun_Quote_1.svg";
import noun_Quote2 from "../assets/noun_Quote_2.svg";

const AboutPanel3 = () => {
  return (
    <div className="dataconsumer py-5 container company">
      <h3>Company culture</h3>

      <h1>
        <sup>
          <img src={noun_Quote1} alt="noun_Quote1" />
        </sup>
        JCompany culture We all come from different cultures with different
        stories. We embrace our differences and believe that transparency
        creates trust and success.
        <sub>
          <img src={noun_Quote2} alt="noun_Quote2" />
        </sub>
      </h1>
    </div>
  );
};

export default AboutPanel3;
