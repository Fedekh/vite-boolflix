<script>
import { store } from "../store";
import Loader from "./Loading.vue";
import Categoria from "./Categoria.vue";
import AppInfo from "./AppInfo.vue";


import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "AppMain",
    components: {
        Loader,
        Categoria,
        AppInfo
    },

    data() {
        return {
            store,
            arrayLingue: ["it", "en", "es", "fr", "de", "ja", "us"]
        }
    },
    methods: {
        getFlagPath(name) {
            return new URL(`../assets/img/Flags/${name}.svg`, import.meta.url).href;
        },
    }
}

</script>


<!-- ►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►► -->


<template>
    <Loader v-if="store.loading" />

    <div v-else class="wrapper">

        <!-- FILM -->
        <section v-if="store.film" class="film container mt-3">
            <div v-if="store.filmsArray.length > 0">
                <h2 class="mb-4 rounded-pill text-center">Abbiamo trovato {{ store.filmsArray.length }} film per te</h2>
                <Categoria /> <!-- COMPONENTE CATEGORIA -->
            </div>
            <h2 v-else class="mb-4 text-center"> Ci dispiace, non abbiamo trovato nessun film</h2>

            <div class="row d-flex flex-nowrap">
                <div v-show="store.filmGeneri === '' || elemento.genre_ids.includes(this.store.filmGeneri)"
                    class="card mb-4 d-xs-flex flex-column justify-content-center" v-for="elemento in store.filmsArray"
                    :key="elemento.id">
                    <div class="copertina">
                        <img class="notfound" v-if="!elemento.poster_path" src="../assets/img/notfound.jpg" alt="">
                        <img class="poster" v-else :src="`${store.imgPath}${elemento.poster_path}`" alt="">
                    </div>
                    <div class="infoo flex-column text-white my-2 py-1">
                        <p>
                            <span class="inf">Titolo : </span> {{ elemento.title }}
                        </p>
                        <p>
                            <span class="inf">Titolo Originale : </span> {{ elemento.original_title }}
                        </p>
                        <p class="d-flex ">
                            <span class="inf">Lingua :</span>
                        <div v-if="this.arrayLingue.includes(elemento.original_language)">
                            <img id="flag" :src="getFlagPath(elemento.original_language)" alt="">
                        </div>
                        <div v-else>Lingua non trovata</div>
                        </p>
                        <p class="text-white"> <span class="inf">Stelle : </span>
                            <span v-for="voto in store.stars">
                                <i
                                    :class="((Math.ceil(elemento.vote_average / 2 >= voto)) ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i>
                            </span>
                        </p>
                        <p><span class="inf">Overview : </span>
                            <span v-if="elemento.overview !== ''">{{ elemento.overview }}</span>
                            <span v-else> Ci Spiace, non è disponibile</span>
                        </p>
                        <AppInfo :elemento="elemento" /> <!-- COMPONENTE APPINFO -->
                    </div>
                </div>
            </div>
        </section>
        <!-- /FILM -->


        <!-- SERIE TV -->

        <section v-if="store.serie" class="serie container mt-3">
            <div v-if="store.tvArray.length > 0">
                <h2 class="mb-4 rounded-pill text-center">Abbiamo trovato {{ store.tvArray.length }} serie tv per te</h2>
                <Categoria /> <!-- COMPONENTE CATEGORIA -->
            </div>
            <h2 v-else class="mb-4 text-center"> Ci dispiace, non abbiamo trovato nessuna serie</h2>

            <div class="row d-flex flex-nowrap">
                <div v-show="store.serieGeneri === '' || elemento.genre_ids.includes(this.store.serieGeneri)"
                    class="card mb-4 d-xs-flex flex-column justify-content-center" v-for="elemento in store.tvArray"
                    :key="elemento.id">
                    <div class="copertina">
                        <img class="notfound" v-if="!elemento.poster_path" src="../assets/img/notfound.jpg" alt="">
                        <img class="poster" v-else :src="`${store.imgPath}${elemento.poster_path}`" alt="">
                    </div>
                    <div class="infoo flex-column text-white my-2 py-1">
                        <p>
                            <span class="inf">Titolo : </span> {{ elemento.name }}
                        </p>
                        <p>
                            <span class="inf">Titolo Originale : </span> {{ elemento.original_name }}
                        </p>
                        <p class="d-flex ">
                            <span class="inf">Lingua : </span>
                        <div v-if="this.arrayLingue.includes(elemento.original_language)">
                            <img id="flag" :src="getFlagPath(elemento.original_language)" alt="">
                        </div>
                        <div v-else>Lingua non trovata</div>
                        </p>
                        <p class="text-white"> <span class="inf">Stelle : </span>
                            <span v-for="voto in store.stars">
                                <i
                                    :class="((Math.ceil(elemento.vote_average / 2 >= voto)) ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i>
                            </span>
                        </p>
                        <p><span class="inf">Overview : </span>
                            <span v-if="elemento.overview !== ''">{{ elemento.overview }}</span>
                            <span v-else> Ci Spiace, non è disponibile</span>
                        </p>
                        <AppInfo :elemento="elemento" /> <!-- COMPONENTE APPINFO -->
                    </div>
                </div>
            </div>
        </section>
        <!-- /SERIE TV -->

    </div>
