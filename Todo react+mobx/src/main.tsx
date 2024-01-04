import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "mobx-react";
import store from "./store/store";



ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
  <Provider {...{todo:store}}>
    <App />
  </Provider> 
  </React.StrictMode>
);
