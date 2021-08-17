import WeatherCard from "../WeatherCard";
import { useApp } from "../../context/AppContext";
import React, { useEffect, useState } from "react";
import { Card, Loader } from "semantic-ui-react";
import CityService from "../../services/city";
import OpenWeatherMapApiService from "../../services/open-weather-map-api";

const cityService = new CityService();
const openWeatherMapApiService = new OpenWeatherMapApiService();

function Weather() {
  const { city } = useApp();
  const [weathers, setWeathers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cityObj = cityService.getByName(city);

    if (cityObj) {
      openWeatherMapApiService
        .oneCall(cityObj.latitude, cityObj.longitude)
        .then((res) => {
          setWeathers(
            res.daily.map((d) => {
              return {
                day: new Date(d.dt * 1000).toLocaleDateString("tr-TR", {
                  weekday: "short",
                }),
                max: Math.round(d.temp.max),
                min: Math.round(d.temp.min),
                icon: d.weather[0].icon,
              };
            })
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [city]);

  return (
    <Card.Group itemsPerRow={weathers.length || 1}>
      {isLoading ? (
        <Loader active inline="centered" />
      ) : (
        <>
          {weathers.map((value, index) => (
            <WeatherCard key={index} {...value} isFirst={index === 0} />
          ))}
        </>
      )}
    </Card.Group>
  );
}

export default Weather;
