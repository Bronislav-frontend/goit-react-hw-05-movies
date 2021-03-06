import axios from "axios";

const API_KEY = '3b429ed2576db14b0ae472b1fbac82a3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingFilms() {
     const {
      data: { results },
    } = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    return results;
  }
  
  export async function getFilmsByQuery(query) {
    const {
      data: { results },
    } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return results;
  }
  
  export async function getFilmById(movieId) {
    const { data } = await axios(`/movie/${movieId}?api_key=${API_KEY}`);
    return data;
  }
  
  export async function getCastInfo(movieId) {
      const {
      data: { cast },
    } = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
    return cast;
  }
  
  export async function getReviewsInfo(movieId) {
      const {
      data: { results },
    } = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return results;
  }