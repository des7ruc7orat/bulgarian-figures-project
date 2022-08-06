import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Create.module.css';

import { useInputChange } from '../../form-handler-function/useInputChange';
import { useState } from 'react';

import * as figureService from '../../services/figureService'
import { AuthContext } from '../../contexts/AuthContext';


export const Create = ({
    figureCreateHandler
}) => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstName: "",
        secondName: "",
        familyName:"",
        yearBorn: "",
        yearDied: "",
        nickname: "",
        imageUrl: "",
        occupation: "",
        description: "",
    });



    const [input, handleInputChange] = useInputChange()

    const [errors, setErrors] = useState({});

    const { user } = useContext(AuthContext);

    const minLength = (e, bound) => {
        //  console.log(values[e.target.name].length < bound);
        if (values[e.target.name].length >= bound) {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        }

    }
    //values[e.target.name].match(regExp)
    const imgValidate = (e) => {
        //const regExp = new RegExp(/^https?/gm);
        const regExp = /^https?/gm;
        const match = !(values[e.target.name].match(regExp));
        // console.log(regExp.test(values[e.target.name]));
        if (match) {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        } else if (match) {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        }
    }


    const isFromValid = !Object.values(errors).some(x => x);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async(e) => {
        e.preventDefault();
        const { ...figureData } = values;

    
       // figureCreateHandler(figureData, user.accessToken);
      // const res = await figureService.createFigure(figureData, user.accessToken);
     //  console.log(res.result);

     try {
        const res = await  figureService.createFigure(figureData,user.accessToken);
        navigate('/')
     } catch (error) {
        throw Error(error);
     }
  
   
   //const result = await res.json()
   

    
      


    }
    return (
        <>
            <h1 className={styles.homeTitle}>Create a Person</h1>

            <div className={styles.registerBox} >
                {/* <h2 className={styles.title}>Register</h2> */}
                <form onSubmit={submitHandler}>


                    <label className={styles.labelCreate} htmlFor="firstName">First Name:</label>
                    <input className={styles.input} type="text" name="firstName" id="firstName" value={values.firstName} onChange={changeHandler} onBlur={(e) => minLength(e, 3)} placeholder="Georgi" />
                    {errors.firstName &&
                        <p className={styles.error}>
                            First name should be at least 3 characters long!
                        </p>
                    }

                    <label className={styles.labelCreate} htmlFor="secondName">Second Name:</label>
                    <input className={styles.input} type="text" name="secondName" 
                    id="secondName" value={values.secondName} 
                    onChange={changeHandler} 
                    onBlur={(e) => minLength(e, 5)} placeholder="Stoykov" />
                    {errors.secondName &&
                        <p className={styles.error}>
                            The second name should be atleast 5 characters long
                        </p>
                    }

                    <label className={styles.labelCreate} htmlFor="familyName">Family Name:</label>
                    <input className={styles.input} type="text" name="familyName" id="familyName" value={values.familyName} 
                    onChange={changeHandler} 
                    onBlur={(e) => minLength(e, 5)} placeholder="Popovich" />
                    {errors.familyName &&
                        <p className={styles.error}>
                            The family name name should be atleast 5 characters long
                        </p>
                    }

                    <label className={styles.labelCreate} htmlFor="yearBorn">Year born:</label>
                    <input className={styles.input} type="number" name="yearBorn" id="yearBorn" value={values.yearBorn} onChange={changeHandler} onBlur={handleInputChange} placeholder="1821" />

                    <label className={styles.labelCreate} htmlFor="yearDied">Year of death:</label>
                    <input className={styles.input} type="number" name="yearDied" id="yearDied" value={values.yearDied} onChange={changeHandler} onBlur={handleInputChange} placeholder="1867" />


                    <label className={styles.labelCreate} htmlFor="nickname">nickname:</label>
                    <input className={styles.input} type="text"
                        name="nickname" id="nickname"
                        value={values.nickname} onChange={changeHandler}
                        onBlur={(e) => minLength(e, 2)} placeholder="Georgi Sava Rakovski"
                    />
                    {errors.nickname &&
                        <p className={styles.error}>
                            Nickname should not be shorter than 2 symbols
                        </p>
                    }

                    <label className={styles.labelCreate} htmlFor="imageUrl">Image link:</label>

                    <input className={styles.input} type="text" name="imageUrl"
                        id="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        onBlur={(e) => imgValidate(e)}
                        placeholder="starts with http or https"
                    />
                    {errors.imageUrl &&
                        <p className={styles.error}>
                            The Image-Url shoud start with http or https
                        </p>
                    }


                    <label className={styles.labelCreate} htmlFor="occupation">Occupation:</label>

                    <input className={styles.input}
                        type="text" name="occupation" id="occupation"
                        value={values.occupation} onChange={changeHandler}
                        onBlur={(e) => minLength(e, 6)}
                        placeholder="Freedom fighter, writer, publiciest, ideolog"
                    />

                    {errors.occupation &&
                        <p className={styles.error}>
                            Occupation length should be more than 6 symbols long
                        </p>
                    }

                    <label className={styles.labelCreate} htmlFor="description">Description:</label>
                    <textarea className={styles['text-area']} type="text"
                        name="description" id="description"
                        value={values.description} onChange={changeHandler}
                        onBlur={(e) => minLength(e, 20)}
                        placeholder="Founder of the organized national..."
                    />
                    {errors.description &&
                        <p className={styles.error}>
                            Lazy description, the length must be more than 20 characters long
                        </p>
                    }


                    <div className={styles.btnDiv}>
                        <input type="submit" className={styles.registerBtn} ></input>
                    </div>

                </form>
            </div>
        </>
    );
}