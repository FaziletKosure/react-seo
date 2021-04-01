import React from "react";

import Oval from "../assets/Oval.svg";
import ghost from "../assets/ghost.svg";
import packmanleft from "../assets/packman-left.svg";
import packmanright from "../assets/packman-right.svg";
import { PolicyModal } from "../components/PolicyModal";

const Policy = () => {
  return (
    <div className="policy py-5">
      <div className="py-5">Privacy Policy</div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="policy-box">
                <div className="policy-ghost">
                  <img src={ghost} alt="ghost" className="policy-icon" />
                </div>
                <h3>Q. What data do you collect?</h3>
                <h4>We collect browsing history</h4>
                {/* Button to Open the Modal  */}
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#policyModel"
                >
                  Read More
                </button>
              </div>
              {/* MODAL */}
              <PolicyModal
                question="Q. What data do you collect?"
                answer="We collect browsing history"
              />
            </div>
            <div className="col-md-2 col-sm4">
              <div className="policy-circle py-5">
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-18">
              <div className="policy-box">
                <div className="policy-ghost">
                  <img src={ghost} alt="ghost" className="policy-icon" />
                </div>
                <h3>Q. What’s your privacy principles?</h3>
                <h4>Your privacy comes first</h4>
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#policyModel"
                >
                  Read More
                </button>
              </div>
              <PolicyModal
                question="Q. What’s your privacy principles?"
                answer="Your privacy comes first"
              />
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="policy-circle py-5">
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={packmanleft} alt="packmanleft" className="packman" />
              </div>
            </div>
          </div>

          {/* -------------------- 22222222222 -------------- */}

          <div className="row py-5">
            <div className="col-md-6 col-sm-12">
              <div className="left-circle">
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12"></div>
          </div>
          {/* --------------333333333333------------------- */}
          <div className="row py-5">
            <div className="col-md-4 col-sm-12">
              <div className="policy-box ">
                <div className="policy-ghost">
                  <img src={ghost} alt="ghost" className="policy-icon" />
                </div>
                <h3>Q. How is that data being used?</h3>
                <h4>We use it to improve our work</h4>
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#policyModel"
                >
                  Read More
                </button>
              </div>
              <PolicyModal
                question="Q. How is that data being used?"
                answer="We use it to improve our work"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="policy-circle py-5">
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="policy-box">
                <div className="policy-ghost">
                  <img src={ghost} alt="ghost" className="policy-icon" />
                </div>
                <h3>Q. Do you share my data?</h3>
                <h4>We don’t share your data</h4>
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#policyModel"
                >
                  Read More
                </button>
              </div>
              <PolicyModal
                question="Q. Do you share my data?"
                answer="We don’t share your data"
              />
            </div>
          </div>
          {/* -----------4444444444444444--------------- */}
          <div className="row py-5">
            <div className="col-md-8 col-sm-12"></div>
            <div className="col-md-4 col-sm-12">
              <div className="left-circle">
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
              </div>
            </div>
          </div>
          {/* -------------------555555555555555555---------------- */}
          <div className="row py-5">
            <div className="col-md-4 col-sm-12">
              <div className="policy-box">
                <div className="policy-ghost">
                  <img src={ghost} alt="ghost" className="policy-icon" />
                </div>
                <h3>Q. How can I make a complaint?</h3>
                <h4>We are here to help</h4>
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#policyModel"
                >
                  Read More
                </button>
              </div>
              <PolicyModal
                question="Q. How can I make a complaint?"
                answer="We are here to help"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="policy-circle py-5">
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="policy-box">
                <div className="policy-ghost">
                  <img src={ghost} alt="ghost" className="policy-icon" />
                </div>
                <h3>Q. What are my rights?</h3>
                <h4>Simple to exercise your rights</h4>
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#policyModel"
                >
                  Read More
                </button>
              </div>
              <PolicyModal
                question="Q. What are my rights?"
                answer="Simple to exercise your rights"
              />
            </div>
          </div>
          {/* -----------------------666666666666666666666-------------------- */}
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="left-circle">
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
                <div className="left-circle-oval">
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12"></div>
          </div>
          {/* --------------77777777777777777777----------------- */}
          <div className="row py-5">
            <div className="col-md-4 col-sm-12">
              <div className="policy-box">
                <div className="policy-ghost">
                  <img src={ghost} alt="ghost" className="policy-icon" />
                </div>
                <h3>Q. How can I make a complaint?</h3>
                <h4>We are here to help</h4>
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#policyModel"
                >
                  Read More
                </button>
              </div>
              <PolicyModal
                question="Q. How can I make a complaint?"
                answer="We are here to help"
              />
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="policy-packman">
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img
                  src={packmanright}
                  alt="packmanright"
                  className="packman"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
