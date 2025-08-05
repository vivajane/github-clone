"use client";
import React, { createContext } from "react";
type ContextType = {};

export const ContextProvider = createContext<ContextType | null>(null);
type Props ={
    children:React.ReactNode    
}
const Context = ({children}:Props) => {
  const ContextValue = {}
  return (
    <ContextProvider.Provider value={ContextValue}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
