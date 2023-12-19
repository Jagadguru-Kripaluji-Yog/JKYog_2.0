import axios, { CreateAxiosDefaults } from 'axios';

export const api = axios.create({
  baseURL: 'https://prod-strapi.jkyog.org/api/',
} as CreateAxiosDefaults);
