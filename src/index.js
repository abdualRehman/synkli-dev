import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/app.tsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { persistor } from "./store/store";
// import store from "./store/store";
// import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ErrorBoundary from "utills/base-components/ErrorBoundary";
// import { Suspense } from "react";
import "@syncfusion/ej2-base/styles/material.css"; // Import the Syncfusion theme CSS
import { enableRipple, L10n, setCulture, loadCldr } from "@syncfusion/ej2-base";
// Import your Syncfusion license key here
import { registerLicense } from "@syncfusion/ej2-base";

// Your Syncfusion license key should look like this:
const syncfusionLicense =
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1NpRGNGfV5yd0VCalxSTndfUiweQnxTdEZiWX9dcHBVRWFcWEJ2Wg==";

// Register your Syncfusion license key
registerLicense(syncfusionLicense);

// Initialize Syncfusion components
enableRipple(true);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("fdsf");
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
      // <BrowserRouter>
      //     {" "}
      //     <ToastContainer />
      //     <App />
      // </BrowserRouter>
  //   </PersistGate>
  // </Provider>
);

reportWebVitals();

//https://zeltta.co.nz/article/how-to-detect-inactivity-and-auto-reset-a-react-app
