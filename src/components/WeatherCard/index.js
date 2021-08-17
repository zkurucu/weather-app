import React from "react";
import { Card, Image } from "semantic-ui-react";

function WeatherCard({ day, icon, min, max }) {
  return (
    <Card>
      <Card.Content textAlign="center">
        <Card.Description>{day}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Card.Description>
          <Image src={`https://openweathermap.org/img/wn/${icon}.png`} />
        </Card.Description>
        <span>
          <strong>
            {max}
            {"\u00b0"}
          </strong>
        </span>
        &nbsp;
        <span>
          {min}
          {"\u00b0"}
        </span>
      </Card.Content>
    </Card>
  );
}

export default WeatherCard;
