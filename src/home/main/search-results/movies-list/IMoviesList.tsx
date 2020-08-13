import React from 'react';
import MoviesListItem from './movies-list-item/MoviesListItem';
import { IMoviesItem } from './IMoviesItem';

const IMoviesList = (props: { movies: IMoviesItem[] }) => {
    return (
      <ul className="movies-list">
          {
              props.movies.map((moviesItem: IMoviesItem) =>
              <li className="movies-list-item" key={moviesItem.id}>
                  <MoviesListItem movie={moviesItem}/>
              </li>)
          }
      </ul>
    );
}

export default IMoviesList;
