import React from "react";
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import Config from 'Config';
import Body from "./Body";
import "./index.css";

const {clientSideID} = Config;
const context={
    "kind": "multi",
    "user": {
      "key": "8daffe6b-c2c8-4b3c-adb0-107399ee1c64",
      "name": "Ebony Lueilwitz",
      "state": "Montana",
      "city": "Marleeboro",
      "country": "American Samoa",
      "anonymous": false
    },
    "subscription": {
      "key": "enterprise"
    },
    "application": {
      "key": "electfast",
      "version": "9.2.9"
    },
    "department": {
      "name": "Computers",
      "key": "computers",
      "group": "dark-launcher"
    },
    "company": {
      "name": "Walter, Oberbrunner and Stamm",
      "key": "walter-oberbrunner-and-stamm"
    }
  };
  
const LDProvider = await asyncWithLDProvider({
    clientSideID,
    context
});
const BodyLDInit = (props) => (
  <LDProvider>
    <Body {...props}/>
  </LDProvider>
  
);

export default BodyLDInit;



