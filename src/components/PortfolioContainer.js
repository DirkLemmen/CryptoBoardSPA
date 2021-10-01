import React from "react";
import Coins from "./PortfolioCoins";

const PortfolioContainer = () => (
<div className="container">
        <table className="table coins">
          <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <Coins/>
          </tbody>
        </table>
      </div>
);

export default PortfolioContainer;
