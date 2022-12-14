import styles from './FigureItem.module.css';
import { Link } from 'react-router-dom';

export const FigureItem = ({
    figure
})=>{

    return(
        <div className={styles.card}>

        <img className={styles.image} src={figure.imageUrl} alt='{props.firstName}' />

        <div>
            <h2 className={styles.name}>{figure.firstName} {figure.familyName}</h2>
            <p className={styles.description}>{figure.description}</p>
        </div>

        <div>
            <button className={styles['details-btn']}><Link to={`/details/${figure._id}`} className={styles['link-style']}>Details</Link></button>
               
        </div>

    </div>
    );
}