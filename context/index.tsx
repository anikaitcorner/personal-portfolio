"use client";

import React, { useState, createContext, useContext } from "react";

const State = () => {
  // state
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  // toggle theme mode
  const toggleThemeMode = () => {
    setDarkMode((prev: boolean) => !prev);
  };

  return {
    isDarkMode,
    toggleThemeMode,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
