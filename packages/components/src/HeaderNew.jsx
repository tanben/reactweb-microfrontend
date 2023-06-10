import React from "react";
import FlagStatus from './FlagStatus'
import "./index.css";


const HeaderNew = () => (
  <div id="header" className="fragment">
    <div className="center"> New Header: <FlagStatus />
        <div style={{fontSize:"1rem"}}>
          <div>Package: components</div>
        </div>
      </div>
  </div>
);

export default HeaderNew


