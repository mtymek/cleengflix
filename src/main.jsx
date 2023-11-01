import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@adyen/adyen-web/dist/adyen.css";
import "react-loading-skeleton/dist/skeleton.css";

import { Config } from "@cleeng/mediastore-sdk";

Config.setEnvironment("sandbox");
Config.setPublisher("123456789");
Config.setOffer("S123456789_US");
Config.setVisibleAdyenPaymentMethods(["card", "applepay"]);
Config.setHidePayPal();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
