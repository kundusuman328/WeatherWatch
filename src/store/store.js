import { configureStore } from '@reduxjs/toolkit';
import currentWeatherSlice from "./currentWeatherSlice"
import hourlyWeatherSlice from './hourlyWeatherSlice';

const store = configureStore({
  reducer: {
    currentWeather:currentWeatherSlice,
    hourlyWeather:hourlyWeatherSlice
  }
});

export default store;