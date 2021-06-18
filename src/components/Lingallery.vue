<template>
  <div>
    <div>
      <lingallery :accentColor="'#f22400'" :items="pageOfItems" />
      <jw-pagination
        :pageSize="9"
        :items="carouselData"
        @changePage="onChangePage"
        :labels="customLabels"
        :disableDefaultStyles="true"
      ></jw-pagination>
    </div>

    <Button :response="responseData" />
  </div>
</template>

<script>
import Button from "./Buttons.vue";

const customLabels = {
  previous: "<",
  next: ">",
};

export default {
  components: {
    Button,
  },
  props: {
    response: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      responseData: [],
      pageOfItems: [],
      counter: 0,
      customLabels,
    };
  },

  computed: {
    carouselData() {
      if (this.responseData.length === 0) {
        this.response.forEach((e) => {
          this.responseData.push({
            src: e.url_l,
            thumbnail: e.url_l,
            id: e.id,
          });
        });
      }

      return this.responseData;
    },
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style>
.lingalleryContainer {
  width: 726px;
  margin: auto;
}

.lingallery_thumbnails_content {
  display: flex;
  justify-content: center;
}

.lingallery_thumbnails_content_elem {
  margin-left: 10px;
  margin-right: 8px;
}
.lingalleryContainer[data-v-40681078] .lingallery figure img {
  height: 380px;
}
.pagination li.first,
li.last,
.pagination li.page-number {
  display: none;
}
.pagination li.previous,
li.next {
  font-size: 30px;
  margin: 10px;
  margin-left: 25px;
  margin-right: 49px;
}
.pagination {
  display: flex;
  list-style-type: none;
  justify-content: center;
}
.page-link {
  color: black;
}
.lingalleryContainer[data-v-40681078] .lingallery figure a.control.right {
  display: block;
  position: absolute;
  margin-right: -55px;
}
.lingalleryContainer[data-v-40681078] .lingallery figure a.control.left {
  display: block;
  position: absolute;
  margin-left: -55px;
}
</style>