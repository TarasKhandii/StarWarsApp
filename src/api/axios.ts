/* -------------------------------- Libraries ------------------------------- */
import axios from 'axios';
import Toast from 'react-native-toast-message';
/* ----------------------------------- Env ---------------------------------- */
import {APP_BASE_URL} from '@env';

const instance = axios.create({
  baseURL: APP_BASE_URL,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    Toast.show({
      type: 'error',
      text1: 'Server error',
      text2: 'Something went wrong ',
    });

    return Promise.reject(error);
  },
);

export default instance;
