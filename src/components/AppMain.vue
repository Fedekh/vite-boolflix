<script>
import { store } from "../store";
import Loader from "./Loading.vue";

import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "AppMain",
    components: {
        Loader
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
<!-- -------------------------------------------------------------------------------------------- -->
<template>
    <Loader v-if="store.loading" />

    <div v-else class="wrapper">

        <!-- FILM -->
        <section v-if="store.film" class="film container mt-3">
            <h2 class="mb-4 text-center">Trovati {{ store.filmsArray.length }} FILM</h2>
            <div class="row d-flex flex-nowrap">
                <div class="card mb-4 d-xs-flex flex-column justify-content-center" v-for="elemento in store.filmsArray">
                    <div class="copertina">
                        <img class="notfound" v-if="!elemento.poster_path" src="../assets/img/notfound.jpg" alt="">
                        <img class="poster" v-else :src="`${store.imgPath}${elemento.poster_path}`" alt="">
                    </div>
                    <div class="infoo flex-column text-white my-2 py-1">
                        <p>
                            <span class="inf">Titolo :</span> {{ elemento.title }}
                        </p>
                        <p>
                            <span class="inf">Titolo Originale :</span> {{ elemento.original_title }}
                        </p>
                        <p class="d-flex ">
                            <span class="inf">Lingua :</span>
                        <div v-if="this.arrayLingue.includes(elemento.original_language)">
                            <img id="flag" :src="getFlagPath(elemento.original_language)" alt="">
                        </div>
                        <div v-else>Lingua non trovata</div>
                        </p>
                        <p class="text-white"> <span class="inf">Stelle :</span>
                            <span v-for="voto in store.stars">
                                <i
                                    :class="((Math.ceil(elemento.vote_average / 2 >= voto)) ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i>
                            </span>
                        </p>
                        <p><span class="inf">Overview :</span>
                            <span v-if="elemento.overview !== ''">{{ elemento.overview }}</span>
                            <span v-else> Ci Spiace, non è disponibile</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- /FILM -->


        <!-- SERIE TV -->

        <section v-if="store.serie" class="serie container mt-3">
            <h2 class="mb-4 text-center">Trovate {{ store.tvArray.length }} SERIE TV</h2>
            <div class="row d-flex flex-nowrap">
                <div class="card mb-4 d-xs-flex flex-column justify-content-center" v-for="elemento in store.tvArray">
                    <div class="copertina">
                        <img class="notfound" v-if="!elemento.poster_path" src="../assets/img/notfound.jpg" alt="">
                        <img class="poster" v-else :src="`${store.imgPath}${elemento.poster_path}`" alt="">
                    </div>
                    <div class="infoo flex-column text-white my-2 py-1">
                        <p>
                            <span class="inf">Titolo :</span> {{ elemento.title }}
                        </p>
                        <p>
                            <span class="inf">Titolo Originale :</span> {{ elemento.original_title }}
                        </p>
                        <p class="d-flex ">
                            <span class="inf">Lingua :</span>
                        <div v-if="this.arrayLingue.includes(elemento.original_language)">
                            <img id="flag" :src="getFlagPath(elemento.original_language)" alt="">
                        </div>
                        <div v-else>Lingua non trovata</div>
                        </p>
                        <p class="text-white"> <span class="inf">Stelle :</span>
                            <span v-for="voto in store.stars">
                                <i
                                    :class="((Math.ceil(elemento.vote_average / 2 >= voto)) ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i>
                            </span>
                        </p>
                        <p><span class="inf">Overview : </span>
                            <span v-if="elemento.overview !== ''"> {{ elemento.overview }}</span>
                            <span v-else> Ci Spiace, non è disponibile</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- /SERIE TV -->

    </div>
</template>

<!-- -------------------------------------------------------------------------------------------- -->

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
            color: #d91a27;
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
                background-color: rgb(95, 106, 99);
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
                    /* mostra la scrollbar orizzontale solo quando necessario */
                    overflow-x: auto;
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
}
</style>
