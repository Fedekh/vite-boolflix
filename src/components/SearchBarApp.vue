<script >
export default{
    name:"SearchBarApp"
}

</script>

<!-- --------------------------------------------------------------------------------------------------------- -->

<template>
<div class="search">
    <label class="text-white mx-3" for="title-search">Premi invio per cercare</label>
  <input class="input rounded-pill"  type="text" id="title-search" placeholder="Cerca un titolo">
  <!-- <img class="img" src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg" alt=""> -->
</div>
</template>

<!-- --------------------------------------------------------------------------------------------------------- -->

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;


.search {
  position: relative;
  display: inline-block;
  label{
    font-size: 12px;
  }
  input {
    // width: 0px;
    height: 34px;
    background-color: #eee7e7;
    box-shadow: none;
    color: #000000;
    border: 1px solid transparent;
    padding-left: 35px;
    font-size: 16px;
    // transition: 0.3s ease all;
    // &.toggle {
    //   width: 240px;
    //   border-color: #fff;
    // }
  }
//   img {
//     width: 18px;
//     left: 8px;
//     top: 50%;
//     transform: translateY(-50%);
//     position: absolute;
//   }
}
</style>
