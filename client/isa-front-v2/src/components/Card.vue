<template>
    <div class="card m-3" style="width: 18rem;"
         v-for="post in posts" :key="post.id"
    >
        <img v-bind:src="'data:image/jpeg;base64,'+imageBytes"  />
        <div class="card-body">
            <h5 class="card-title">{{ post.title }} Title</h5>
            <p class="card-text">{{ post.description }}</p>
            <router-link to="/"  class="btn btn-secondary">Voir l'oeuvre</router-link>
        </div>
    </div>   
</template>

<script>
import axios from 'axios'

export default {
    name: "Card",
    data() {
        return {
            posts: {
                title: "",
                description: "",
                image: ""
            }
        }
    },
    mounted() {
    axios
      .get(`http://localhost:3001/api/publication/reqallpub`)
      .then((response) => {
        this.posts = response.data;
      })

      .catch((error) => {
        console.log(error);
      });
  },
}
</script>
