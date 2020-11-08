import { IMoviesItem, IMoviesServerItem } from "@components/search-results/movies-list/IMoviesItem";

export const MOVIES_ITEM_MOCK: IMoviesItem = {
    budget: 923000,
    genres: "Adventure, Comedy, Drama",
    id: 962,
    overview: "A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.",
    posterPath: "https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg",
    releaseDate: "1925-06-25",
    revenue: 2500000,
    runtime: 95,
    tagline: "The World's Greatest Laughing Picture!",
    title: "The Gold Rush",
    voteAverage: 7.8,
    voteCount: 411
};

export const MOVIES_SERVICE_ITEM_MOCK: IMoviesServerItem = {
    budget: 923000,
    genres: ["Adventure", "Comedy", "Drama"],
    id: 962,
    overview: "A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.",
    poster_path: "https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg",
    release_date: "1925-06-25",
    revenue: 2500000,
    runtime: 95,
    tagline: "The World's Greatest Laughing Picture!",
    title: "The Gold Rush",
    vote_average: 7.8,
    vote_count: 411
};

export const MOVIES_LIST_MOCK = [
    MOVIES_ITEM_MOCK,
    {
        budget: 92620000,
        genres: "Drama, Science Fiction",
        id: 19,
        overview: "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
        posterPath: "https://image.tmdb.org/t/p/w500/qriaeUUwdmlgethK3aSAx68mG05.jpg",
        releaseDate: "1927-01-10",
        revenue: 650422,
        runtime: 153,
        tagline: "There can be no understanding between the hands and the brain unless the heart acts as mediator.",
        title: "Metropolis",
        voteAverage: 8.1,
        voteCount: 837
    }
];
