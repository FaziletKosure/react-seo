import React from "react";
import Customers from "../components/Customers";
import CompanyBenefits from "../components/CompanyBenefits";
import CompanyChange from "../components/CompanyChange";
import useDocumentTitle from "../components/useDocumentTitle";

const Company = () => {
  useDocumentTitle("Company | Muna.io");
  return (
    <div id="company">
      <Customers />
      <CompanyBenefits />
      <CompanyChange />
    </div>
  );
};

export default Company;
