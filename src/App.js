import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Weather from "./components/Weather";
import { useApp } from "./context/AppContext";
import React from "react";
import { Container, Dropdown } from "semantic-ui-react";

function App() {
  const { city, setCity, cityOptions } = useApp();

  const handleChange = (e, { value }) => {
    setCity(value);
  };

  return (
    <Container className="app">
      <h2>Weather App</h2>
      <div className="city-dropdown">
        <Dropdown
          placeholder="Şehir Seçin"
          search
          selection
          options={cityOptions}
          value={city}
          onChange={handleChange}
        />
      </div>
      <Weather />
    </Container>
  );
}

export default App;
