import React, {useCallback, useState} from 'react';
import { IMoviesItem } from '@components/search-results/movies-list/IMoviesItem';
import CloseBtn, { CloseBtnSizes } from '@components/shared/close-btn/CloseBtn';
import { openPopup} from "@store/moviePopups/actions";
import {MOVIE_POPUPS_MAP} from "@store/moviePopups/types";
import styles from './MoviesListItem.module.scss';
import Utils from "@components/Utils";
import defaultMovieImage from '@assets/default-movie.png'
import Link from "next/link";

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
          <div className={styles.imageContainer}>
              <div onClick={toggleOnDropdown}
                   className={!isDropdownToggled ? styles.dotBtn : styles.hiddenMask}/>
              <div className={isDropdownToggled ? styles.dotBtnDropdown : styles.hiddenMask}>
                  <ul className={styles.dotBtnDropdownList}>
                      <li className={styles.dotBtnDropdownListCloseItem}>
                          <CloseBtn clickHandler={toggleOffDropdown}
                                    size={CloseBtnSizes.SMALL}/>
                      </li>
                      <li className={styles.dotBtnDropdownListItem}
                          onClick={openEditMoviePopup}>
                          Edit
                      </li>
                      <li className={styles.dotBtnDropdownListItem}
                          onClick={openDeleteMoviePopup}>
                          Delete
                      </li>
                  </ul>
              </div>
              <img className={styles.moviesImage}
                   src={imageSource}
                   onError={imageLoadErrorHandler}
                   alt=""/>
          </div>
          <div className={styles.movieDescription}>
              <Link href={'/film/[filmId]'}
                    as={`/film/${movie.id}`}>
                  <a className={styles.movieDescriptionTitle}>
                      {movie.title}
                  </a>
              </Link>
              <div className={styles.movieDescriptionYear}>
                  {Utils.getReleaseYear(movie.releaseDate)}
              </div>
          </div>
          <span className={styles.moviesSubDescription}>
              {movie.genres}
          </span>
      </>
    );
};

export default React.memo(MoviesListItem);
