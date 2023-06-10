import React from "react";
import { useFlags } from 'launchdarkly-react-client-sdk';


const FlagStatus=({flagKey="simpleToggle"})=>{
    const flags = useFlags();
    const flagValue = (flags[flagKey])?"On":"Off";
    const cssName=`flag-display ${(flags[flagKey])?"on":"off"}`;
    
    return (
        <span className={cssName}>Flag {flagValue}</span>
          );
}

export default FlagStatus
