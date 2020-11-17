import React, {useCallback, useState} from 'react';
import { IMoviesItem } from '@components/search-results/movies-list/IMoviesItem';
import CloseBtn, { CloseBtnSizes } from '@components/shared/close-btn/CloseBtn';
import { openPopup} from "@store/moviePopups/actions";
import {MOVIE_POPUPS_MAP} from "@store/moviePopups/types";
import './moviesListItem.scss';
import Utils from "@components/Utils";
import defaultMovieImage from '@assets/default-movie.png'
import {Link} from "react-router-dom";

interface MoviesListItemProps {
    movie: IMoviesItem;
    openPopup: typeof openPopup;
}

const MoviesListItem: React.FC<MoviesListItemProps> = ({ movie, openPopup }) => {
    const [imageSource, setImageSource] = useState(movie.posterPath ? movie.posterPath : defaultMovieImage);
    const [isDropdownToggled, setIsDropdownToggled] = useState(false);
    const openEditMoviePopup = () => {
        openPopup(MOVIE_POPUPS_MAP.EDIT, 'EDIT MOVIE', movie);
        setIsDropdownToggled(false);
    };
    const openDeleteMoviePopup = () => {
        openPopup(MOVIE_POPUPS_MAP.DELETE, 'DELETE MOVIE', movie);
        setIsDropdownToggled(false);
    };
    const toggleOnDropdown = useCallback(() => setIsDropdownToggled(true), []);
    const toggleOffDropdown = useCallback(() => setIsDropdownToggled(false), []);
    const imageLoadErrorHandler = useCallback(() => setImageSource(defaultMovieImage), []);

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
              <img className="movies-image"
                   src={imageSource} onError={imageLoadErrorHandler} alt=""/>
          </div>
          <div className="movie-description">
              <Link to={`/film/${movie.id}`} className="movie-description-title">
                  {movie.title}
              </Link>
              <div className="movie-description-year">
                  {Utils.getReleaseYear(movie.releaseDate)}
              </div>
          </div>
          <span className="movies-sub-description">
              {movie.genres}
          </span>
      </>
    );
};

export default React.memo(MoviesListItem);
