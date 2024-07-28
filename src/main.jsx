import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { GlobalStyles } from './Styles/GlobalStyles.js';

import {Provider } from "react-redux"; //provider para que los componentes puedan acceder al store
import { store, persistor } from './redux/store.jsx';
import { PersistGate } from "redux-persist/integration/react"; // SIN ESTO no persisten datos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        {/* <BrowserRouter> */}
          <App />
        {/* </BrowserRouter> */}
      </PersistGate>  
    </Provider> 
  </React.StrictMode>,
)