</template>

<!-- ►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►► -->


<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables.scss" as *;

.wrapper {
    height: 460px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    .container {
        position: relative;

        h2 {
            // color: #d91a27;
            color: rgb(4, 212, 4);

        }

        .row {
            overflow-x: auto;

            &::-webkit-scrollbar {
                width: 5px;
                /* imposta lo spessore della scrollbar orizzontale solo per browser Webkit */
                height: 8px;
                /* imposta l'altezza della scrollbar orizzontale solo per browser Webkit */
            }

            &::-webkit-scrollbar-thumb {
                background-color: #d91a27;
                /* imposta il colore del thumb della scrollbar orizzontale solo per browser Webkit */
                border-radius: 8px;
                /* arrotonda i bordi del thumb della scrollbar orizzontale solo per browser Webkit */
            }

            /* Imposta lo sfondo della scrollbar orizzontale */
            &::-webkit-scrollbar-track {
                background-color: rgba($main-color, .2);
                border-radius: 10px;
            }


            .card {
                cursor: pointer;
                background-color: $main-color;
                border: none;
                width: 250px;
                height: 320px;


                i {
                    color: yellow;
                }

                .copertina {
                    display: block;

                    .notfound {
                        width: 250px;
                        object-fit: cover;
                    }

                    .poster {
                        height: 100%;
                    }
                }

                .infoo {
                    display: none;
                    padding: 20px 0;
                    overflow-y: auto;

                    .inf {
                        color: red;
                    }

                    #flag {
                        width: 30px;
                        margin-left: 10px;
                    }
                }

                &:hover .copertina {
                    display: none;
                }

                &:hover .infoo {
                    display: flex;
                    overflow-y: auto;
                }

                &:hover {
                    background-color: rgba(33, 38, 38, 0.5);
                }

                &:hover .infoo::-webkit-scrollbar {
                    width: 5px;
                    /* imposta lo spessore della scrollbar orizzontale solo per browser Webkit */
                }

                &:hover .infoo::-webkit-scrollbar-thumb {
                    background-color: white;
                }

                /* imposta il colore del thumb della scrollbar orizzontale solo per browser Webkit */
                &:hover .infoo::-webkit-scrollbar {
                    width: 5px;
                    /* imposta lo spessore della scrollbar orizzontale solo per browser Webkit */
                    height: 8px;
                    /* imposta l'altezza della scrollbar orizzontale solo per browser Webkit */
                }

                &:hover .infoo::-webkit-scrollbar-thumb {
                    background-color: rgb(86, 168, 10);
                    /* imposta il colore del thumb della scrollbar orizzontale solo per browser Webkit */
                    border-radius: 8px;
                    /* arrotonda i bordi del thumb della scrollbar orizzontale solo per browser Webkit */
                }

                /* Imposta lo sfondo della scrollbar orizzontale */
                &:hover .infoo::-webkit-scrollbar-track {
                    background-color: rgb(100, 97, 97);
                    border-radius: 10px;
                }

            }
        }
    }
}</style>
