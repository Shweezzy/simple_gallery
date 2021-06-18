<template>
  <div>
    <input type="file" />
    <v-btn rounded type="button" @click="uploadImage">Upload from Flickr</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../config";

export default {
  props: {
    response: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    uploadImage() {
      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=${config.api_key}&extras=url_l&text=nature`
        )
        .then((response) => {
          let imageObj =
            response.data.photos.photo[Math.floor(Math.random() * 100)];
          console.log(imageObj);
          this.response.push({
            id: imageObj.id,
            src: imageObj.url_l,
            thumbnail: imageObj.url_l,
          });
        });
    },
  },
};
</script>

<style>
</style>