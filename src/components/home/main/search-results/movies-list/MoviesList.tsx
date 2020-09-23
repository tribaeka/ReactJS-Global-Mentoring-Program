import React from 'react';
import MoviesListItem from './movies-list-item/MoviesListItem';
import { IMoviesItem } from './IMoviesItem';
import './moviesList.scss';

interface IMoviesListProps {
    movies: IMoviesItem[];
}

const MoviesList: React.FC<IMoviesListProps> = ({ movies }) => {
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
};

export default MoviesList;
