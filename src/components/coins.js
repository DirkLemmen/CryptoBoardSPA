import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import '../App.css';
import axios from "axios";
import { default as NumberFormat } from 'react-number-format';

const Coins = () => {

    const [coins, setCoins ] = useState([]);
  

    const fetchCoins = () => {
      axios.get("http://localhost:8080/api/v1/coins").then(res => {
        console.log(res); // remove log in deployment
        setCoins(res.data);
      });
    }
  
    useEffect(() => {
      //First coins fetch
      fetchCoins();
      // refresh coins every 50 seconds
      // External API refreshes every minute
      const interval = setInterval(() => fetchCoins(), 50000)
      return () => {
        clearInterval(interval);
      }
    }, []);
  
    
    return coins.map((coin, index) => {
      const change_24h = '' + (Math.round(coin.price_change_percentage_24h * 100) / 100).toFixed(2);
      var symbol = coin.symbol;
      
          if (change_24h.includes('-')) {
        return ( 
          <tr key={index}>
            <td><p>{coin.market_cap_rank}</p></td>
          <td>
            <div className="coin-item">
            <img alt={coin.name} src={coin.image}/> <p>{coin.name}</p><p className="symbol">{symbol.toUpperCase()}</p>
            </div>
            </td>
          <td><p>
            <NumberFormat thousandsGroupStyle="thousand" value={coin.current_price} prefix="$"  decimalSeparator="."  displayType="text" type="text" thousandSeparator={true}/>
          </p>
          </td>
          <td className="text-danger"><AiFillCaretDown/> {change_24h}%</td>
          <td><p>
            <NumberFormat thousandsGroupStyle="thousand" value={coin.market_cap} prefix="$"  decimalSeparator="."  displayType="text" type="text" thousandSeparator={true}/>
          </p></td>
          <td><p>       
            <NumberFormat thousandsGroupStyle="thousand" value={coin.market_cap} decimalSeparator="."  displayType="text" type="text" thousandSeparator={true}/>
            &nbsp;{symbol.toUpperCase()}
          </p></td>
        </tr>
        );
      }
      else {
        return ( 
          <tr key={index}>
            <td><p>{coin.market_cap_rank}</p></td>
          <td>
            <div className="coin-item">
            <img alt={coin.name} src={coin.image}/> <p>{coin.name}</p><p className="symbol">{symbol.toUpperCase()}</p>
            </div>
            </td>
            <td><p>
            <NumberFormat thousandsGroupStyle="thousand" value={coin.current_price} prefix="$"  decimalSeparator="."  displayType="text" type="text" thousandSeparator={true}/>
          </p></td>
          <td className="text-success"><AiFillCaretUp/> {change_24h}%</td>
          <td><p>
            <NumberFormat thousandsGroupStyle="thousand" value={coin.market_cap} prefix="$"  decimalSeparator="."  displayType="text" type="text" thousandSeparator={true}/>
          </p></td>
          <td><p>       
            <NumberFormat thousandsGroupStyle="thousand" value={coin.market_cap} decimalSeparator="."  displayType="text" type="text" thousandSeparator={true}/>
            &nbsp;{symbol.toUpperCase()}
          </p></td>
        </tr>
        );
      }
    });
  };

  export default Coins;