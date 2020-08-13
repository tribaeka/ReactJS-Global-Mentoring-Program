import React from 'react';

const ResultsCounter = (props: { moviesFound: number }) => {
    return (
        <p>
            <span className="results-counter">{props.moviesFound}</span>
            <span className="results-counter-description">movies found</span>
        </p>
    )
}

export default ResultsCounter;
