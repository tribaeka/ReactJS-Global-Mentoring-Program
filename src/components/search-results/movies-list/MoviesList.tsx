import React from 'react';
import MoviesListItem from './movies-list-item/MoviesListItem';
import { IMoviesItem } from './IMoviesItem';
import './moviesList.scss';
import {openPopup} from "@store/moviePopups/actions";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateMovieDetails} from "@store/movieDetails/actions";

interface IMoviesListProps {
    movies: IMoviesItem[];
    openPopup?: typeof openPopup
    updateMovieDetails?: typeof updateMovieDetails
}

const MoviesList: React.FC<IMoviesListProps> = ({ movies, openPopup, updateMovieDetails }) => {
    return (
      <ul className="movies-list">
          {
              movies.map((moviesItem: IMoviesItem) =>
              <li className="movies-list-item" key={moviesItem.id}>
                  <MoviesListItem movie={moviesItem} openPopup={openPopup} updateMovieDetails={updateMovieDetails}/>
              </li>)
          }
      </ul>
    );
};

const mapDispatchToProps = { openPopup, updateMovieDetails };

export default compose(
    connect(null, mapDispatchToProps),
    React.memo
)(MoviesList);
