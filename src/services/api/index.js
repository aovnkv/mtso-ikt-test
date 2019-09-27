import axios from 'axios';
import restURL from './baseURL';

export const validate = async data =>
  await axios.post(`${restURL}/validate/`, data);

export const getUserInfo = async id =>
  await axios.get(`${restURL}/user-info/${id}`);

export const fetchNews = async () => await axios.get(`${restURL}/news/`);