import React, { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/index.js";
import { BrowserRouter } from "react-router-dom";
const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <h2 className="text-center">Loading...</h2>
          </div>
        }
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
