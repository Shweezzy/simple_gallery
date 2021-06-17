<template>
  <div class="images__container">
    <img class="img" :src="responseData.url_l" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    responseData: {
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
  width: 65px;
  height: 60px;
  margin-right: 8.4px;
  margin-top: 5px;
  filter: brightness(40%);
}
.images__container:hover {
  filter: brightness(100%);
  transform: scale(1.1);
}
</style>