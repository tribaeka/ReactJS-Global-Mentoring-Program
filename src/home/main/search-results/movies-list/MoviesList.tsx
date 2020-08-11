import React from 'react';
import MoviesListItem from './movies-list-item/MoviesListItem';

const MoviesList = () => {
    return (
      <ul>
          <li><MoviesListItem/></li>
          <li><MoviesListItem/></li>
          <li><MoviesListItem/></li>
          <li><MoviesListItem/></li>
          <li><MoviesListItem/></li>
      </ul>
    );
}

export default MoviesList;
