import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from "./Brokerage";
import Table from "./Table";


function PricingPage(){
    return(
        <>
      <Hero/>
      <OpenAccount/>
      <Brokerage/>
      <Table/>
      </>
    );
}
export default PricingPage;