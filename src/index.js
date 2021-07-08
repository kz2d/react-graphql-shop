import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import {OpendProvider} from './services/context/WhatWindowIsOpen.js'
import {CurrencyProvider} from './services/context/Currency.js'
import {CartProvider} from './services/context/Cart.js'
//import reportWebVitals from './reportWebVitals';


const client = new ApolloClient({
  uri: 'http://port-4000.my-first-container-avidex111391748.codeanyapp.com/',//http://localhost:4000
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
      <OpendProvider>
          <CurrencyProvider>
              <CartProvider>
    <App />
    </CartProvider>
    </CurrencyProvider>
    </OpendProvider>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
