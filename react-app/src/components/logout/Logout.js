import { Navigate,useNavigate } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from '../../services/authService';

const Logout = ()=>{

    const navigate = useNavigate();
    const {userLogout} = useContext(AuthContext);

    authService.logout()
    .then(()=>{
        userLogout();
        navigate('/')
    })
    .catch(()=>{
        navigate('/')
    });
  

    return null
    //<Navigate to='/' replace={true}/>
}