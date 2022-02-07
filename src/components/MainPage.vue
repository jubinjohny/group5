<template>
  <div id="main">
    <div><Carousel /></div>
    <div><AboutUs /></div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import AboutUs from "./AboutUs.vue";

export default {
  name: "App",
  components: {
    Carousel,
    AboutUs,
  },
};
</script>
