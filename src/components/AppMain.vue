<script>
import { store } from "../store";

export default {
    name: "AppMain",

    data() {
        return {
            store
        }
    }
}

</script>
<!-- -------------------------------------------------------------------------------------------- -->
<template>
    <section class="film container mt-3">
        <h2 class="mb-4 text-white">FILM</h2>
        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            <ul v-for="elemento in store.filmsArray">
                <img :src="`${store.imgPath}${elemento.poster_path}`" alt="">
                <h3 v-if="!elemento.poster_path">Spiacenti, immagine non disponibile</h3>

                <li>Titolo:{{ elemento.title }}</li>
                <li>Titolo originale:{{ elemento.original_title }}</li>
                <li>Lingua Originale:{{ elemento.original_language }}</li>
                <li>Voto: {{ elemento.vote_average }}</li>
            </ul>
        </div>
    </section>

    <section class="serie container">
        <h2 class="mb-4 text-white">SERIE TV</h2>
        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            <ul v-for="elemento in store.tvArray">
                <img :src="`${store.imgPath}${elemento.poster_path}`" alt="">

                <li>{{ elemento.title }}</li>
                <li>{{ elemento.original_title }}</li>
                <li>{{ elemento.original_language }}</li>
                <li>{{ elemento.vote_average }}</li>
            </ul>
        </div>
    </section>
</template>

<!-- -------------------------------------------------------------------------------------------- -->

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables.scss" as *;

.container {
    cursor: pointer;

    .row {
        border: 1px solid red;
        color: white;
        // height: 400px;
    }
}
</style>
