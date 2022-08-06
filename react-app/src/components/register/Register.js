import { useEffect, useState,useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

import styles from './Register.module.css';



export const Register = () => {

    const navigate = useNavigate();

    const {register} = useContext(AuthContext);
    
    const [values,setValues] = useState({
        email:'',
        username:'',
        password:'',
        repeatPassword:'',
    })

    const onRegisterHandler = (e)=>{
        e.preventDefault();

        const { ...registerData } = values;

        console.log(registerData);
        authService.register(registerData)
        .then((authData)=>{
            register(authData);
            navigate('/')
        })
    }

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return ( 
        <div className={styles.registerBox} >
            <h2 className={styles.title}>Register</h2>
            <form onSubmit={onRegisterHandler}>


                <label 
                className={styles.registerLabel} htmlFor="email">
                    Email:
                    </label>

                <input className={styles.input} type="email"
                    name="email" id="email"
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="john@abv.bg"
          
                />

                <label className={styles.registerLabel} htmlFor="username">Username:</label>

                <input className={styles.input} type="username"
                    name="username" id="username"
                    value={values.username}
                    onChange={changeHandler}
                    placeholder="johnyto123"
                />

                <label className={styles.registerLabel} htmlFor="password" >Password:</label>

                <input className={styles.input} type="password"
                    name="password" id="password"
                    value={values.password}
                    onChange={changeHandler}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />

                <label className={styles.registerLabel} htmlFor="repeat-password" >Repeat password:</label>

                <input className={styles.input} type="password"
                    name="repeatPassword" id="repeat-password"
                    value={values.repeatPassword}
                    onChange={changeHandler}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />

                <div className={styles.btnDiv}>
                    <button className={styles.registerBtn} type="submit" >register user!</button>
                </div>

            </form>
        </div>


        // <Container id='main-container' className='d-grid h-100'>
        //     <Row className="justify-content-center my-5 ">

        //         <Form method='POST' >
        //             <FormGroup >
        //                 <FormLabel>Email</FormLabel>
        //                 <FormControl size='sm' name='email' type='email' placeholder='johny@abv.bg'></FormControl>
        //             </FormGroup>

        //             <FormGroup  >
        //                 <FormLabel >Username</FormLabel>
        //                 <FormControl size='sm' name='username' type='username' placeholder='johny123'></FormControl>
        //             </FormGroup>

        //             <FormGroup >
        //                 <FormLabel>Enter password</FormLabel>
        //                 <FormControl size='sm' name='password' type='password' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'></FormControl>
        //             </FormGroup>

        //             <FormGroup >
        //                 <FormLabel>Enter repeat password</FormLabel>
        //                 <FormControl size='sm' name='repeatPassword' type='password' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'></FormControl>
        //             </FormGroup>

        //             <Button variant="primary" type="submit">
        //                 Submit
        //             </Button>
        //         </Form>
        //     </Row>
        // </Container>
    );
}