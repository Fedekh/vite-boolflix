<script>
import { store } from "../store";
import axios from "axios";

export default {
    name: 'AppInfo',
    props: {
        elemento: Object
    },
    data() {
        return {
            store,
            castArray: [],
            generiArray: [],
            showInfo: false
        }
    },
    methods: {
        cast() {
            if (this.store.film) {
                return this.filmCast();
            } else if (this.store.serie) {
                return this.serieCast();
            }
        },
        filmCast() {
            this.showInfo = true;
            if (this.castArray.length === 0) {
                axios
                    .get(`${this.store.api}/movie/${this.elemento.id}/credits`, {
                        params: {
                            api_key: this.store.myApiKey
                        }
                    })
                    .then(resp => {
                        for (let i = 0; i < 5; i++) {
                            console.log(resp);
                            this.castArray.push(resp.data.cast[i].original_name);
                        }
                    });
                    console.log(this.castArray);
            }
        },
        serieCast() {
            if (this.castArray.length === 0) {
                this.showInfo = true;
                axios
                    .get(`${this.store.api}/tv/${this.elemento.id}/credits`, {
                        params: {
                            api_key: this.store.myApiKey
                        }
                    })
                    .then(resp => {
                        for (let i = 0; i < 5; i++) {
                            this.castArray.push(resp.data.cast[i].original_name);

                        }
                    })
            };
        },
        controllo(element){
            let carlo="";
            for (let i=0 ; i < this.store.filmGeneriArray.length; i++){
                console.log(this.store.filmGeneriArray[i]);
                if (this.store.filmGeneriArray[i].id === element){
                    carlo += this.store.filmGeneriArray[i].name
                }
            }
            return carlo
        }
    }
}
</script>


<template>
    <section class="moreinfo">
        <button class="btn btn-success mb-2 text-center" @click="cast">Dettagli</button>
        <ul v-if="this.castArray.length !== 0" id="info text-start">
            <li>
                <h5 class="my-2 py-2 text-start">Attori : </h5>
            </li>
            <li v-for="elemento in castArray">{{ elemento }}</li>
        </ul>
        <div v-if="this.castArray.length !== 0">

            <h2 v-for="number in elemento.genre_ids">
                {{ controllo(number) }}
            </h2>
        </div>
        <!-- <ul v-if="this.castArray.length !== 0">
            <li>
                <h5>Generi correlati :</h5>
            </li>
            <li v-for="generi in filmGeneriArray" >{{ generi[0]}} </li>
        </ul> -->
        <h5 class="mt-3" v-show="this.showInfo && this.castArray.length === 0">Siamo spiacenti, non ci sono ulteriori
            informazioni</h5>

    </section>
</template>


<style lang="scss" scoped>
@use "../style/general.scss";

.moreinfo {
    position: relative;

    h5 {
        color: rgb(228, 235, 22);
    }

    ul {
        margin-left: -30px;

    }

    button {
        &::before {
            content: "";
            position: absolute;
            top: -8px;
            left: 0;
            width: 90%;
            height: 1px;
            border-top: 1px dashed green;
        }

        &::after {
            content: "";
            position: absolute;
            top: 48px;
            left: 0;
            width: 90%;
            height: 1px;
            border-top: 1px dashed green;
        }
    }
}
</style>