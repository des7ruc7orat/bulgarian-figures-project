import { Navigate,useNavigate } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from '../../services/authService';

export const Logout = ()=>{

    const navigate = useNavigate();
    const {userLogout,user} = useContext(AuthContext);

    authService.logout(user.accessToken)
    .then(()=>{
        userLogout();
        navigate('/')
    })
    .catch(()=>{
        navigate('/login')
    });
  

    return null;
    //<Navigate to='/' replace={true}/>
}