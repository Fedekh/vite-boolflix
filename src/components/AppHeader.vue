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
            store
        }
    },
    methods: {
        reload() {                //ricaricare la pagina
            location.reload();
        },
        sceltaGenere(argom) {
            if (argom === 'film') {
                this.store.serie = false
                this.store.film = true
            }
            if (argom === 'serie') {
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
            <div class="wrapper">
                <a class="logo" :href="reload"><img src="../assets/img/Boolfix.jpg" alt=""></a>
                <button class="rounded-pill mx-4 border-0" @click="sceltaGenere('film')">FILM</button>
                <button class=" rounded-pill mx-2 border-0" @click="sceltaGenere('serie')">SERIE TV</button>
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
}
</style>
