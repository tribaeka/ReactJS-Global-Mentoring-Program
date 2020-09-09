import React, { useState, MouseEvent } from 'react';
import { IMoviesItem } from '@components/home/main/search-results/movies-list/IMoviesItem';
import defaultMovieImage from '@assets/default-movie.png'
import CloseBtn, { CloseBtnSizes } from '@components/shared/closeBtn/CloseBtn';
import {connect} from 'react-redux';
import { openPopup} from "@store/moviePopups/actions";
import {MOVIE_POPUPS_MAP} from "@store/moviePopups/types";
import './moviesListItem.scss';
import {useMovieDetails} from "../../../../../contexts";

interface MoviesListItemProps {
    movie: IMoviesItem;
    openPopup(name: string, title: string, movie?: IMoviesItem): void;
}

const MoviesListItem: React.FC<MoviesListItemProps> = ({ movie, openPopup }) => {
    const [isDropdownToggled, setIsDropdownToggled] = useState(false);
    const updateMovieDetails = useMovieDetails().setMovie;

    function openEditMoviePopup() {
        openPopup(MOVIE_POPUPS_MAP.EDIT, 'EDIT MOVIE', movie);
    }

    function openDeleteMoviePopup() {
        openPopup(MOVIE_POPUPS_MAP.DELETE, 'DELETE MOVIE', movie);
    }

    function toggleOnDropdown(event: MouseEvent<HTMLDivElement>): void {
        event.preventDefault();
        setIsDropdownToggled(true);
    }

    function toggleOffDropdown(event: MouseEvent<HTMLDivElement>): void {
        event.preventDefault();
        setIsDropdownToggled(false);
    }

    function openMovieDetails() {
        updateMovieDetails(movie);
    }

    return (
      <>
          <div className="image-container">
              <div onClick={toggleOnDropdown}
                   className={!isDropdownToggled ? 'dot-btn' : 'hidden-mask'}/>
              <div className={isDropdownToggled ? 'dot-btn-dropdown' : 'hidden-mask'}>
                  <ul className="dot-btn-dropdown-list">
                      <li className="dot-btn-dropdown-list-close-item">
                          <CloseBtn clickHandler={toggleOffDropdown} size={CloseBtnSizes.SMALL}/>
                      </li>
                      <li className="dot-btn-dropdown-list-item" onClick={openEditMoviePopup}>Edit</li>
                      <li className="dot-btn-dropdown-list-item" onClick={openDeleteMoviePopup}>Delete</li>
                  </ul>
              </div>
              <img className="movies-image" src={defaultMovieImage} alt=""/>
          </div>
          <div className="movie-description">
              <span className="movie-description-title" onClick={openMovieDetails}>
                  {movie.title}
              </span>
              <span className="movie-description-year">
                  {movie.year}
              </span>
          </div>
          <span className="movies-sub-description">
              {movie.subTitle}
          </span>
      </>
    );
}

export default connect(null, {openPopup})(MoviesListItem);
