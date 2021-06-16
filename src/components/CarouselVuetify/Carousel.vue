<template>
  <div>
    <!-- <v-carousel
    :continuous="false"
    :cycle="false"
    hide-delimiter-background
    hide-delimiters
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn color="white" v-bind="attrs" v-on="on">
        <span>&lt;</span>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn color="white" v-bind="attrs" v-on="on">
        <span>&gt;</span>
      </v-btn>
    </template>
    <v-carousel-item v-for="(slide, i) in carouselData" :key="i">
      <v-row class="fill-height" align="center" justify="center">
        <img :src="require('../../assets/images/' + slide)" alt="" />
      </v-row>
    </v-carousel-item>
  </v-carousel> -->
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
      <v-carousel-item v-for="slide in carouselData" :key="slide.id">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <img
              width="1000px"
              :src="require('../../assets/images/' + slide.image)"
              alt=""
            />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="carousel__item">
      <CarouselItem
        v-for="slide in carouselData"
        :key="slide.id"
        :carouselData="slide"
      />
    </div>
  </div>
</template>

<script>
import CarouselItem from "./Carousel-item.vue";

export default {
  components: {
    CarouselItem,
  },
  props: {
    carouselData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    next() {
      let listOfImages = document.querySelectorAll(".img");
      this.counter++;
      listOfImages[this.counter - 1].style.filter = `brightness(${"40%"})`;
      listOfImages[this.counter].style.filter = `brightness(${"100%"})`;
    },
    prev() {
      let listOfImages = document.querySelectorAll(".img");
      this.counter--;
      listOfImages[this.counter + 1].style.filter = `brightness(${"40%"})`;
      listOfImages[this.counter].style.filter = `brightness(${"100%"})`;
    },
  },
};
</script>

<style scoped>
.v-window-item {
  width: 1000px;
}
.v-item-group {
  width: 60%;
  margin: auto;
  margin-top: 0px;
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
  width: 933px;
  margin: auto;
}
</style>