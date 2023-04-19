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
        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            <h2 mb-4>FILM</h2>
            <ul v-for="elemento in store.filmsArray">
                <li>{{ elemento.title }}</li>
                <li>{{ elemento.original_title }}</li>
                <li>{{ elemento.original_language }}</li>
                <li>{{ elemento.vote_average }}</li>
            </ul>
        </div>
    </section>

    <section class="serie container">
        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
            <h2 mb-4>SERIE TV</h2>
            <ul v-for="elemento in store.TvArray">
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
.container{
    cursor: pointer;
    .row {
        border: 1px solid red;
        color: white;
        // height: 400px;
    }
}
</style>
