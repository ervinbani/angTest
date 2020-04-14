export interface FilmData {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<FilmDetail>;
}
export interface FilmDetail {
    popularity: number;
    vote_count: number;
    video: false
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: [12]
    title: string;
    vote_average: 6;
    overview: string;
    release_date: Date;

}