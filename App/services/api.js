import axios from 'axios';

const baseUrl = 'http://10.0.2.2:8000';

export const sendRequest = async (method, path, data) => {
  console.log(method, path, data);
  const result = await axios[method](`${baseUrl}/${path}`, data);
  return result;
};

export const sendAuthorizedRequest = async (
  method,
  path,
  token,
  data = null,
) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  const result = await axios[method](`${baseUrl}/${path}`, data);
  return result;
};
