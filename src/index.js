import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
        // domain={process.env.REACT_APP_AUTH0_DOMAIN}
        domain="dev-x2up8hyw.us.auth0.com"
        clientId="ciDo116HMtkr7s0D0y775NxeWyqhf37r"
        redirectUri={window.location.origin}
        audience="localhost"
        >
    <App />
    </Auth0Provider>
    </BrowserRouter>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
