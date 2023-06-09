import React from "react";
const FlagStatus = React.lazy(() => import('components/FlagStatus'));

import "./index.css";

const Body = (props) => (
   <div id="body" className="fragment">
    <div className="center">Body : <FlagStatus />
      <div style={{fontSize:"1rem"}}>
        <div>Package: content</div>

        {props.children}
      </div>
      
    </div>
    
  </div>
);

export default Body

