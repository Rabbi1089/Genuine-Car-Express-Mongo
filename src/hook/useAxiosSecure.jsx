import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials : true

})


const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();

    useEffect( () => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {console.log('response from interceptor ' , error.response )
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('log out the user')
                logOut()
                .then(() => {
                  navigate( '/')
                }).catch((error) =>  {
                  console.log(error)
                });
            }
        })

    } , [])



    return axiosSecure


};

export default useAxiosSecure;

//https://axios-http.com/docs/interceptors
