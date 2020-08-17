import './../../../../../typings.d.ts'
import React, { useState, MouseEvent } from 'react';
import { IMoviesItem } from '../IMoviesItem';
import defaultMovieImage from './../../../../../assets/default-movie.png'

const MoviesListItem = (props: {movie: IMoviesItem}) => {
    const [isDropdownToggled, setIsDropdownToggled] = useState(false);

    function toggleOnDropdown(event: MouseEvent<HTMLDivElement>): void {
        event.preventDefault();
        setIsDropdownToggled(true);
    }

    function toggleOffDropdown(event: MouseEvent<HTMLDivElement>): void {
        event.preventDefault();
        setIsDropdownToggled(false);
    }

    return (
      <>
          <div className="image-container">
              <div onClick={toggleOnDropdown}
                   className={!isDropdownToggled ? 'dot-btn' : 'hidden-mask'}/>
              <div className={isDropdownToggled ? 'dot-btn-dropdown' : 'hidden-mask'}>
                  <ul className="dot-btn-dropdown-list">
                      <li className="dot-btn-dropdown-list-close-item">
                          <div onClick={toggleOffDropdown}
                               className="dot-btn-dropdown-list-close-btn">
                              &times;
                          </div>
                      </li>
                      <li className="dot-btn-dropdown-list-item">Edit</li>
                      <li className="dot-btn-dropdown-list-item">Delete</li>
                  </ul>
              </div>
              <img className="movies-image" src={defaultMovieImage} alt=""/>
          </div>
          <div className="movie-description">
              <span className="movie-description-title">
                  {props.movie.title}
              </span>
              <span className="movie-description-year">
                  {props.movie.year}
              </span>
          </div>
          <span className="movies-sub-description">
              {props.movie.subTitle}
          </span>
      </>
    );
}

export default MoviesListItem;
