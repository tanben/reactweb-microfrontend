import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';



const LDProvider = await asyncWithLDProvider({
    clientSideID:"641cabe12916f81284bc5739",
    context: {
      "kind": "user",
      "key": "user-key-456def",
      "name": "Richard Marx",
      "email": "rmarx@example.com",
      "anonymous": true
    },
    options: { /* ... */ }
  });

const App = () => (
  <LDProvider>
    <Header/>
    <Footer />
    
  </LDProvider>
);
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
