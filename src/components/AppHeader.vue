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
  }
}

</script>

--------------------------------------------------------------------------------------------------

<template>
    <section>
        <div class="container d-flex justify-content-between align-items-center">
                <a class="logo" href="">
                    <img src="../assets/img/Boolfix.jpg.png" alt="">
                </a>
            <SearchBarApp @search="$emit('search')"/>
        </div>
    </section>
</template>

--------------------------------------------------------------------------------------------------

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

section{
    background-color: $bg-color;
}

</style>
