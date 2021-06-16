<template>
  <v-app id="app"><Carousel :carouselData="sliderItems" /> </v-app>
</template>

<script>
import Carousel from "./components/CarouselVuetify/Carousel.vue";
export default {
  name: "App",

  components: { Carousel },

  data: () => ({
    sliderItems: [
      { id: 0, image: "0.jpg" },
      { id: 1, image: "1.jpg" },
      { id: 2, image: "2.jpg" },
      { id: 3, image: "3.jpg" },
      { id: 4, image: "4.jpg" },
      { id: 5, image: "5.jpg" },
      { id: 6, image: "6.jpg" },
      { id: 7, image: "7.jpg" },
      { id: 8, image: "8.jpg" },
      { id: 9, image: "9.jpg" },
    ],
  }),
};
</script>

<style scoped>
</style>
