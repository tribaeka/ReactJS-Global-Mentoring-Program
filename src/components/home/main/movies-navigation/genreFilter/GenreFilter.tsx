import React from 'react';

const GenreFilter: React.FC = () => {
    return (
        <ul className="genre-list">
            <li className="genre-list-item">ALL</li>
            <li className="genre-list-item">DOCUMENTARY</li>
            <li className="genre-list-item">COMEDY</li>
            <li className="genre-list-item">HORROR</li>
            <li className="genre-list-item">CRIME</li>
        </ul>
    )
};

export default GenreFilter;
