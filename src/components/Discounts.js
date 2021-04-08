import React from "react";
import muna from "../assets/mockupmobile.png";

const Discounts = () => {
  return (
    <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12  discounts-left">
            <div className="discounts-about-left-box">
              <h1>Get discounts with your data</h1>
              <p>
                Muna is a data monetisation app where you get the best deals in
                exchange for your data in 3 steps.
              </p>
              <ol>
                <li>Swipe for best deals</li>
                <li>Exchange your data</li>
                <li>Collect your rewards</li>
              </ol>
              <div className="discount-btn-div container">
                <button>Download</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 discount-img-box">
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
