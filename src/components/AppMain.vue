<script>
import { store } from "../store";
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "AppMain",

    data() {
        return {
            store
        }
    },
    methods: {
        getImgPath(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href;
        }
    }
}

</script>
<!-- -------------------------------------------------------------------------------------------- -->
<template>
    <section class="film container mt-3">
        <h2 class="mb-4 text-white">FILM</h2>
        <div class="row row-cols-lg-5 mx-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            <div class="card mb-4 d-xs-flex flex-column justify-content-center" v-for="elemento in store.filmsArray">
                <div class="copertina">
                    <img class="notfound" v-if="!elemento.poster_path" src="../assets/img/notfound.jpg" alt="">
                    <img class="poster" v-else :src="`${store.imgPath}${elemento.poster_path}`" alt="">
                </div>
                <div class="infoo flex-column text-white my-2 py-1">
                    <p v-if="!elemento.poster_path">Spiacenti, immagine non disponibile</p>
                    <p>Titolo: {{ elemento.title }}</p>
                    <p class="card-text">Titolo originale: {{ elemento.original_title }}</p>
                    <p>Lingua:
                        <span v-if="elemento.original_language !== en"
                            :class="`fi fi-${elemento.original_language} fis`"></span>
                        <span v-else class="fi fi-us fis"></span>
                    </p>
                    <p class="text-white"> Voto: {{ elemento.vote_average.toFixed(1) }}</p>
                    <p class="text-white"> Stelle:
                        <span v-for="voto in store.stars">
                            <i :class="((Math.round(elemento.vote_average /2 >= voto)) ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="serie container mt-3">
        <h2 class="mb-4 text-white">SERIE TV</h2>
        <div class="row row-cols-lg-5 mx-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            <div class="card mb-4 d-xs-flex flex-column justify-content-center" v-for="elemento in store.tvArray">
                <div class="copertina">
                    <img class="notfound" v-if="!elemento.poster_path" src="../assets/img/notfound.jpg" alt="">
                    <img class="poster" v-else :src="`${store.imgPath}${elemento.poster_path}`" alt="">
                </div>
                <div class="infoo flex-column text-white my-2 py-1">
                    <p v-if="!elemento.poster_path">Spiacenti, immagine non disponibile</p>
                    <p>Titolo: {{ elemento.title }}</p>
                    <p class="card-text">Titolo originale: {{ elemento.original_title }}</p>
                    <p>Lingua:
                        <span v-if="elemento.original_language !== en"
                            :class="`fi fi-${elemento.original_language} fis`"></span>
                        <span v-else class="fi fi-us fis"></span>
                    </p>
                    <p class="text-white"> Voto: {{ elemento.vote_average.toFixed(1) }}</p>
                    <p class="text-white"> Stelle:
                        <span v-for="voto in store.stars">
                            <i :class="((Math.round(elemento.vote_average /2 >= voto)) ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- -------------------------------------------------------------------------------------------- -->

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables.scss" as *;

.container {
    position: relative;
    
    .row {
        color: white;
        .card {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.205);
            width: 220px;
            .notfound{
                width: 250px;
                object-fit: cover;
            }
            
            i {
                color: yellow;
            }
            .copertina{
                display: block;
            }
            .infoo{
                display: none;
                padding: 20px 0;
            }
            &:hover .copertina{
                display: none;
            }
            &:hover .infoo{
                display: flex;
            }
        }   
    }}
</style>
