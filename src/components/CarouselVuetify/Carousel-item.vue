<template>
  <div>
    <div class="images__container">
      <img
        v-for="item in pageOfItems"
        :key="item.id"
        class="img"
        :src="item.url_l"
        @click="as"
        alt=""
      />
    </div>
    <div class="container__footer">
      <jw-pagination
        :pageSize="9"
        :items="responseData"
        @changePage="onChangePage"
        :labels="customLabels"
        :disableDefaultStyles="true"
      ></jw-pagination>
      <h1 class="numberPages">{{ counter }}/{{ numberOfPages }}</h1>
    </div>
    <button @click="as">ASDAD</button>
  </div>
</template>

<script>
const customLabels = {
  previous: "<",
  next: ">",
};

export default {
  props: {
    responseData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pageOfItems: [],
      customLabels,
      counter: 1,
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.responseData.length / 9);
    },
  },
  methods: {
    as() {
      console.log(this.responseData.length);
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style>
.images__container {
  width: 731px;
  display: flex;
  transition: transform 0.2s;
}
.images__container img {
  width: 65px;
  height: 60px;
  margin-top: 5px;
  filter: brightness(40%);
  margin-right: 17.5px;
}
.images__container img:first-child {
  filter: inherit;
}
.images__container img:hover {
  filter: inherit;
  transform: scale(1.1);
}
.container__footer {
  display: flex;
  justify-content: center;
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
}
.page-link {
  color: black;
}
.numberPages {
  position: absolute;
  top: 574px;
}
</style>