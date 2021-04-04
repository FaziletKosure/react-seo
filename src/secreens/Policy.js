import React, { useState } from "react";

import Oval from "../assets/Oval.svg";
import ghost from "../assets/ghost.svg";
import packmanleft from "../assets/packman-left.svg";
import packmanright from "../assets/packman-right.svg";
import { PolicyModal } from "../components/PolicyModal";
import data from "../../src/provicy_text.json";
import Navbar from "../components/Navbar";

const Policy = ({ isTabletOrMobile }) => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [text, setText] = useState();
  return (
    <>
      isTabletOrMobile && <Navbar />
      <div className="policy py-5">
        <div className="py-5">
          <div className="container">
            <div className="py-5 policy-header">
              <h1>Privacy Policy</h1>
              <p>Update date: Sep 2020 </p>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="policy-box">
                  <div className="policy-ghost">
                    <img src={ghost} alt="ghost" className="policy-icon" />
                  </div>
                  <h3>{data[0].question}</h3>
                  <h4>{data[0].answer}</h4>
                  {/* Button to Open the Modal  */}
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#policyModel"
                    onClick={() => {
                      setAnswer(data[0].answer);
                      setQuestion(data[0].question);
                      setText(data[0].text);
                    }}
                  >
                    Read More
                  </button>
                </div>
                {/* MODAL */}
                <PolicyModal question={question} answer={answer} text={text} />
              </div>
              <div className="col-md-2 col-sm4">
                <div className="policy-circle py-5">
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                </div>
              </div>
              <div className="col-md-4 col-sm-8">
                <div className="policy-box">
                  <div className="policy-ghost">
                    <img src={ghost} alt="ghost" className="policy-icon" />
                  </div>
                  <h3>{data[1].question}</h3>
                  <h4>{data[1].answer}</h4>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#policyModel"
                    onClick={() => {
                      setAnswer(data[1].answer);
                      setQuestion(data[1].question);
                      setText(data[1].text);
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} text={text} />
              </div>
              <div className="col-md-2 col-sm-4 padding-reset">
                <div className="policy-circle py-5">
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img src={Oval} alt="Oval" className="oval-img" />
                  <img
                    src={packmanleft}
                    alt="packmanleft"
                    className="packman"
                  />
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
                  <h3>{data[2].question}</h3>
                  <h4>{data[2].answer}</h4>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#policyModel"
                    onClick={() => {
                      setAnswer(data[2].answer);
                      setQuestion(data[2].question);
                      setText(data[2].text);
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} text={text} />
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
                  <h3>{data[3].question}</h3>
                  <h4>{data[3].answer}</h4>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#policyModel"
                    onClick={() => {
                      setAnswer(data[3].answer);
                      setQuestion(data[3].question);
                      setText(data[3].text);
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} text={text} />
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
                  <h3>{data[4].question}</h3>
                  <h4>{data[4].answer}</h4>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#policyModel"
                    onClick={() => {
                      setAnswer(data[4].answer);
                      setQuestion(data[4].question);
                      setText(data[4].text);
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} text={text} />
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
                  <h3>{data[5].question}</h3>
                  <h4>{data[5].answer}</h4>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#policyModel"
                    onClick={() => {
                      setAnswer(data[5].answer);
                      setQuestion(data[5].question);
                      setText(data[5].text);
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} text={text} />
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
                  <h3>{data[6].question}</h3>
                  <h4>{data[6].answer}</h4>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#policyModel"
                    onClick={() => {
                      setAnswer(data[6].answer);
                      setQuestion(data[6].question);
                      setText(data[6].text);
                    }}
                  >
                    Read More
                  </button>
                </div>
                <PolicyModal question={question} answer={answer} text={text} />
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
    </>
  );
};

export default Policy;
