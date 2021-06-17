<template>
  <v-app>
    <Carousel :response="responseData" />
  </v-app>
</template>

<script>
import Carousel from "./components/CarouselVuetify/Carousel.vue";
import config from "../config";
import axios from "axios";

export default {
  name: "home",
  components: { Carousel },
  data() {
    return {
      loading: true,
      responseData: [],
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      axios
        .get("https://api.flickr.com/services/rest", {
          params: {
            method: "flickr.photosets.getPhotos",
            api_key: config.api_key,
            extras: "url_l",
            page: 1,
            photoset_id: "72157719420687933",
            format: "json",
            nojsoncallback: 1,
            per_page: 30,
          },
        })
        .then((response) => {
          console.log(response.data.photoset);
          this.responseData = response.data.photoset.photo;
        });
    },
  },
};
</script>
<style scoped></style>;
