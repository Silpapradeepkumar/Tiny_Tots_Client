import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';


export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json' 
  }
});


export const admin_api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("admin-token")}`,
    'Content-Type': 'application/json' 
  }
});
export const teacher_api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("teacher-token")}`,
    'Content-Type': 'application/json' 
  }
});

export const doctor_api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("doctor-token")}`,
    'Content-Type': 'application/json' 
  }
});

