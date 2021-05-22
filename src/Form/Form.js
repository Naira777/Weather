import React, { useEffect, useState } from "react";
import { getWeatherForCity, setCity, setMode } from "../Redux/weather-reducer";
import * as Styled from "./styled";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const [city, setcity] = useState("");

  useEffect(() => {
    dispatch(setCity(city));
    dispatch(getWeatherForCity(city));
  }, [city]);

  const onClick = () => {
    dispatch(setCity(city));
    dispatch(setMode(true));
  };

  const handleChange = (e) => {
    setcity(e.target.value);
    dispatch(setCity(city));
    dispatch(setMode(false));
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        placeholder="Enter City"
        name="searchedCity"
        onChange={handleChange}
      />

      <Styled.Button onClick={onClick} type="submit">
        {" "}
        Get Weather{" "}
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Form;
