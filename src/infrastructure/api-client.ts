import axios from "axios";

const initApiClient = () => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3000",
  });

  return apiClient;
};

export default initApiClient;
