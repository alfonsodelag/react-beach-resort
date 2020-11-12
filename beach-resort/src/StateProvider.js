// setup data layer
// we need this to track the basket
import React, { createContext, useContext, useReducer } from 'react';

// Creating an empty data layer to manage the state
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
)

// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext)