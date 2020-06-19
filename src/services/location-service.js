import axios from 'axios';
import { getUrl } from './API';

export function searchLocationByCityName (cityName) {
  return axios.get(getUrl(`q=${cityName}`)).then(res => res.data);
}

export function searchLocationBy3G (lat, lon) {
  return axios.get(getUrl(`lat=${lat}&lon=${lon}`)).then(res => res.data);
}

