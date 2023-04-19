<script >
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
      if (this.store.querySearch==="") {
        console.log("error");
      }else{
        this.searchFilm();
        this.searchTv();
        this.store.querySearch = "";
      }
    },
    searchFilm() {
      axios
        .get(this.store.apiFilms, {
          api_key: this.store.myApiKey,
          query: this.store.querySearch
        })
        .then(resp => {
          this.store.filmsArray = resp.data.results
        })
        .catch(error => {
          console.error(error);
        });
    },
    searchTv() {
      axios
        .get(this.store.apiTv, {
          api_key: this.store.myApiKey,
          query: this.store.querySearch
        })
        .then(resp => {
          this.store.TvArray = resp.data.results
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
}
</script>



<template>
  <AppHeader @search="searchFilm" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
