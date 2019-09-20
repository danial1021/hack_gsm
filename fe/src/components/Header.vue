<template>
  <div class="header">
    <div class="logo">
      <img
        width="240"
        onclick="javascript:location.href='http://localhost:8080';"
        src="https://cdn.discordapp.com/attachments/582818759337705482/624517087204868096/logo.png"
      />
    </div>
    <div class="menu-items">
      <div>
        <li
          :class="active == index && 'active'"
          @click="active = index"
          v-for="(x, index) in menulist"
          :key="index"
        >
          <router-link :to="x.router">{{x.title}}</router-link>
        </li>
      </div>                            
    </div>                                                                                                              
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      menulist: [
        {
          title: "전문서적",
          router: "pro_book"
        },
        {
          title: "교육기관",
          router: "edu_facility"
        },
        {
          title: "대학교",
          router: "university"
        },
        {
          title: "기업",
          router: "corpor"
        },
        {
          title: "대회",
          router: "cont"
        },
        {
          title: "컨퍼런스&세미나",
          router: "con_semi"
        },
        {
          title: "보안용어",
          router: "term"
        },
        {
          title: "워게임",
          router: "war"
        }
      ]
    };
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: rgb(218, 218, 218);
}
li {
  display: inline-block;
}
li:not(:first-child):before {
  content: "|";
  padding: 0 0.5em 0 0.5em;
  color: #999;
}
.logo {
  background-color: rgb(41, 41, 41);
  text-align: center;
  padding-top: 40px;
}
.menu-items {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: rgb(41, 41, 41);
  color: rgb(218, 218, 218);
}
.menu-items > div > li:hover {
  text-decoration: underline;
}
.menu-items > div > li {
  position: relative;
}
.active {
  color: #fff !important;
}
.active:after {
  top: 160%;
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-top-color: #333;
  border-width: 14px;
  margin-left: -7px;
}
.header {
  width: 100%;
}
</style>