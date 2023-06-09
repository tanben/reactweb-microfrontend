import React from "react";
import FlagStatus from './FlagStatus'
import "./index.css";


const Header = () => (
  <div id="header" className="fragment">
    <div className="center">Header : <FlagStatus />
        <div style={{fontSize:"1rem"}}>
          <div>Package: components</div>
        </div>
      </div>
  </div>
);

export default Header


