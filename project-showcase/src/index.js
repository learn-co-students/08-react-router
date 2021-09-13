import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// react-router-dom Imports
// BrowserRouter / Router => Container for our Client-Side Routing Behavior
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById("root")
);
