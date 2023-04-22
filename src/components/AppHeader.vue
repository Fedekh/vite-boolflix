<script>
import SearchBarApp from "./SearchBarApp.vue";
import { store } from "../store";

export default {
    name: "AppHeader",
    emits: [
        "search"
    ],
    components: {
        SearchBarApp
    },
    data() {
        return {
            store,
            genere: ''    //variabile per il genere
        }
    },
    methods: {
        reload() {                //ricaricare la pagina
            location.reload();
        },
        sceltaGenere(genere) {
            if (genere === 'film') {            //se il genere è film
                this.genere = 'film';
                this.store.serie = false
                this.store.film = true
            }
            if (genere === 'serie') {           //se il genere è serie
                this.genere = 'serie';
                this.store.film = false
                this.store.serie = true
            }
        }

    }
}

</script>

--------------------------------------------------------------------------------------------------

<template>
    <section>
        <div class="container d-flex justify-content-between align-items-center">
            <div class="wrapper d-flex align-items-center">
                <a class="logo" :href="reload"><img src="../assets/img/Boolfix.jpg" alt=""></a>
                <section class="filtraggio">
                    <button class="rounded-pill mx-4 border-0" @click="sceltaGenere('film')"
                        :class="{ 'selected': genere === 'film' }">FILM</button>
                    <button class=" rounded-pill mx-2 border-0" @click="sceltaGenere('serie')"
                        :class="{ 'selected': genere === 'serie' }">SERIE TV</button>
                </section>
            </div>
            <SearchBarApp @search="$emit('search')" />
        </div>
    </section>
</template>

--------------------------------------------------------------------------------------------------

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

section {
    background-color: $bg-color;

    .selected {
        background-color: #4CAF50;
        color: white;
        outline: none;
    }
}
</style>
