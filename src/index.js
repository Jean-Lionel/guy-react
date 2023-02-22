import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import axios from "axios";
import nisys_store from "./logic/nisys_store";

//axios.defaults.baseURL = "https://app.onpr.bi/onpr_api/public/api";
axios.defaults.baseURL = "http://localhost:8000/api";
//axios.defaults.baseURL = 'http://test.aiph.bi/api';
//axios.defaults.baseURL = 'http://192.168.1.2:8000/api';
//axios.defaults.baseURL = 'http://app.onpr.bi/onpr_api/public/api';
//http://192.168.1.33:8000/api/articles

axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
//axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.interceptors.request.use(
  (request) => {
    //console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    //  console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={nisys_store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
