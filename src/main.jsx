import Cleeng from './services/Cleeng';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/pacifico";

import "@adyen/adyen-web/dist/adyen.css";
import "react-loading-skeleton/dist/skeleton.css";

import { Config } from "@cleeng/mediastore-sdk";

Config.setEnvironment("sandbox");
Config.setPublisher(Cleeng.publisherId);
Config.setOffer(Cleeng.offerId);
Config.setVisibleAdyenPaymentMethods(["card", "applepay"]);
Config.setHidePayPal();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
