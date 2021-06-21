<template>
  <div @click="currentPage">
    <div @click="deleteImage">
      <div @click="controlStyles">
        <lingallery
          :addons="{ enableLargeView: true }"
          :disableImageClick="true"
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
    </div>
    <h1 class="numberPages">{{ pageCounter }}/{{ numberOfPages }}</h1>
    <Buttons @updateCounter="newCounter" :response="responseData" />
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
      pageCounter: 1,
      customLabels,
      rightControl: null,
      leftControl: null,
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
            this.pageCounter = 1;
          }
        }
      }
    },
    currentPage(e) {
      if (e.target.classList.contains("page-link")) {
        if (e.target.textContent === ">") {
          this.pageCounter < this.numberOfPages
            ? this.pageCounter++
            : this.pageCounter;
        } else {
          this.pageCounter > 1 ? this.pageCounter-- : this.pageCounter;
        }
      }
    },
    newCounter(data) {
      this.pageCounter = data;
    },
    //Styles
    controlStyles(e) {
      if (e.target.nodeName === "SPAN" || e.target.nodeName === "IMG") {
        let imageDivs = document.querySelector(
          ".lingallery_thumbnails_content"
        );
        //Thumbnails
        imageDivs.children.forEach((e) => {
          if (e.firstChild.style.borderColor === "rgb(252, 0, 0)") {
            e.style.filter = "inherit";
          } else {
            e.style.filter = "brightness(40%)";
          }
        });
      }
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
.lingallery_thumbnails_content_elem {
  filter: brightness(40%);
  transition: 0.5s;
}
.lingallery_thumbnails_content_elem:first-child {
  filter: inherit;
}
.lingallery_thumbnails_content_elem:hover {
  filter: inherit !important;
}
.lingallery_thumbnails_content_elem img {
  border: 0 !important;
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
  height: 0;
  margin-top: 185px;
}

.lingalleryContainer[data-v-40681078] .lingallery figure a.control.left {
  display: block;
  position: absolute;
  margin-left: -55px;
  height: 0;
  margin-top: 185px;
}
.lingallery .lingallery_caption {
  opacity: 0;
  transition: 0.5s;
}
.lingallery:hover .lingallery_caption {
  opacity: 1;
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