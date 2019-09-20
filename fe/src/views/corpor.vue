<template>
  <div class="article">
    <div class="left">
      <ul>
        <li
          :class="active == index && 'active'"
          @click="active = index"
          v-for="(x, index) in menulist"
          :key="index"
        >{{x}}</li>
      </ul>
    </div>
    <div class="right">
      <template v-if="active == 0">aa</template>
      <template v-else-if="active == 1">bb</template>
      <template v-else-if="active == 2">cc</template>
      <template v-else>dd</template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      menulist: ["aaa", "bbbbb", "CCCCCCCCC ", "Dddddddddd"]
    };
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
li {
  padding: 0.41em 0.5em;
  display: list-item;
  text-align: -webkit-match-parent;
  color: rgb(38, 133, 0);
}
.active {
  background-color: rgb(38, 133, 0);
  color: #fff;
}
.article {
  min-height: 400px;
  width: 980px;
  margin: 0 auto;
}
.left {
  display: block;
  width: 200px;
  float: left;
}
.right {
  padding-top: 25px;
  margin-left: 320px;
  display: block;
}
</style>