<template>
  <div>
    <v-carousel
      :continuous="false"
      :cycle="false"
      hide-delimiter-background
      hide-delimiters
    >
      <template v-slot:prev="{ on, attrs }">
        <v-btn plain large icon @click="prev" v-bind="attrs" v-on="on"
          >&lt;</v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn plain large icon @click="next" v-bind="attrs" v-on="on"
          >&gt;</v-btn
        >
      </template>
      <v-carousel-item v-for="slide in response" :key="slide.id">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <img class="carousel__img" :src="slide.url_l" alt="" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="carousel__item">
      <CarouselItem :responseData="response" />
    </div>
    <Buttons :responseData="response" />
  </div>
</template>

<script>
import CarouselItem from "./Carousel-item.vue";
import Buttons from "../Buttons.vue";

export default {
  components: {
    CarouselItem,
    Buttons,
  },
  props: {
    response: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      counter: 0,
      listOfImages: [],
    };
  },
  methods: {
    next(e) {
      this.counter++;
    },
    prev() {
      this.counter--;
    },
  },
};
</script>

<style scoped>
.v-item-group {
  width: 726px;
  margin: auto;
  margin-top: 1px;
}
.v-btn__content {
  display: none;
}
.v-icon.v-icon {
  align-items: end;
}
.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  display: none;
}
.carousel__item {
  display: flex;
  width: 726px;
  margin: auto;
}
.carousel__img {
  position: absolute;
}
</style>