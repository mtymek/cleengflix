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
Config.setTheme({
  backgroundColor: "#2a174a",
  loaderColor: "#cccccc",
  successColor: 'rgb(239,68,68)',
  errorColor: "red",
  fontColor: "#ffffff",
  cardColor: "#675d5d",
  primaryColor: 'rgb(239,68,68)',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
