import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/weather?';

export const id = 'dd82335edb72bfdee6a3e5854729f3ef';

export const urlByCity = (val) => `${url}q=${val}&appid=${id}`;

export const urlByLongLat = (lat, lon) => `${url}lat=${lat}&lon=${lon}&appid=${id}`;
