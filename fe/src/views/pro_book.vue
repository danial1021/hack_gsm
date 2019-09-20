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
      <template v-if="active == 0">
        <img width="25%" src="">
        - 화이트 해커를 위한 웹 해킹의 기술 ( 비제이퍼블릭 )<br>
        - 28,000원<br>
        - 저자 : 최봉환<br>
        - 필수적으로 알아야 할 기존 웹 공격과 심각하게 다루는 최신 웹 공격 이론 소개 및 관련된 기술을 모의해킹을 통해 직접 실습할 수 있도록 도움<br>
        - 축적된 보안 지식이 없더라도 학습과 실습에 어려움이 없도록 쉽게 설명하고 실습 과정을 자세히 기술되어있음<br>
        - 저자의 실무 경험을 토대로 다양한 웹 모의해킹 팁이 표시<br>
      </template>
      <template v-else-if="active == 1">
        - 오픈소스 도구를 활용한 웹 모의해킹과 침해대응 ( 한빛미디어 )<br>
        - 17,280원<br>
        - 저자 : 조정원, 석동현, 김경원, 양민철, 김승록, 박승우<br>
        - 오픈소스로 제공되는 도구나 장비를 활용하여 웹 취약점 진단부터 스노트 탐지까지 분석<br>
        - 무료라는 장점 때문에 부담 없이 이용할 수 있고 실무와 비슷한 환경에서 실습 진행이 가능<br>
      </template>
      <template v-else-if="active == 2">

      </template>
      <template v-else>

      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      menulist: ['웹 해킹', '디지털 포렌식', '리버스 엔지니어링', '포너블']
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
  margin-left: 250px;
  display: block;
}
.img{
  display:center;
}
</style>