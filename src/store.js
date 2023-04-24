import { reactive } from "vue";

export const store = reactive({
    imgPath: "https://image.tmdb.org/t/p/w342",       // path per immagini film e serie tv
    myApiKey: "e8d583293f8b235b5fead3bfd3ade0ac",     // api key per richieste api
    api:"https://api.themoviedb.org/3",               // url base per richieste api
    apiFilms: "/search/movie",                        // path per richieste api film
    apiTv: "/search/tv",                              // path per richieste api serie tv
    apiFilmGeneri: "/genre/movie/list",               // path per richieste api generi film
    apiSerieGeneri: "/genre/tv/list",                 // path per richieste api generi serie tv
    filmsArray: [],                // array di film
    tvArray: [],                   // array di serie tv
    filmGeneriArray: [],           // array di generi film
    serieGeneriArray: [],          // array di generi serie tv
    filmGeneri: "",                // generi film selezionati
    serieGeneri: "",               // generi serie tv selezionati
    querySearch: "",               // campo di ricerca
    stars:5,                       // max numero di valutazione in stelle
    errorMessage: "",              // messaggio di errore
    loading: false,                // stato di caricamento,
    film:false,                    // stato di ricerca film
    serie:false                    // stato di ricerca serie tv
});

