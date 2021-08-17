import { default as cities } from "../context/cities_of_turkey.json";
import React, { useContext, useState, createContext } from "react";

const getCities = () => {
  return cities.map((city) => ({
    key: city.id,
    value: city.name,
    text: city.name,
  }));
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState("Denizli");

  const values = { city, setCity, cityOptions: getCities() };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
