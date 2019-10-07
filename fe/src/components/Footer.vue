<template>
  <v-app>
    <v-footer 
     app
     color="grey darken-4"
    >
      <v-spacer></v-spacer>
      <span class="color">{{ siteCopyright }}</span>
    </v-footer>
  </v-app>
</template>
      
<script>
export default {
  data () {
    return {
      siteCopyright: '@2019 PQurity in GSM'
    }
  }
}
</script>

<style scoped>
.color {
  color: #fff;
  width: 100%;
  height: 100px;
  text-align: right;
}
</style>