import React from 'react'
// import muna from "../assets/muna.webp";
import muna from "../assets/mockupdesktop.png";
import {Link} from "react-router-dom"

const Customers = () => {
    return (
        <div className="discounts">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-5 discounts-left">
            <h1>Know your customers by their name</h1>
            <p>
              Muna enables you to build a one-to-one trust relatioship with your customers and prospects.While growing your business and sharing your gain with them.
            </p>
           
            <div className="discount-btn-div company">
 <Link to="join-muna"> <button>Join Muna</button></Link>
</div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="discount-img" src={muna} alt="muna" srcset="" />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Customers
