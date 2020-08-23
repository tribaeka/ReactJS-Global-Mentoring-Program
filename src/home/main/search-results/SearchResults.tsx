import React from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import IMoviesList from './movies-list/IMoviesList';
import { IMoviesItem } from './movies-list/IMoviesItem';

const testData: IMoviesItem[] = [
    {
        id: 0,
        title: 'Pulp Fiction',
        year: 2004,
        subTitle: 'Action & Adventure',
        imagePath: '',
        movieURL: 'google.com'
    },
    {
        id: 1,
        title: 'Bohemian Rhapsody',
        year: 2003,
        subTitle: 'Drama, Biography, Music',
        imagePath: '',
        movieURL: 'google.com'
    },
    {
        id: 2,
        title: 'Kill Bill: Vol 2',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: '',
        movieURL: 'google.com'
    },
    {
        id: 3,
        title: 'Avengers: War of Infinity',
        year: 2004,
        subTitle: 'Action & Adventure',
        imagePath: '',
        movieURL: 'google.com'
    },
    {
        id: 4,
        title: 'Inception',
        year: 2003,
        subTitle: 'Action & Adventure',
        imagePath: '',
        movieURL: 'google.com'
    },
    {
        id: 5,
        title: 'Reservoir dogs',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: '',
        movieURL: 'google.com'
    },
    {
        id: 6,
        title: 'Reservoir dogs',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: '',
        movieURL: 'google.com'
    },
    {
        id: 7,
        title: 'Reservoir dogs',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: '',
        movieURL: 'google.com'
    }
];

const SearchResults: React.FC = () => {
    return (
      <div className="search-results-container">
          <ResultsCounter moviesFound={testData.length}/>
          <IMoviesList movies={testData}/>
      </div>
    );
}

export default SearchResults;
