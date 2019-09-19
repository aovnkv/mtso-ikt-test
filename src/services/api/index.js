import axios from 'axios';
import restURL from './baseURL';

export const signUp = signUpData =>
  axios.post(`${restURL}/validate/`, signUpData);
