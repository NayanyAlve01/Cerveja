<template>
  <footer></footer>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "Footer",
  data() {
    return {
      socialLinks: [],
    };
  },
  mounted() {
    api.get("/social-link.json").then((response) => {
      this.socialLinks = response.data;
    });
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 20px;
  background-color: var(--color-background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

