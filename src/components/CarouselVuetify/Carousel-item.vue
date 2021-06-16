<template>
  <div class="images__container">
    <img
      class="img"
      :id="carouselData.id"
      :src="require('../../assets/images/' + carouselData.image)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    carouselData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.images__container {
  margin: auto;
  transition: transform 0.2s;
}

.images__container img {
  width: 73.2px;
  margin: 10px;

  filter: brightness(40%);
}
.images__container:hover {
  filter: brightness(100%);
  transform: scale(1.3);
}
</style>