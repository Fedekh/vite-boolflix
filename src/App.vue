<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    userSearch() {
      if (this.store.querySearch === "") {
        console.log("error");
      } else {
        this.searchFilm();
        this.searchTv();
        this.store.querySearch = "";
      }
    },
    searchFilm() {
      this.store.loading = true;
      axios
        .get(this.store.apiFilms, {
          params: {
            api_key: this.store.myApiKey,
            query: this.store.querySearch
          }
        })
        .then(resp => {
          console.log(resp);
          this.store.filmsArray = resp.data.results;
        })
        .catch(error => {
          console.error(error);
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina o inserire un nuovo valore numerico"
        }).finally(() => { this.store.loading = false; });
    },
    searchTv() {
      this.store.loading = true;
      axios
        .get(this.store.apiTv, {
          params: {
            api_key: this.store.myApiKey,
            query: this.store.querySearch
          }
        })
        .then(resp => {
          console.log(resp);
          this.store.tvArray = resp.data.results;
        })
        .catch(error => {
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina o inserire un nuovo valore numerico"
        }).finally(() => { this.store.loading = false; });
    },
  }
}
</script>



<template>
  <AppHeader @search="userSearch" />
  <h2 class="begin text-white mt-5 text-center" v-if="!store.filmsArray.length">INIZIA LA TUA RICERCA...</h2>
  <AppMain v-else />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
