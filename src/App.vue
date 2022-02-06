
<template>
  <div class="home">
    <ProductPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductPage from "@/components/ProductPage.vue";

export default {
  name: "Home",
  components: {
    ProductPage,
  },
};
</script>
<style>
#app {
  font-family: Kumbh Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
