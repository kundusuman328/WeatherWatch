import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    location: "Balotra, IN",
    date: "Wednesday, 5th July",
    icon: "11d",
    temperature: "31",
    summary: "Cloudy",
    high: "34",
    low: "28",
    wind: "12",
    rain: "70",
    sunrise: "05:32",
    sunset: "18:20",
  }

const currentWeatherSlice = createSlice({
    name:"currentWeather",
    initialState,
    reducers:{}
})

export const getCurrentWeather = (state) => state.currentWeather

export default currentWeatherSlice.reducer