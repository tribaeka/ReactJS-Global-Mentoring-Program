import React, {useContext, useState} from "react";
import {IMoviesItem} from "../home/main/search-results/movies-list/IMoviesItem";

interface IMovieDetailsContext {
    movie: IMoviesItem,
    setMovie(movie: IMoviesItem): void
}

const MovieDetailsContext = React.createContext<IMovieDetailsContext | undefined>(undefined);

export const useMovieDetails = (): IMovieDetailsContext => useContext(MovieDetailsContext);


export const MovieDetailsProvider: React.FC = ({ children }) => {
    const [movieDetails, setMovieDetails] = useState<IMoviesItem | undefined>(undefined);

    return (
        <MovieDetailsContext.Provider value={{
            movie: movieDetails,
            setMovie(movie: IMoviesItem) {
                setMovieDetails(movie)
            }
        }}>
            { children }
        </MovieDetailsContext.Provider>
    );
};