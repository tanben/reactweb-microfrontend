import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import {clientSideID} from 'Config';


const LDProvider = await asyncWithLDProvider({
    clientSideID,
    context: {
      "kind": "user",
      "anonymous": true
    },
  });

const App = () => (
  <LDProvider>
    <Header/>
    <Footer />
  </LDProvider>
);
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
