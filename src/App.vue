<template>
  <div id="app">
    <Header />
    <router-view path="$router.key" />
    <Footer />
  </div>
</template>

<script>
import "./styles/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// an example array of items to be paged
const exampleItems = [...Array(500).keys()].map((i) => ({
  id: i + 1,
  name: "Item " + (i + 1),
}));
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      exampleItems,
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      console.log(pageOfItems);
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>