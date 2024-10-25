import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3030',
// });

export const postRegister = (saveSign) => {
  return {
    type: 'POST_REGISTER',
    // payload: axios.post('https://pixos-api.herokuapp.com/register', saveSign),
    payload: axios.post('http://localhost:3030/login', saveSign),
  };
};

export const postLogin = (saveLogin) => {
  return {
    type: 'POST_LOGIN',
    // payload: axios.post('https://pixos-api.herokuapp.com//login', saveLogin),
    payload: axios.post('http://localhost:3030/login', saveLogin),
  };
};
