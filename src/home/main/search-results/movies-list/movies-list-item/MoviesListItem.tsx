import React from 'react';
import { IMoviesItem } from '../IMoviesItem';

const MoviesListItem = (props: {movie: IMoviesItem}) => {
    const defaultImagePath = 'https://media.comicbook.com/files/img/default-movie.png';

    return (
      <>
          <img src={defaultImagePath} width={320} height={450} alt=""/>
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
