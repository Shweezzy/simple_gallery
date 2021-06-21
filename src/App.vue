<template>
  <v-app>
    <Lingallery :response="responseData" />
    <!-- <Carousel :response="responseData" /> -->
  </v-app>
</template>

<script>
import Lingallery from "./components/Lingallery.vue";

// import Carousel from "./components/CarouselVuetify/Carousel.vue";
import config from "../config";
import axios from "axios";

export default {
  name: "home",
  components: { Lingallery },
  data() {
    return {
      loading: true,
      responseData: [],
      previewImage: null,
    };
  },
  created() {
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
          this.responseData = response.data.photoset.photo;
        });
    },
  },
};
</script>
<style scoped></style>;
