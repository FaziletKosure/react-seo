import React from "react";
import muna from "../assets/mockupmobile.png";

const Discounts = () => {
  return (
    <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12  discounts-left">
            <div className="discounts-about-left-box">
              <h1>Get discounts with your data</h1>
              <p>
                Muna.io is a data monetisation platform, where you get the best
                deals in exchange for your data
              </p>
              <ol>
                <li>Swipe for best deals</li>
                <li>Accept data exchange offers</li>
                <li>Share data and collect your rewards</li>
              </ol>
              <div className="discount-btn-div">
                <button>Download</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 discount-img-box">
            <img
              className="discount-img"
              loading="lazy"
              src={muna}
              alt="muna.io"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
