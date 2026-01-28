import React from "react";
import DropDown from "./DropDown";

function CreateTicket() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-7">
          <DropDown
            header="Account Opening"
            first="Resident individual"
            second="Non Resident Indian (NRI)"
          />
          <DropDown
            header="Your Zerodha Account"
            first="Your Profile"
            second="Account modification"
          />
          <DropDown
            header="Kite"
            first="Trading FAQs"
            second="Charts and Orders"
          />{" "}
          <DropDown header="Funds" first="Add Money" second="Withdraw Money" />{" "}
          <DropDown header="Console" first="Portfolio" second="Profile" />{" "}
          <DropDown
            header="Coin"
            first="Mutual Funds"
            second="Payments and orders"
          />
        </div>
        <div className="col-3 fs-5 createticket m-5 p-3" >
          <ol >
          <p className="mb-0 " style={{backgroundColor:"#d8d6d6" ,padding:"10px"}}> Quick links</p>
           <a href="" > <li>Track account opening</li></a>
           <a  href=""> <li>Track segment activation</li></a>
           <a href=""> <li>Intraday margins</li></a>
           <a href=""> <li>Kite user manual</li></a>
          <a href="">  <li>Learn how to create a ticket</li></a>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
