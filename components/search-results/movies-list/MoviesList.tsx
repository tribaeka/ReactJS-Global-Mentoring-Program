import React from 'react';
import MoviesListItem from './movies-list-item/MoviesListItem';
import { IMoviesItem } from './IMoviesItem';
import styles from './moviesList.module.scss';
import {openPopup} from "@store/moviePopups/actions";

interface IMoviesListProps {
    movies: IMoviesItem[];
    openPopup?: typeof openPopup
}

const MoviesList: React.FC<IMoviesListProps> = ({ movies, openPopup }) => {
    return (
      <ul className={styles.moviesList}>
          {
              movies.map((moviesItem: IMoviesItem) =>
              <li className={styles.moviesListItem}
                  key={moviesItem.id}>
                  <MoviesListItem movie={moviesItem}
                                  openPopup={openPopup}/>
              </li>)
          }
      </ul>
    );
};

export default React.memo(MoviesList);
