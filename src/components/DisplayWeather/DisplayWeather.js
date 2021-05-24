import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./styled";
import {
  getCity,
  getDescription,
  getTemp,
  getWindspeed,
} from "../../Redux/selectors-weather";
import { getWeatherForCity } from "../../Redux/weather-reducer";

const DisplayWeather = () => {
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const temp = useSelector(getTemp);
  const description = useSelector(getDescription);
  const windspeed = useSelector(getWindspeed);
  const mode = useSelector((state) => state.weatherPage.mode);
  const [editmode, setEditMode] = useState(0);

  useEffect(() => {
    dispatch(getWeatherForCity(city, editmode));
  }, [editmode]);


  useEffect(() => {
  setEditMode(0)

  }, [city])


  const onClickToday = () => {
    setEditMode(0);
    dispatch(getWeatherForCity(city, editmode));
  };

  const onClickTomorrow = () => {
    setEditMode(1);
    dispatch(getWeatherForCity(city, editmode));
  };

  const onClickNextDay = () => {
    setEditMode(2);
    dispatch(getWeatherForCity(city, editmode));
  };

  return (
    <>
      {mode && (
        <Styled.Box>
          <Styled.Wrapper>
            <Styled.Box0 editmode={editmode} onClick={onClickToday}>
              {" "}
              Today{" "}
            </Styled.Box0>
            <Styled.Box1 editmode={editmode} onClick={onClickTomorrow}>
              {" "}
              Tomorrow{" "}
            </Styled.Box1>
            <Styled.Box2 editmode={editmode} onClick={onClickNextDay}>
              {" "}
              Next Day{" "}
            </Styled.Box2>
          </Styled.Wrapper>
          <Styled.Row big>
            <div> City </div> <div>{city}</div>
          </Styled.Row>

          <Styled.Row>
            <div> Temperature </div> <div>{temp}</div>
          </Styled.Row>

          {description && (
            <Styled.Row>
              <div>Description </div>
              <div>{description}</div>
            </Styled.Row>
          )}
          <Styled.Row>
            <div> Wind Speed</div> <div>{windspeed}</div>
          </Styled.Row>
        </Styled.Box>
      )}{" "}
    </>
  );
};

export default DisplayWeather;
