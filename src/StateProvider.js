import React, { createContext, useContext, useReducer } from "react"

//Prepare the data layer
export const StateContext = createContext();

//Wrap application and provide the datalayer to every component inside the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);