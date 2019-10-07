<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");
* {
  font-family: "Ubuntu", sans-serif;
}
html {
  padding: 0px;
}
body {
  margin: 0px;
}
</style>
