<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Navigation/Footer"
export default {
  components:{
    Footer
  } 
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
