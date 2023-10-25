import React from "react";
import  ReactDOM  from "react-dom";
import './index.css'

import App from "./App";
import { ContextProvider } from "./contexts/ContextsProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);