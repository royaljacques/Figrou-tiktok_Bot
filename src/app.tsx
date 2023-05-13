import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Routes, Route, HashRouter} from "react-router-dom";
import Acceuil from "./pages/acceuil";
import Frame from "./components/frame";
import TokenValidator from "./pages/tokenValidator";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(

  <React.StrictMode>
    <Frame/>
    <HashRouter>
        <Routes>
            <Route path='/' element={<Acceuil/>} />
            <Route path="/validate" element={<TokenValidator/>}/>
        </Routes>
    </HashRouter>
  </React.StrictMode>
);
