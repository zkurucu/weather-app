import React, { useContext, useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState("Denizli");

  const values = { city, setCity };

  return (
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
