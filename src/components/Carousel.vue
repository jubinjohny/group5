<template>
  <section class="carousel">
    <!-- <div id="webshop-hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#webshop-hero-carousel" class="active" data-bs-slide-to="0"></li>
      <li data-bs-target="#webshop-hero-carousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#webshop-hero-carousel" data-bs-slide-to="2"></li>
    </ol> -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="img-fluid"
          src="@/assets/iphone13.gif"
          width="100%"
          alt="First slide"
        />
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
.img-fluid {
  min-width: 800px !important;
}
ol.carousel-indicators li {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}
ol.carousel-indicators li.active {
  background: #dbf0fa;
}
</style>
