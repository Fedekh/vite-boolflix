import { reactive } from "vue";

export const store = reactive({
    myApiKey: "e8d583293f8b235b5fead3bfd3ade0ac",
    apiFilms: "https://api.themoviedb.org/3/search/movie",
    apiTv: "https://api.themoviedb.org/3/search/tv",
    imgPath: "https://image.tmdb.org/t/p/w342",
    filmsArray: [],
    TvArray: [],
    querySearch: ""
});