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
    }
  }

</script>

<!-- --------------------------------------------------------------------------------------------------------- -->

<template>
    <div class="research">
        <div >
            <input @keyup.enter="$emit('search')" v-model.trim="store.querySearch" class="input rounded-pill" type="text"
                id="title-search" placeholder="Premi invio per cercare">
        </div>
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
    padding-inline: 35px;
    font-size: 16px;
  }

}</style>
