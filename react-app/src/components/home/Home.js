import { useEffect, useState } from 'react';

import styles from './Home.module.css';

import { FigureItem } from './figure-item/Figure.Item';
import * as figureService from '../../services/figureService';

export const Home = () => {

    const [allFigures, setAllFigures] = useState([]);

    useEffect(()=>{
        figureService.getAll()
			.then(figures => setAllFigures(figures));
    },[])
    // console.log(figures);

    
    return (

        <>
            <h1 className={styles.homeTitle}>Bulgarian Figures</h1>

          {allFigures.map(figure => <FigureItem key={figure._id} figure={figure}/>)}
         

        </>
    );
}