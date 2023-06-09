import React from "react";
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import Config from 'Config';
import Body from "./Body";
import "./index.css";

const {clientSideID} = Config;

const LDProvider = await asyncWithLDProvider({
    clientSideID,
    context: {
      "kind": "user",
      "key": "user-key-345-defg",
      "name": "Gregory House",
      "email": "ghouse@example.com",
      "anonymous": true
    },
  });
const BodyLDInit = (props) => (
  <LDProvider>
    <Body {...props}/>
  </LDProvider>
  
);

export default BodyLDInit;



