import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { spy } from "mobx";
import { Provider } from "mobx-react";
import store from "./store/store.js"; 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider {...{todo:store}}>
    <App />
  </Provider> 
  </React.StrictMode>
);
