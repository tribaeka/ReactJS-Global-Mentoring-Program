import React from 'react';
import styles from './ResultsCounter.module.scss';

interface ResultsCounterProps {
    moviesFound: number;
}

const ResultsCounter: React.FC<ResultsCounterProps> = ({ moviesFound }) => {
    return (
        <p>
            <span className={styles.resultsCounter}>
                {moviesFound}
            </span>
            <span className={styles.resultsCounterDescription}>
                movies found
            </span>
        </p>
    )
};

export default React.memo(ResultsCounter);
