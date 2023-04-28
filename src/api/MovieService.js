import axios from "axios";

const BASE_HTTPS = "http://api.themoviedb.org/3/";
const API_KEY = "3e074b6d14a7158d77bae02b97da066e";


const withBaseHttps = (path) => `${BASE_HTTPS}${path}?api_key=${API_KEY}`; /*string que é o endpoint dinamico*/

export class MovieService {
//método que vai buscar os filmes - essa classe não vai construir um objeto, vai executar metodos.
    static getMovies() {
        return axios(http("movie/popular"));
    }

    static getMovieDetails(id) {
        return axios(http(`movie/${id}`));
    }

    static searchMovies(movie) {
        return axios(http("search/movie") + `&query=${movie}`);

    }
}