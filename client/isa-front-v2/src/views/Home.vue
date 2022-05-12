<template>
  <div class="container">
    <div class="main">
      <h2 class="d-flex justify-content-center m-5">Liste des Oeuvres</h2>

      <div class="posts-list d-flex flex-wrap justify-content-center">
        <Card />
      </div>
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
        
    };
  },
  /*mounted() {
    axios
      .get(`http://localhost:3001/api/publication`)
      .then((response) => {
        this.posts = response.data;
      })

      .catch((error) => {
        console.log(error);
      });
  },*/
};
</script>
<style></style>
