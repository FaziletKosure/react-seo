import React from "react";
import munabackground from "../assets/munabackground.jpg";
import useDocumentTitle from "./useDocumentTitle";

const JoinMuna = () => {
  useDocumentTitle("Join Muna.io");
  return (
    <div className="joinmuna">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-5 join-form">
            <h1>Welcome!</h1>
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder=""
                />
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />

                <label for="exampleInputEmail1">Signup with Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              className="joinmuna-img"
              src={munabackground}
              alt="munabackground"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMuna;
