import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3e074b6d14a7158d77bae02b97da066e";


const withbaseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`; /*string que é o endpoint dinamico*/

export class MovieService {
//método que vai buscar os filmes - essa classe não vai construir um objeto, vai executar metodos.
    static getMovies() {
        return axios(withbaseURL("movie/popular"));
    }

    static getMovieDetails(id) {
        return axios(withbaseURL(`movie/${id}`));
    }

    static searchMovies(movie) {
        return axios(withbaseURL("search/movie") + `&query=${movie}`);

    }
}