//setudep data layer
//for tracking the basket
import React, { useContext, createContext, useReducer } from 'react';

//this is the data layer

export const StateContext = createContext();

//Build a procider

export const StateProvider = ({ reducer, children, initialState}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//we use it inside our component

export const useStateValue = () => useContext(StateContext);