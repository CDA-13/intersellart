<template>
  <div id="app">
    <HeaderLayout />
    <router-view />
    <PublicationCreate />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout.vue";
import FooterLayout from "./components/FooterLayout.vue";
import PublicationCreate from './views/publication/PublicationCreate.vue'

export default {
  name: "App",
  components: {
    HeaderLayout,
    PublicationCreate,
    FooterLayout,
  },
  data() {
    
  },
  methods: {
    getList() {
      this.axios.get(api).then((response) => {
        console.log(response.data)
      })
      // or
      this.$http.get(api).then((response) => {
        console.log(response.data)
      })
    }
  }
};
</script>

<style>
#app  {
  overflow-x: hidden;
}
</style>
