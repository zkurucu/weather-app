import axios from "axios";

const baseUrl = process.env.REACT_APP_OPEN_WEATHER_MAP_API_BASE_URL;
const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

class OpenWeatherMapApiService {
  async oneCall(lat, lon) {
    return (
      await axios.get(`${baseUrl}/onecall`, {
        params: {
          lat,
          lon,
          APPID: apiKey,
          units: "metric",
          exclude: "current,minutely,hourly,alerts",
        },
      })
    ).data;
  }
}

export default OpenWeatherMapApiService;
