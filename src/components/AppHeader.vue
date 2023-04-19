<script>
import SearchBarApp from "./SearchBarApp.vue";
import { store } from "../store";

export default {
    name: "AppHeader",
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
            <div class="logo">
                <img src="../assets/img/Boolfix.jpg.png" alt="">
            </div>
            <SearchBarApp />
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
