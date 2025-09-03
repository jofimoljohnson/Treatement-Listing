// import axios from 'axios'


// const api = axios.create({
// baseURL: '/api', 
// headers: {
// 'Content-Type': 'application/json',
// },
// })


// export default api


// Simulating API calls with localStorage
const STORAGE_KEY = "treatments";

export const getTreatments = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return Promise.resolve(data ? JSON.parse(data) : []);
};

export const addTreatment = (treatment) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  data.push(treatment);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return Promise.resolve(treatment);
};

export const deleteTreatment = (id) => {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  data = data.filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return Promise.resolve(id);
};

export const clearAll = () => {
  localStorage.removeItem(STORAGE_KEY);
  return Promise.resolve();
};
