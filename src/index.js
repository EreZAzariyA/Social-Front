import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./Redux/store";
import interceptorsService from "./Services/InterceptorsService";
import "./styles/main.css";
import "./styles/style.css";
import "./styles/global.css";
import socketServices from "./Services/socket-services";


const root = ReactDOM.createRoot(document.getElementById("root"));
interceptorsService.createInterceptors();
socketServices.connect();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
