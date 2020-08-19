import './../../../../../typings.d.ts'
import React, { useState, MouseEvent } from 'react';
import { IMoviesItem } from '../IMoviesItem';
import defaultMovieImage from './../../../../../assets/default-movie.png'
import CloseBtn, { CloseBtnSizes } from '../../../../../shared/closeBtn/CloseBtn';

interface MoviesListItemProps {
    movie: IMoviesItem;
}

const MoviesListItem: React.FC<MoviesListItemProps> = ({ movie }) => {
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
                          <CloseBtn clickHandler={toggleOffDropdown} size={CloseBtnSizes.SMALL}/>
                      </li>
                      <li className="dot-btn-dropdown-list-item">Edit</li>
                      <li className="dot-btn-dropdown-list-item">Delete</li>
                  </ul>
              </div>
              <img className="movies-image" src={defaultMovieImage} alt=""/>
          </div>
          <div className="movie-description">
              <span className="movie-description-title">
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

export default MoviesListItem;
