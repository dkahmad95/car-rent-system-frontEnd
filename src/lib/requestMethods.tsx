import axios from "axios";

const BASE_URL = "https://car-rental.serveusers.com";

export const TOKEN = () => {
  const persistedData = localStorage.getItem("persist:root");


  if (persistedData) {
    const parsedData = JSON.parse(persistedData);
    const user = JSON.parse(parsedData?.user || "{}").currentUser || {};
    const token = user.token?.split("|")[1];

    return token;
  }
  return null;
};

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer " + TOKEN();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
