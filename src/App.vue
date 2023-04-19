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
        });
    },
    searchTv() {
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
          console.error(error);
        });
    },
  }
}
</script>



<template>
  <AppHeader @search="userSearch" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
