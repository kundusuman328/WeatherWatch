import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  fiveDayData: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const initHourlyWeather = createAsyncThunk(
  "hourlyWeather/initHourlyWeather",
  async ({ lat, lng }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=0c5f6dbc0ecefe58edae3e8122fd4127&unit=metric`
    );
    return response.data.list;
  }
);

const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(initHourlyWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.slice(0, 8).map((item) => ({
          time: item.dt,
          icon: item.weather[0].icon,
          temperature: parseInt(item.main.temp - 273.15),
        }));
        const fiveDayData = [];
        for (let i = 0; i < 40; i += 8) {
          const item = action.payload[i];
          fiveDayData.push({
            date: item.dt,
            icon: item.weather[0].icon,
            low: parseInt(item.main.feels_like - 273.15),
            high: parseInt(item.main.temp_max - 273.15),
            rain: item.clouds.all,
            wind: parseInt(item.wind.speed * 3.6),
          });
        }
        state.fiveDayData = fiveDayData;
      })
      .addCase(initHourlyWeather.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(initHourlyWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default hourlyWeatherSlice.reducer;
