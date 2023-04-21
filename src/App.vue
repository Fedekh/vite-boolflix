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
  <h2 class="begin mt-5 container text-center" v-if="!store.filmsArray.length">Setta il genere e la categoria che preferisci e inizia la tua ricerca</h2>
  <div v-else class="webapp">
    <AppMain  />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
.begin {
  color: rgb(16, 222, 16);
  animation: pulse 1s ease-in-out infinite;


@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.webapp{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
}
</style>
