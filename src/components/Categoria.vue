<script>
import { store } from "../store";

export default {
  name: "Categoria",
  
  data() {
    return {
      store
    };
  },
  methods:{
    change(){}
  }
  
};

</script>

<!-- ►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►► -->

<template>
  <!-- CATEGORIE FILMS -->
  <section v-if="store.film">
    <select v-model="store.filmGeneri" v-show="store.filmGeneriArray.length" class="rounded-pill my-5 border-0 p-1"
    name="select" id="film-select">
    <option value="">Scegli una categoria</option>
    <option v-for="categoria in store.filmGeneriArray" :key="categoria.id" :value="categoria.id">{{ categoria.name }}
    </option>
  </select>
</section>
  <!-- /CATEGORIE FILMS -->


  <!-- CATEGORIE SERIE -->
  <section v-if="store.serie">
    <select v-model="store.serieGeneri" v-show="store.serieGeneriArray.length" class="rounded-pill my-5 border-0 p-1"
      name="select" id="film-select">
      <option value="">Scegli una categoria</option>
      <option v-for="categoria in store.serieGeneriArray" :key="categoria.id" :value="categoria.id">{{ categoria.name }}
      </option>
    </select>
  </section>
  <!-- /CATEGORIE SERIE -->

</template>


<!-- ►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►► -->



<style lang="scss" scoped>
@use "../style/general.scss";

select {
  background-image: linear-gradient(to bottom, #7f7e7e 0%, #181819 100%);
  box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.7);

  color: #d91a27;
  font-size: 16px;
  height: 40px;
  width: 200px;
  padding: 0 20px;
  position: relative;

  // 
  & option {
    background-color: #171581;
    color: #15d361f0;
  }

  &:focus {
    outline: none;
  }
}
</style>