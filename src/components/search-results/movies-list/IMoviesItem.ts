export interface IMoviesItem {
    budget?: number;
    genres: string;
    id: number;
    overview: string;
    posterPath: string;
    releaseDate: string;
    revenue?: number;
    runtime: number;
    tagline?: string;
    title: string;
    voteAverage: number;
    voteCount?: number;
}

export interface IMoviesServerItem {
    budget?: number;
    genres: string[];
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    revenue?: number;
    runtime: number;
    tagline?: string;
    title: string;
    vote_average: number;
    vote_count?: number;
}
