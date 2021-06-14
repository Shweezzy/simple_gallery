<template>
  <div class="carousel-item">
    <img :src="require('../../assets/images/' + itemData.image)" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
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
img {
  width: 800px;
  height: 500px;
}
</style>