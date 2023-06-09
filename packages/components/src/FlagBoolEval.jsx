import React from "react";
import { useFlags } from 'launchdarkly-react-client-sdk';


const FlagBoolEval=({flagKey, overrideValue, children})=>{
  const flags = useFlags();
  let isTrue = flags[flagKey];
  
  isTrue = !isTrue ? false : isTrue;
  isTrue= (overrideValue)? (overrideValue.toLowerCase() ==='true'):isTrue;

  // console.log(`flagBooleEval flagKey=${flagKey} val=${isTrue}`);
  return isTrue ? children : <></>;
}


export default FlagBoolEval
