import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import '../App.css';
import axios from "axios";
import { default as NumberFormat } from 'react-number-format';
import { useAuth0 } from "@auth0/auth0-react";

const Coins = () => {

    const serverUrl = "http://localhost:8080";

    const { getAccessTokenSilently, isLoading, user } = useAuth0();

    const [coins, setCoins ] = useState([]);

    // Fetch coins
    useEffect(() => {
      const fetchCoins = async () => {
        try {

        const token = await getAccessTokenSilently();

        var uid = user.sub.replace('auth0|','');
        
        axios.get(`${serverUrl}/api/v1/private/portfolio/${uid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }
        }).then(res => {
        setCoins(res.data);
      });
    } catch(error) {
        console.log(error);
    }
    }
      if(isLoading===false) {fetchCoins();}
    }, [isLoading]);
  
    
    return coins.map((coin, index) => {
      var symbol = coin.symbol;
      
        return ( 
          <tr key={index}>
            <td><p>*</p></td>
          <td>
            <div className="coin-item">
            <p>{coin.name}</p><p className="symbol">{symbol.toUpperCase()}</p>
            </div>
            </td>
          <td><p>
            <NumberFormat thousandsGroupStyle="thousand" value={coin.amount} prefix="$"  decimalSeparator="."  displayType="text" type="text" thousandSeparator={true}/>
          </p>
          </td>
        </tr>
        );
    });
  };

  export default Coins;