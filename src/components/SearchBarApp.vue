<script >
import { store } from "../store";

export default {
    name: "SearchBarApp",
    emits: [
        "search",
    ],
    data() {
        return {
            store           
        }
    },
  methods: {
    hideImage() {
        return this.store.showSearchBar 
    },
    showImage() {
        this.store.showSearchBar = false;
    }
}}

</script>

<!-- --------------------------------------------------------------------------------------------------------- -->

<template>
    <div class="research">
        <div >
            <input @keyup.enter="$emit('search')" v-model.trim="store.querySearch" class="input rounded-pill" type="text"
                id="title-search" placeholder="Cerca un titolo">
            <button @click="$emit('search')" class="mx-4 btn btn-success rounded-pill" for="title-search">Cerca</button>
        </div>
        <!-- <img v-show="!showSearchBar" @click="showSearchBar=true" :class="{store.showSearchBar: 'd-none'}" 
        class="img"
            src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg" alt=""> -->
    </div>
</template>

<!-- --------------------------------------------------------------------------------------------------------- -->

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;


.research {
  position: relative;
  display: inline-block;
  cursor: pointer;

  .input {
    height: 34px;
    background-color: #eee7e7;
    box-shadow: none;
    color: #000000;
    border: 1px solid transparent;
    padding-left: 35px;
    font-size: 16px;
  }
  .d-none{
    transition: all 1s ease-in-out;
  }
  .img {
    width: 40px;
  }

}</style>
