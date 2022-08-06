import { useEffect, useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


import * as authService from '../../services/authService';
import styles from './Login.module.css'

export const Login = () => {
    const {login} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const [values, setValues]   = useState({
        email: '',
        password: '',

    })



    const onLoginHandler = (e) => {
        e.preventDefault();
        
        const { ...loginData } = values;
        console.log(loginData);
        authService.login(loginData)
        .then((authData)=>{
            
            login(authData)

            navigate('/')
        })
        .catch(err=>{
            //TODO: show notification
            console.log(err.message);
        })
       

      //  navigate('/')
    }

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className={styles.loginBox} >
            <h2 className={styles.title}>Login</h2>
            <form onSubmit={onLoginHandler}>


                <label className={styles.loginLabel} htmlFor="email">Email:</label>

                <input className={styles.input} type="email"
                    name="email"
                    id="email"
                    value={values.email}
                  onChange={changeHandler}
                    placeholder="john@abv.bg"
                />



                <label className={styles.loginLabel} htmlFor="password" >Password:</label>

                <input className={styles.input} type="password"
                    name="password" id="password"
                    value={values.password}
                    onChange={changeHandler}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />



                <div className={styles.btnDiv}>
                    <button className={styles.loginBtn} type="submit" >login user!</button>
                </div>

            </form>
        </div>




    );
}