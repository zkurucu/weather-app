import React from "react";
import WeatherCard from "../WeatherCard";
import { Card } from "semantic-ui-react";

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
  return (
    <div>
      <Card.Group itemsPerRow={weathers.length}>
        {weathers.map(value => 
          <WeatherCard {...value} />
        )}
      </Card.Group>
    </div>
  );
}

export default Weather;
