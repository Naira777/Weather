import * as axios from "axios";

const instanceWeather = axios.create({
  baseURL: "https://goweather.herokuapp.com/weather/",
});

export const weatherAPI = {
  getWeather(cityName) {
    return instanceWeather
      .get(`${cityName}`)

      .then((response) => {
        return response.data;
      });
  },
};
