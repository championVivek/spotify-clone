import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const DataLayerContext = createContext();

//Children are those which are under Datalayer in index.js
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
