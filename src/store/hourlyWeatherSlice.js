import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  data:[],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

export const initHourlyWeather = createAsyncThunk(
  "hourlyWeather/initHourlyWeather",
  async ({ lat, lng }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=0c5f6dbc0ecefe58edae3e8122fd4127&unit=metric`
    );
    return response.data.list.slice(0,8);
  }
);

const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(initHourlyWeather.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload.map((item) => ({
          time: item.dt,
          icon: item.weather[0].icon,
          temperature: parseInt(item.main.temp - 273.15),
        }))
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


export const getHourlyWeather = (state) => state.hourlyWeather;

export default hourlyWeatherSlice.reducer;
