import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState ={
    location: "",
    date: "",
    icon: "",
    temperature: "",
    summary: "",
    feels_like: "",
    rain: "",
    wind: "",
    direction:"",
    sunrise: "",
    sunset: "",
    error: null,
    status:"idle" // "loading" | "succeeded" | "failed"
  }

export const initCurrentWeather = createAsyncThunk("currentWeather/initCurrentWeather", async ({lat,lng}) => {
        const response = await Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0c5f6dbc0ecefe58edae3e8122fd4127&unit=metric`
          )
          return response.data
  })

const currentWeatherSlice = createSlice({
    name:"currentWeather",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(initCurrentWeather.fulfilled,(state,action) => {
            state.location = action.payload.name + ", " + action.payload.sys.country
            state.date = action.payload.dt
            state.icon = action.payload.weather[0].icon
            state.temperature = parseInt(action.payload.main.temp - 273.15)
            state.summary = action.payload.weather[0].description
            state.feels_like = parseInt(action.payload.main.feels_like - 273.15)
            state.rain = action.payload.clouds.all
            state.wind = parseInt(action.payload.wind.speed * 3.6)
            state.direction = parseInt(action.payload.wind.deg)
            state.sunrise = action.payload.sys.sunrise
            state.sunset = action.payload.sys.sunset
            state.status = "succeeded"
        })
        .addCase(initCurrentWeather.pending, (state,action) => {
            state.status = "loading"
        }).addCase(initCurrentWeather.rejected, (state,action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export const getCurrentWeather = (state) => state.currentWeather

export default currentWeatherSlice.reducer