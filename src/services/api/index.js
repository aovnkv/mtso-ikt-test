import axios from 'axios';
import restURL from './baseURL';

export const signUp = async signUpData =>
  await axios.post(`${restURL}/validate/`, signUpData);
