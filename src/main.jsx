import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import swDev from "./service-worker/swDev.js";
import store from "./redux/store/store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//this is simple service worker we can use but it's just work in build file and we must change manually js and css file that vite js create after build
//I preffer to use vite pwa
//swDev();
