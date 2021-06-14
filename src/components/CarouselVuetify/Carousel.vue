<template>
  <v-carousel
    :continuous="false"
    :cycle="false"
    height="400"
    hide-delimiter-background
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
    </template>
    <v-carousel-item v-for="(slide, i) in sliderItems" :key="i">
      <v-row class="fill-height" align="center" justify="center">
        <img :src="require('../../assets/images/' + slide)" alt="" />
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    carouselData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliderItems: ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    };
  },
};
</script>

<style scoped>
.v-window-item {
  width: 800px;
}
</style>