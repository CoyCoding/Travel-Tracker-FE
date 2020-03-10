import store from '../../store';
import axios from 'axios';

export const onResponseSuccess = (res) => {
  return res;
}

export const onResponseErr = (err) =>  {
  console.log('in')
  store.dispatch({type: "LOG_OUT"})
  return Promise.reject(err)
}

axios.interceptors.response.use(onResponseSuccess, onResponseErr)

export default axios;