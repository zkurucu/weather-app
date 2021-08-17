import { default as cities } from "../context/cities_of_turkey.json";

class CityService {
  getByName(name) {
    return cities.find((city) => city.name === name);
  }
}

export default CityService;
