import React from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import MoviesList from './movies-list/MoviesList';
import { IMoviesItem } from './movies-list/IMoviesItem';
import './searchResults.scss';

const OVERVIEW_MOCK = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias animi aut autem corporis doloribus eius enim eveniet, excepturi facere fuga fugiat illo illum impedit minima nam nemo nisi obcaecati officia placeat porro quis reiciendis repellat, reprehenderit sed soluta tenetur veritatis vitae voluptates? Accusamus adipisci asperiores aspernatur consectetur cupiditate dignissimos doloremque ducimus eaque earum esse fugit id itaque laudantium, magnam nam, nisi odio, optio rerum saepe sint tempora tempore unde voluptas? Error, ullam, voluptate!';
const IMAGE_PATCH_MOCK = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomicbook.com%2Fgaming%2Fnews%2Fmetal-gear-solid-movie-jordan-vogt-roberts-kojima-update%2F&psig=AOvVaw1UW7DLyfzqPxgR2bIn8IvI&ust=1599140434530000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDDjcDMyusCFQAAAAAdAAAAABAD';

const testData: IMoviesItem[] = [
    {
        id: 0,
        title: 'Pulp Fiction',
        year: 2004,
        subTitle: 'Action & Adventure',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    },
    {
        id: 1,
        title: 'Bohemian Rhapsody',
        year: 2003,
        subTitle: 'Drama, Biography, Music',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    },
    {
        id: 2,
        title: 'Kill Bill: Vol 2',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    },
    {
        id: 3,
        title: 'Avengers: War of Infinity',
        year: 2004,
        subTitle: 'Action & Adventure',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    },
    {
        id: 4,
        title: 'Inception',
        year: 2003,
        subTitle: 'Action & Adventure',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    },
    {
        id: 5,
        title: 'Reservoir dogs',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    },
    {
        id: 6,
        title: 'Reservoir dogs',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    },
    {
        id: 7,
        title: 'Reservoir dogs',
        year: 1994,
        subTitle: 'Oscar winning Movie',
        imagePath: IMAGE_PATCH_MOCK,
        movieURL: 'google.com',
        overview: OVERVIEW_MOCK,
        runtime: 154
    }
];

const SearchResults: React.FC = () => {
    return (
      <div className="search-results-container">
          <ResultsCounter moviesFound={testData.length}/>
          <MoviesList movies={testData}/>
      </div>
    );
}

export default SearchResults;
