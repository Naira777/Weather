import { weatherAPI } from "../api";

const SAVE_CITY_INFO = "SAVE_CITY_INFO";
const SAVE_CITY = "SAVE_CITY";
const SET_MODE = "SET_MODE";
const SET_TOMORROW = "SET_TOMORROW";
const SET_TODAY = "SET_TODAY";
const SET_NEXT_DAY = "SET_NEXT_DAY";

const initialState = {
  cityName: "",
  mode: false,
  temp: 0,
  description: "",
  windspeed: 0,
  today: false,
  nextday: false,
  tomorrow: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CITY_INFO: {
      return {
        ...state,
        temp: action.data.temperature,
        windspeed: action.data.wind,
        description: action.data.description,
      };
    }

    case SAVE_CITY: {
      return { ...state, cityName: action.city };
    }

    case SET_MODE: {
      return { ...state, mode: action.mode };
    }
    case SET_NEXT_DAY: {
      return {
        ...state,
        nextday: true,
        temp: action.data.forecast[1].temperature,
        windspeed: action.data.forecast[1].wind,
        description: null,
      };
    }

    case SET_TODAY: {
      return { ...state, today: action.data };
    }

    case SET_TOMORROW: {
      return {
        ...state,
        tomorrow: true,
        temp: action.data.forecast[0].temperature,
        windspeed: action.data.forecast[0].wind,
        description: null,
      };
    }

    default:
      return state;
  }
};

export const setTomorrow = (data) => {
  return { type: SET_TOMORROW, data };
};

export const setToday = (data) => {
  return { type: SET_TODAY, data };
};
export const setNextDay = (data) => {
  return { type: SET_NEXT_DAY, data };
};
export const setDataWeather = (data) => {
  return { type: SAVE_CITY_INFO, data };
};

export const setMode = (mode) => {
  return { type: SET_MODE, mode };
};

export const setCity = (city) => {
  return { type: SAVE_CITY, city };
};

export const getWeatherForCity =
  (name, editmode) =>
  async (dispatch) => {
    const data = await weatherAPI.getWeather(name);
    dispatch(setDataWeather(data));
    if (editmode == 1) {
      dispatch(setTomorrow(data));
    }
    if (editmode == 2) {
      dispatch(setNextDay(data));
    }
  };

export default weatherReducer;
