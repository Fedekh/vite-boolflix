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
    userSearch() {                                //funzione per la ricerca dell'utente               
      if (this.store.querySearch === "") {
        console.log("error");
      } else {
        this.searchFilm();
        this.searchTv();
        this.searchGeneriFilm();
        this.searchGeneriSerie();
        this.store.querySearch = "";
      }
    },
    searchFilm() {                                //funzione per la ricerca dei film
      this.store.loading = true;
      axios
        .get(`${this.store.api}${this.store.apiFilms}`, {
          params: {
            api_key: this.store.myApiKey,         //richiamo l'api key
            query: this.store.querySearch         //richiamo la query di ricerca
          }
        })
        .then(resp => {
          this.store.filmsArray = resp.data.results;      //assegno i risultati della ricerca alla variabile filmsArray

        })
        .catch(error => {
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina"  //se non trova nulla stampa questo messaggio
        })
        .finally(() => { this.store.loading = false; });
    },
    searchTv() {                        //funzione per la ricerca delle serie tv                          
      this.store.loading = true;
      axios
        .get(`${this.store.api}${this.store.apiTv}`, {
          params: {
            api_key: this.store.myApiKey,
            query: this.store.querySearch
          }
        })
        .then(resp => {
          this.store.tvArray = resp.data.results;
        })
        .catch(error => {
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina"
        }).finally(() => { this.store.loading = false; });
    },
    searchGeneriFilm() {              //funzione per la ricerca dei generi dei film           
      axios
        .get(`${this.store.api}${this.store.apiFilmGeneri}`, {
          params: {
            api_key: this.store.myApiKey
          }
        })
        .then((resp) => {
          console.log(resp);
          this.store.filmGeneriArray = resp.data.genres;

        })
        .catch(error => {
          error
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina"
        })
        .finally(() => { this.store.loading = false; });
    },
    searchGeneriSerie() {            //funzione per la ricerca dei generi delle serie tv              
      axios
        .get(`${this.store.api}${this.store.apiSerieGeneri}`, {
          params: {
            api_key: this.store.myApiKey
          }
        })
        .then((resp) => {
          this.store.serieGeneriArray = resp.data.genres;
        })
        .catch(error => {
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina";
          console.log(error);
        })
        .finally(() => { this.store.loading = false; });
    },
  }
}
</script>

<!-- ►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►► -->

<template>
  <AppHeader @search="userSearch" />
  <div v-show="!store.filmsArray.length && !store.tvArray.length" class="presentazione">
    <h2 v-show="store.errorMessage === ''" class="begin mt-5 container text-center">Scegli se FILM o SERIE TV, digita un titolo e cerca
    </h2>
  </div>
  <h3 class="container text-center mt-5" v-show="store.errorMessage !== ''">{{ store.errorMessage }}</h3>
  <div class="webapp">
    <div v-if="!store.loading" class="wrapper">
      <AppMain />
    </div>
  </div>
</template>

<!-- ►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►► -->

<style lang="scss">
@use "./style/general.scss";

h3 {
  color: rgb(10, 226, 154);

}

.begin {
  color: rgb(246, 37, 0);
o
  .webapp {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
