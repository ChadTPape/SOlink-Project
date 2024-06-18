import axios from 'axios';
import { WeatherData } from '../entities/weatherData';
import { getRepository } from 'typeorm';

const SOLCAST_API_KEY = process.env.SOLCAST_API_KEY;
const BASE_URL = 'https://api.solcast.com.au/data/forecast/radiation_and_weather?latitude=-33.856784&longitude=151.215297&output_parameters=air_temp,dni,ghi&format=json';

export const fetchAndStoreWeatherData = async (location: string) => {
  try {
    const response = await axios.get(`${BASE_URL}world_radiation/estimated_actuals`, {
      params: {
        api_key: SOLCAST_API_KEY,
        format: 'json',
        latitude: location.split(',')[0],
        longitude: location.split(',')[1]
      }
    });

    const data = response.data;
    const irradiance = data.estimated_actuals[0].ghi; // Global Horizontal Irradiance
    const temperature = data.estimated_actuals[0].air_temp;

    const weatherData = new WeatherData();
    weatherData.location = location;
    weatherData.irradiance = irradiance;
    weatherData.temperature = temperature;

    const weatherDataRepository = getRepository(WeatherData);
    await weatherDataRepository.save(weatherData);
  } catch (error) {
    console.error('Error fetching or storing weather data:', error);
    throw error;
  }
};
