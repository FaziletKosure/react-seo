import React from "react";
import Discounts from '../components/Discounts'
import Benefits from '../components/Benefits'
import DataConsumer from '../components/DataConsumer'
import useDocumentTitle from '../components/useDocumentTitle'

const Consumer = () => {
  useDocumentTitle('Munetise data | Muna | Belgium')
  return (
    <>
    <Discounts/>
    <Benefits/>
    <DataConsumer/>
    </>
   
  );
};

export default Consumer;
