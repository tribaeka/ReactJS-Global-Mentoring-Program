import React from 'react';
import './resultsCounter.scss';

interface ResultsCounterProps {
    moviesFound: number;
}

const ResultsCounter: React.FC<ResultsCounterProps> = ({ moviesFound }) => {
    return (
        <p>
            <span className="results-counter">{moviesFound}</span>
            <span className="results-counter-description">movies found</span>
        </p>
    )
}

export default ResultsCounter;
