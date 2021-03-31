import React from "react";
import muna from "../assets/illust.svg";

const AboutPanel1 = () => {
  return (
    <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-5 discounts-left">
            <div className="discounts-about-left-box">
              <h6>Our mission</h6>
              <h1>Feminist Data broker</h1>
              <div className="discount-btn-div">
                <button>Sign up</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="discount-img" src={muna} alt="muna.io" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPanel1;
