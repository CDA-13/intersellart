<template>
<div class="container">
    <div class="main">
        <div
            class="posts-list"
            v-for="post in posts"
            :key="post.id"
            >
            <Card />
        </div>
        <Card />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
    name: "Home",
    components: {
        Card,
  },
  data() {
      return {
          posts: [],
      }
  }
};
</script>
<style></style>
