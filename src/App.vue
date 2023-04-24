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
    userSearch() {                      //funzione per la ricerca dell'utente               
      if (this.store.querySearch === "") {
        console.log("error");
      } else {
        this.searchFilm();                //richiamo le funzioni per la ricerca dei film e delle serie tv
        this.searchTv();                 //richiamo le funzioni per la ricerca dei film e delle serie tv
        this.searchGeneriFilm();          //richiamo le funzioni per la ricerca dei generi dei film e delle serie tv
        this.searchGeneriSerie();         //richiamo le funzioni per la ricerca dei generi dei film e delle serie tv
        this.store.querySearch = "";
      }
    },
    searchFilm() {                        //funzione per la ricerca dei film
      this.store.loading = true;
      axios
        .get(`${this.store.api}${this.store.apiFilms}`, {
          params: {
            api_key: this.store.myApiKey,         //richiamo l'api key
            query: this.store.querySearch       //richiamo la query di ricerca
          }
        })
        .then(resp => {
          console.log(resp);
          this.store.filmsArray = resp.data.results;      //assegno i risultati della ricerca alla variabile filmsArray
        })
        .catch(error => {
          console.error(error);
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina o inserire un nuovo valore numerico"  //se non trova nulla stampa questo messaggio
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
          console.log(resp);
          this.store.tvArray = resp.data.results;
        })
        .catch(error => {
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina o inserire un nuovo valore numerico"
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
          this.store.filmGeneriArray = resp.data.genres;
        })
        .catch(error => {
          error
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina o inserire un nuovo valore numerico"
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
          this.store.errorMessage = "Oops, quacosa è andato storto...prova a ricaricare la pagina o inserire un nuovo valore numerico"
        })
        .finally(() => { this.store.loading = false; });
    },
  }
}
</script>

<template>
  <AppHeader @search="userSearch" />        
  <div v-if="!store.filmsArray.length && !store.tvArray.length" class="presentazione">    
    <h2 class="begin mt-5 container text-center">Scegli il genere e la categoria che preferisci e inizia la tua ricerca
    </h2>

  </div>
  <div v-else class="webapp">
    <div v-if="store.errorMessage ===''" class="wrapper">
      <AppMain />                         
    </div>
    <h3 v-else>{{ store.errorMessage }}</h3>
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

  .webapp {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
