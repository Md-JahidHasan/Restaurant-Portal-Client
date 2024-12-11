import axios from "axios";

 const axiosSecure = axios.create({
  baseURL: "http://localhost:5001",
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function (config) {
    config.headers.authorization = `Bearer ${localStorage.getItem('access-token')}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  })
    return axiosSecure;
};

export default useAxiosSecure;