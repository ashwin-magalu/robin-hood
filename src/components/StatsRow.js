import React, { useState, useEffect } from "react";
import StockChart from "../stock.svg";
import axios from "axios";
import { key } from "../config/api";

const StatsRow = (props) => {
  const [comp, setComp] = useState(null);
  //   console.log(props, "what is in props here?");
  // (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  /* useEffect(() => {
    const _comp = axios.get(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${props.name}&token=${key}`
    );
    console.log(_comp);
    setComp(_comp);
    return () => {
      //
    };
  }, [props]);
 */
  const getModal = () => {
    console.log(comp);
    /* alert(
      `Company Name: ${comp.name} \nCompany Country: ${comp.country} \nExchange: ${comp.exchange} \nCompany Currency: ${comp.currency}\nWebsite: ${comp.weburl}`
    ); */
  };

  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && props.volume + " shares"}</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default StatsRow;
