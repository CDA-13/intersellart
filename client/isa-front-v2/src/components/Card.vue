<template>
    <div class="card m-3" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/imgisa1.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ post.title }} Title</h5>
            <p class="card-text">{{ post.description }} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt nisl ipsum, et malesuada nunc dignissim facilisis. Pellentesque pharetra vulputate diam non euismod. </p>
            <a href="#" class="btn btn-secondary">Voir l'oeuvre</a>
        </div>
    </div>   
</template>

<script>
import axios from 'axios'

export default {
    name: "Card",
    data() {
        return {
            post: {
                title: "",
                description: "",
                picture: ""
            }
        }
    },
    methods: {
        
    }
}
</script>
