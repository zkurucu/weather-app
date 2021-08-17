import React, { useEffect } from "react";
import WeatherCard from "../WeatherCard";
import { Card } from "semantic-ui-react";
import { useApp } from "../../context/AppContext";

const weathers = [
  { day: "Pzt", icon: "01d", min: 21, max: 38 },
  { day: "Sa", icon: "01d", min: 21, max: 37 },
  { day: "Çar", icon: "01d", min: 22, max: 38 },
  { day: "Per", icon: "01d", min: 22, max: 38 },
  { day: "Cum", icon: "01d", min: 22, max: 37 },
  { day: "Cmt", icon: "01d", min: 21, max: 39 },
  { day: "Paz", icon: "01d", min: 21, max: 39 },
];

function Weather() {
  const { city } = useApp();

  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
    <div>
      <Card.Group itemsPerRow={weathers.length}>
        {weathers.map((value, index) => (
          <WeatherCard key={index} {...value} />
        ))}
      </Card.Group>
    </div>
  );
}

export default Weather;
