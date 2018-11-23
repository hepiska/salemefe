import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,

  withRouter,
  //   Redirect,
} from "react-router-dom";

import { connect } from "react-redux";



const Pages = () => (
  <div>
    <div
      style={{
        position: "fixed",
        width: "100vw",
        // height:'100vw'
        opacity: 0.1,
        top: "0",
        left: "0",
        zIndex: 0,
        height: "100%",
        backgroundImage: "url('/logoLantas.png')",
        backgroundPosition: "center",
        backgroundSize: "460px 440px",
        backgroundRepeat: "no-repeat"
      }}
    />
    ini pages
  </div>
)

export default (Pages)
