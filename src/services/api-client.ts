import axios, { AxiosRequestConfig } from "axios";
import Current from "../entities/Current";

export interface FetchResponse {
  lat: number;
  lon: number;
  timezone: string;
  current: Current;
}

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/onecall",
  params: {
    lat: 44.34,
    lon: 10.99,
    appid: "108e80965134a978314294942dd68be6",
  },
});

class APIClient {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
