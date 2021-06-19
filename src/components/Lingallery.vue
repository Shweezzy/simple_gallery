<template>
  <div @click="currentPage">
    <div @click="deleteImage">
      <lingallery
        :iid.sync="currentId"
        :accentColor="'#fc0000'"
        :items="pageOfItems"
      />
      <jw-pagination
        :pageSize="9"
        :items="carouselData"
        @changePage="onChangePage"
        :labels="customLabels"
        :disableDefaultStyles="true"
      ></jw-pagination>
    </div>
    <h1 class="numberPages">{{ counter }}/{{ numberOfPages }}</h1>
    <Buttons @updateCounter="update" :response="responseData" />
  </div>
</template>

<script>
import Buttons from "./Buttons.vue";

const customLabels = {
  previous: "<",
  next: ">",
};

export default {
  components: {
    Buttons,
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
      counter: 1,
      customLabels,
      currentId: null,
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
            caption: "Delete",
            alt: Math.random(),
          });
        });
      }
      return this.responseData;
    },
    numberOfPages() {
      return Math.ceil(this.responseData.length / 9);
    },
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    deleteImage(e) {
      if (e.target.classList.contains("lingallery_caption")) {
        for (let i = 0; i < this.responseData.length; i++) {
          if (
            e.target.previousSibling.attributes[1].nodeValue ==
            this.responseData[i].alt
          ) {
            this.responseData.splice(i, 1);
            this.counter = 1;
          }
        }
      }
    },
    currentPage(e) {
      if (e.target.classList.contains("page-link")) {
        if (e.target.textContent === ">") {
          this.counter < this.numberOfPages ? this.counter++ : this.counter;
        } else {
          this.counter > 1 ? this.counter-- : this.counter;
        }
      }
    },
    update(data) {
      this.counter = data;
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
  margin: 5px 11px 0px 8px;
}
.lingalleryContainer[data-v-40681078] .lingallery figure img {
  height: 380px;
  width: fit-content;
}
.lingallery_thumbnails_content_elem img {
  filter: brightness(70%);
  outline-offset: 0px !important;
  /* border: 0 !important; */
  transition: 0.5s;
  -webkit-box-shadow: 1px 1px 50px -19px #000000;
  box-shadow: 1px 1px 50px -19px #000000;
}
.lingallery_thumbnails_content_elem img:hover {
  filter: inherit;
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
.page-link {
  outline: 0;
  color: #000 !important;
  text-decoration: none;
}
.numberPages {
  width: fit-content;
  margin: auto;
  margin-top: -55px;
}
</style>