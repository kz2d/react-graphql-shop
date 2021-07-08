import React from "react";

const OpendState = React.createContext()
const OpendStateDispatch = React.createContext()

function WindowReducer(state, action) {
  return action;
}

function OpendProvider({children}) {
  const [state, dispatch] = React.useState('')
  return (
    <OpendState.Provider value={state}>
      <OpendStateDispatch.Provider value={dispatch}>
        {children}
      </OpendStateDispatch.Provider>
    </OpendState.Provider>
  )
}

function useOpendState() {
  const context = React.useContext(OpendState)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useOpendDispatch() {
  const context = React.useContext(OpendStateDispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export {OpendProvider, useOpendState, useOpendDispatch}