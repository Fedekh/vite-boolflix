import { reactive } from "vue";

export const store = reactive({
    myApiKey: "e8d583293f8b235b5fead3bfd3ade0ac",
    apiFilms: "https://api.themoviedb.org/3/search/movie",
    apiTv: "https://api.themoviedb.org/3/search/tv",
    imgPath: "https://image.tmdb.org/t/p/w342",
    filmsArray: [],
    tvArray: [],
    querySearch: "",        // campo di ricerca
    stars:5,                // max numero di valutazione in stelle
    errorMessage: "",       // messaggio di errore
    showSearchBar: false,   // mostra/nascondi barra di ricerca
});




{/* <section class="film container mt-3">
<h2 class="mb-4 text-white">SERIE TV</h2>
<div class="row row-cols-lg-5 mx-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
    <div class="card mb-4 d-xs-flex flex-column justify-content-center" v-for="elemento in store.tvArray">
        <div class="copertina">
            <img :src="`${store.imgPath}${elemento.poster_path}`" alt="">
        </div>
        <div class="infoo text-white flex-column my-2 py-4">
            <p v-if="!elemento.poster_path">Spiacenti, immagine non disponibile</p>
            <p>Titolo:  {{ elemento.title }}</p>
            <p>Titolo originale:  {{ elemento.original_title }}</p>
            <p>Lingua:  
                <span v-if="elemento.original_language !== en"
                    :class="`fi fi-${elemento.original_language} fis`"></span>
                <span v-else class="fi fi-us fis"></span>
            </p>
            <p class="text-white">  Voto: {{elemento.vote_average.toFixed(1) }}</p>
            <p class="text-white">  Stelle:
                <span v-for="i in store.stars">  
                    <i
                        :class="((i <= Math.round(elemento.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i>
                </span>
            </p>
        </div>
    </div>
</div>
</section> */}