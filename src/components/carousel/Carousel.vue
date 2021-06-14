<template>
  <div class="qwe">
    <button @click="prevSlide" :disabled="!checkPrev">Prev</button>
    <div class="wrapper">
      <div
        class="carousel"
        :style="{ 'margin-left': '-' + 100 * currentSlide + '%' }"
      >
        <CarouselItem
          v-for="item in carouselData"
          :key="item.id"
          :itemData="item"
        ></CarouselItem>
      </div>
    </div>
    <button @click="nextSlide" :disabled="!checkNext">Next</button>
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
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) this.currentSlide--;
      console.log(this.currentSlide);
    },
    nextSlide() {
      this.currentSlide++;

      console.log(this.currentSlide);
    },
  },
  computed: {
    checkPrev() {
      if (this.currentSlide === 0) return false;
      else return true;
    },
    checkNext() {
      if (this.currentSlide >= this.carouselData.length - 1) return false;
      else return true;
    },
  },
};
</script>

<style>
.qwe {
  display: flex;
  text-align: center;
}
.qwe button {
  height: 30px;
}
.wrapper {
  max-width: 800px;
  height: 600px;
  margin: auto;
  overflow: hidden;
}
.carousel {
  display: flex;
}
</style>