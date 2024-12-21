import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

 const axiosSecure = axios.create({
  baseURL: "http://localhost:5001",
});
const useAxiosSecure = () => {

  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);



  // use interseptor for sending token in HEADER
  // ===========================================
  axiosSecure.interceptors.request.use(function (config) {
    console.log("request stopped by interseptors");
    
    config.headers.authorization = `Bearer ${localStorage.getItem('access-token')}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) =>{
    const status = error.response.status;
    if (status === 401 || status === 403) {
      
      await logOut()
      navigate('/login')
    }
    return Promise.reject(error)
  })
// ======================================================


    return axiosSecure;
};

export default useAxiosSecure;