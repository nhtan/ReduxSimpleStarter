import axios from 'axios';

const WEATHER_API_KEY = '64b5b75a8715cbe3700ee3bab6d02302';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
