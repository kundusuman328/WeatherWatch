import { configureStore } from '@reduxjs/toolkit';
import currentWeatherSlice from "./currentWeatherSlice"

const store = configureStore({
  reducer: {
    currentWeather:currentWeatherSlice,
  }
});

export default store;