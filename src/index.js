import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { AppContextProvier } from "./component/ContextApi";
import Store, { persistor } from "./Redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <Provider store={Store}>
        <PersistGate loading={"loading..."} persistor={persistor}>
          <AppContextProvier>
            <RouterProvider router={MainRouter} />
          </AppContextProvier>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
