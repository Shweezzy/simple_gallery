<template>
  <div class="buttons__container">
    <label rounded class="custom-file-upload">
      <input type="file" @change="uploadLocalImage" />
      Upload new image
    </label>
    <label rounded class="custom-file-upload">
      <button rounded type="button" @click="uploadFlickrImage">
        Upload from Flickr
      </button>
    </label>
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
    return {
      objData: [],
    };
  },
  methods: {
    async uploadFlickrImage() {
      await axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=${config.api_key}&extras=url_l&text=nature`
        )
        .then((response) => {
          let imageObj =
            response.data.photos.photo[Math.floor(Math.random() * 100)];
          this.response.push({
            src: imageObj.url_l,
            thumbnail: imageObj.url_l,
            id: imageObj.id,
            caption: "Delete",
            alt: Math.random(),
          });
        });
      this.$emit("updateCounter", 1);
    },
    uploadLocalImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.response.push({
          id: Math.floor(Math.random() * 10),
          src: e.target.result,
          thumbnail: e.target.result,
          caption: "Delete",
          alt: Math.random(),
        });
      };

      this.$emit("updateCounter", 1);
    },
  },
};
</script>

<style>
.buttons__container {
  width: 450px;
  display: flex;
  margin: auto;
  justify-content: space-between;
}
.custom-file-upload {
  display: inline-block;
  padding: 6px 12px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  background-color: #252525;
  color: #fbfbfb;
  border-radius: 20px;
  transition: 0.3s;
}
input[type="file"] {
  display: none;
}
.custom-file-upload:hover {
  filter: contrast(40%);
}
</style>