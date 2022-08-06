import styles from './Details.module.css';
import { createRoutesFromChildren, Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import * as figureService from '../../services/figureService';
import { AuthContext } from '../../contexts/AuthContext';


export const Details = ({
    _id: userId,
    accessToken,
    email,
    username
}) => {
    const { user } = useContext(AuthContext);
    const [figure, setFigure] = useState({});

    const { figureId } = useParams();


    // let figureResult = await figureService.getFigure(figureId);

    // setFigure(figureResult);

    useEffect(() => {
        figureService.getFigure(figureId)
            .then(figure => setFigure(figure))
    }, [])



    const isOwnerOrHasRole = figure.creator?._id == user._id || user?.role;
    const isNotOwner = figure.creator?._id != user._id;
    console.log(user.role);

    const noSecondName = figure.secondName === 'None' ? '': figure.secondName;



    return (

        <section>

            <h1 className={styles.title}>Details</h1>

            <img className={styles['image-url']} src={figure.imageUrl} alt={`${figure.firstName} ${figure.secondName}`} />


            <p className={styles['publication-owner']} >Owner Publication :  {figure.creator?.username}, rank: general</p>

            <h2 className={styles.name}>{figure.firstName} {noSecondName}  {figure.familyName}</h2>
            <p className={styles['person-nickname']}>Nickname: {figure.nickname}</p>
            <p className={styles['date-of-born-and-dead']}>{figure.yearBorn}-{figure.yearDied}</p>

            <p className={styles['description-of-person']}>{figure.description}</p>

            <p className={styles.likes}>Likes: 0</p>
            {isNotOwner &&
                <button>Like</button>
            }

            <p>You have already liked this publication</p>

            {isOwnerOrHasRole &&
                <>
                     <Link to={`/delete/${figure._id}`}>Delete</Link>
                  
                   <Link to={`/edit/${figure._id}`}>Edit</Link>
                 
                </>
            }

            <button className={styles['back-btn']}><Link to="/" className={styles['link-style']}>Back</Link></button>




        </section>
    );



}