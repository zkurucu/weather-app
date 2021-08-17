import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Weather from "./components/Weather";
import React from "react";
import { Card, Container, Dropdown, Segment } from "semantic-ui-react";

const cityOptions = [
  { key: 1, value: "Adana", text: "Adana" },
  { key: 2, value: "Adıyaman", text: "Adıyaman" },
  { key: 3, value: "Afyonkarahisar", text: "Afyonkarahisar" },
];

function App() {
  return (
    <Container className="app">
      <h2>Weather App</h2>
      <div className="city-dropdown">
        <Dropdown
          placeholder="Şehir Seçin"
          search
          selection
          options={cityOptions}
        />
      </div>
      <Weather />
    </Container>
  );
}

export default App;
