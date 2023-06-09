import React from "react";
import { useFlags } from 'launchdarkly-react-client-sdk';




const FlagConditionalRender=({flagKey="simpleToggle", overrideValue, element, children})=>{
   const flags = useFlags();
  let isTrue = flags[flagKey];
  isTrue = !isTrue ? false : isTrue;
  isTrue= (overrideValue)? (overrideValue.toLowerCase() ==='true'):isTrue;

  return isTrue ? element: children
}


export default FlagConditionalRender
