import React from "react";
import muna from "../assets/mockupdesktop.png";

const Customers = () => {
  return (
    <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12  discounts-left mobile-left">
            <div className="discounts-about-left-box">
              <h1>Know your customers by their name</h1>
              <p>
                Muna enables you to build a one-to-one trust relationship with
                your customers and prospects. While growing your business and
                sharing your gain with them.
              </p>

              <div className="discount-btn-div company">
                <button>Join Muna</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="discount-img" src={muna} alt="muna" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
