<template>
  <v-app><Carousel :carouselData="sliderItems" /> </v-app>
</template>

<script>
import Carousel from "./components/CarouselVuetify/Carousel.vue";
export default {
  name: "App",

  components: { Carousel },

  data: () => ({}),
};
</script>
