import React from "react";
import FlagStatus from './FlagStatus'
import "./index.css";


const Footer = () => (
  <div id="footer" className="fragment">
    <div className="center">Footer : <FlagStatus/> 
        <div style={{fontSize:"1rem"}}>
          <div>Package: components</div>
        </div>
    </div>
    
  </div>
);

export default Footer


