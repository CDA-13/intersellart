<template>
  <div id="app">
    <HeaderLayout />
    <router-view />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout.vue";
import FooterLayout from "./components/FooterLayout.vue";
export default {
  name: "App",
  components: {
    HeaderLayout,
    FooterLayout
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
  overflow: hidden;
}
</style>