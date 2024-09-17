import axios from 'axios';

const API_URL = 'http://localhost:8080/api/items';

export const getItems = () => {
  return axios.get(API_URL);
};

export const getItemById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createItem = (item) => {
  return axios.post(API_URL, item);
};

export const updateItem = (id, item) => {
  return axios.put(`${API_URL}/${id}`, item);
};

export const deleteItem = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
