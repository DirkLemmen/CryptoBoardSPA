import React from "react";
import Coins from "./coins";

const CoinsContainer = () => (
<div className="container">
        <table className="table coins">
          <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            <Coins/>
          </tbody>
        </table>
      </div>
);

export default CoinsContainer;
