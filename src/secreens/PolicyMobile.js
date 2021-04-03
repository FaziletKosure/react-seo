import React, { useState } from "react";

import Oval from "../assets/Oval.svg";
import ghost from "../assets/ghost.svg";
// import packmanleft from "../assets/packman-left.svg";
import packmanright from "../assets/packman-right.svg";
import { PolicyModal } from "../components/PolicyModal";
import Navbar from "../components/Navbar";

const Policy = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  return (
    <>
      <Navbar />
      <div className="policy py-5">
        <div className="py-5">
          <div className="container">
            <div className="py-5 policy-header">
              <h1>Privacy Policy</h1>
              <p>Update date: Sep 2020 </p>
            </div>
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="policy-packman py-5">
                  <img
                    src={packmanright}
                    alt="packmanright"
                    className="packman"
                  />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  {/* <img
                    src={packmanleft}
                    alt="packmanleft"
                    className="packman"
                  /> */}
                  <img src={Oval} alt="Oval" className="oval-img" />
                  {/* <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" /> */}
                </div>
              </div>
            </div>
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
                    onClick={() => {
                      setAnswer("We collect browsing history");
                      setQuestion("Q. What data do you collect?");
                    }}
                  >
                    Read More
                  </button>
                </div>
                {/* MODAL */}
                <PolicyModal question={question} answer={answer} />
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
                    onClick={() => {
                      setAnswer("Your privacy comes first");
                      setQuestion("Q. What’s your privacy principles?");
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} />
              </div>
              <div className="col-md-2 col-sm-4">
                <div className="policy-circle py-5">
                  <img src={Oval} alt="Oval" className="oval-img" />

                  <img src={Oval} alt="Oval" className="oval-img" />

                  <img src={Oval} alt="Oval" className="oval-img" />
                  {/* <img src={Oval} alt="Oval" className="oval-img" />
                <img src={Oval} alt="Oval" className="oval-img" />
                <img src={packmanleft} alt="packmanleft" className="packman" /> */}
                </div>
              </div>
            </div>

            {/* -------------------- 22222222222 -------------- */}

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
                    onClick={() => {
                      setAnswer("We use it to improve our work");
                      setQuestion("Q. How is that data being used?");
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} />
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="policy-circle py-5">
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
                    onClick={() => {
                      setAnswer("We don’t share your data");
                      setQuestion("Q. Do you share my data?");
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} />
              </div>
            </div>
            {/* -----------4444444444444444--------------- */}
            <div className="row ">
              <div className="col-md-4 col-sm-12">
                <div className="policy-circle ">
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
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
                    onClick={() => {
                      setAnswer("We are here to help");
                      setQuestion("Q. How can I make a complaint?");
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} />
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="policy-circle py-5">
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
                    onClick={() => {
                      setAnswer("Simple to exercise your rights");
                      setQuestion("Q. What are my rights?");
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} />
              </div>
            </div>
            {/* -----------------------666666666666666666666-------------------- */}
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="policy-circle">
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
              </div>
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
                    onClick={() => {
                      setAnswer("We are here to help");
                      setQuestion("Q. How can I make a complaint?");
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} />
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="policy-packman py-2">
                  {/* <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" /> */}
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
    </>
  );
};

export default Policy;
