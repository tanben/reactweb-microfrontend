import React from "react";
import { useFlags } from 'launchdarkly-react-client-sdk';


const FlagStatus=(props)=>{
    const flags = useFlags();
    const flagKey = (props && props.flagKey)?props.flagKey: "simpleToggle";
    const flagValue = (flags[flagKey])?"On":"Off";
    const cssName=`flag-display ${(flags[flagKey])?"on":"off"}`;
    
    return (
        <span className={cssName}>Flag {flagValue}</span>
          );
}

export default FlagStatus
