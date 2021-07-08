import React from "react";

const CurrencyState = React.createContext()
const CurrencyStateDispatch = React.createContext()

function WindowReducer(state, action) {
  return action;
}

function CurrencyProvider({children}) {
  const [state, dispatch] = React.useState('USD')
  return (
    <CurrencyState.Provider value={state}>
      <CurrencyStateDispatch.Provider value={dispatch}>
        {children}
      </CurrencyStateDispatch.Provider>
    </CurrencyState.Provider>
  )
}

function useCurrencyState() {
  const context = React.useContext(CurrencyState)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useCurrencyDispatch() {
  const context = React.useContext(CurrencyStateDispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export {CurrencyProvider, useCurrencyState, useCurrencyDispatch}