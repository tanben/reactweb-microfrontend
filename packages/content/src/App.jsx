import React from "react";
import ReactDOM from 'react-dom/client';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import {clientSideID} from 'Config';
import Body from "./Body";
import "./index.css";


const LDProvider = await asyncWithLDProvider({
    clientSideID,
    context: {
      "kind": "user",
      "anonymous": true
    },
  });
const App = () => (
  <LDProvider>
    <Body/>
  </LDProvider>
  
);


ReactDOM.createRoot(document.getElementById('app')).render(<App/>);


