import React from 'react';
import MoviesListItem from './movies-list-item/MoviesListItem';
import { IMoviesItem } from './IMoviesItem';

interface IMoviesListProps {
    movies: IMoviesItem[];
}

const IMoviesList: React.FC<IMoviesListProps> = ({ movies }) => {
    return (
      <ul className="movies-list">
          {
              movies.map((moviesItem: IMoviesItem) =>
              <li className="movies-list-item" key={moviesItem.id}>
                  <MoviesListItem movie={moviesItem}/>
              </li>)
          }
      </ul>
    );
}

export default IMoviesList;
