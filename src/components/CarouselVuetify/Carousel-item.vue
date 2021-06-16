<template>
  <div class="images__container">
    <img
      v-for="slide in carouselData"
      :key="slide.id"
      :src="require('../../assets/images/' + slide.image)"
      alt=""
    />
  </div>
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
    return {};
  },
};
</script>

<style>
.images__container {
  display: flex;
  width: 933px;
  margin: auto;
}
.images__container img {
  width: 73.2px;
  margin: 10px;
}
</style>