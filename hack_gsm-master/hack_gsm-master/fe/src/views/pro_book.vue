<template>
  <div class="article">
    <div class="left">
      <br><br><br>
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
        <div class="row">
          <img
            class="col-md-3"
            src="../assets/image1.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
          <div class="col-md-9">
            <br><br>
            - 화이트 해커를 위한 웹 해킹의 기술 ( 비제이퍼블릭 )<br>
            - 28,000원<br>
            - 저자 : 최봉환<br>
            - 필수적으로 알아야 할 기존 웹 공격과 심각하게 다루는 최신 웹 공격 이론 소개 및 관련된 기술을 모의해킹을 통해 직접 실습할 수 있도록 도움<br>
            - 축적된 보안 지식이 없더라도 학습과 실습에 어려움이 없도록 쉽게 설명하고 실습 과정을 자세히 기술되어있음<br>
            - 저자의 실무 경험을 토대로 다양한 웹 모의해킹 팁이 표시<br><br><br>
          </div>
        </div>
        <hr>
        <div class="row">
           <img
           class="col-md-3"
            src="../assets/image02.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
          <div class="col-md-9">
            <br><br>
            - 오픈소스 도구를 활용한 웹 모의해킹과 침해대응 ( 한빛미디어 )<br>
            - 17,280원<br>
            - 저자 : 조정원, 석동현, 김경원, 양민철, 김승록, 박승우<br>
            - 오픈소스로 제공되는 도구나 장비를 활용하여 웹 취약점 진단부터 스노트 탐지까지 분석<br>
            - 무료라는 장점 때문에 부담 없이 이용할 수 있고 실무와 비슷한 환경에서 실습 진행이 가능<br><br><br>
          </div>
        </div>
        <hr>
        <div class="row">
        <img
            class="col-md-3"
            src="../assets/image03.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
          <div class="col-md-9">
            <br><br>
            - 웹 해킹을 위한 칼리 리눅스 (에이콘출판사)<br>
            - 31,500원<br>
            - 저자 : 조셉 뮤니즈, 아미르 라카니<br>
            - 칼리 리눅스를 이용해 할 수 있는 많은 공격들 중 기초적이면서 가장 많이 사용되는 웹 해킹 기술에 대해 알아보고 관련 툴을 살펴봄<br>
            - 정보수집부터 웹 해킹, 보고서 작성까지 모의해킹의 전반적인 흐름을 이해하는 데 도움<br><br><br>
          </div>
        </div>
        <hr>
        <div class="row">
        <img
            class="col-md-3"
            src="../assets/image04.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
          <div class="col-md-9">
            <br><br>
            - 웹 해킹을 위한 칼리 리눅스 (에이콘출판사)<br>
            - 31,500원<br>
            - 저자 : 조셉 뮤니즈, 아미르 라카니<br>
            - 칼리 리눅스를 이용해 할 수 있는 많은 공격들 중 기초적이면서 가장 많이 사용되는 웹 해킹 기술에 대해 알아보고 관련 툴을 살펴봄<br>
            - 정보수집부터 웹 해킹, 보고서 작성까지 모의해킹의 전반적인 흐름을 이해하는 데 도움<br><br><br>
          </div>
        </div>
      </template>
      <template v-else-if="active == 1">
      <div class="row">
       <img
            class="col-md-3"
            src="../assets/image05.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
        <div class="col-md-9"> 
          <br><br> 
          - 악성코드와 멀웨어 포렌식 (에이콘)<br>
          - 36,000원<br>
          - 저자 : 제임스 아퀼리나, 에이헨 케이시, 카메론 말린<br>
          - 현장 포렌식 분야에서 디지털 조사관들이 중요한 범죄 증거를 수집하고 획득하기 위한 방법을 자세하게 설명하는 실무서<br>
          - 멀웨어로 인해 문제가 발생한 시스템에서 악성코드를 찾아내고 감염에 따른 영향을 파악하기 위해 기술적인 맥락에서 디지털 포렌식의 전체 주기를 다룸<br><br><br>
        </div>
      </div>
      <hr>
      <div class="row">  
        <img
            class="col-md-3"
            src="../assets/image06.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
        <div class="col-md-9">
          <br><br>
          - 디지털 포렌식 이론 (미디어북)<br>
          - 25,200원<br>
          - 저자 : 노명선, 구희진, 김영철, 배대한, 최대건, 최우석 <br>
          - 디지털 포렌식 기초실무와 관련 법률을 수록하여 디지털 증거를 적정하게 수집하고, 분석하는 기본 틀에 관한 내용<br>
          - 기초실무는 디지털 포렌식 관련 서적에서 각기 상이하게 기술하고 있는 내용을 통합 및 정리<br>
          - 혼용하고 있는 용어를 정리·통일하여 디지털 포렌식을 처음 접하는 사람들에게 혼동을 주지 않도록 함<br><br><br>
        </div>
      </div>
      <hr>
      <div class="row">
        <img
          class="col-md-3"
          src="../assets/image07.png"
          aspect-ratio="1"
          max-width="150"
          max-height="150"
          ><br>
        <div class="col-md-9">
          <br><br><br>
          - 디지털포렌식 with CTF (범)
          - 36,100원 
          - 저자 : 이별, 김경태, 김승규, 이창현
          - 각종 대회의 CTF 문제를 통해 다양한 시나리오의 문제들을 풀어 보며 많은 기술들을 배울 수 있음<br><br><br>
        </div>
      </div>
      </template>
      <template v-else-if="active == 2">
      <div class="row">
        <img
            class="col-md-3"
            src="../assets/image08.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
        <div class="col-md-9">
          <br><br>
          - 리버싱 핵심원리 ( 인사이트 )<br>
          - 48,000원<br>
          - 저자 : 이승원<br>
          - 리버싱에 필요한 핵심 원리 50여개를 장을 통해 꼼꼼하게 설명한 책<br>
          - 리버싱 기술과 동작 원리를 설명하는데 집중<br>
          - 저자가 오랫동안 안철수 연구소에서 경험을 토대로 직접 작성한 다양한 코드는 물론 다양한 리버싱 기법을 상세하게 소개하여 리버서를 꿈꾸는 개발자와 실무 경험자에게 모두 도움 <br><br><br>
        </div>
      </div>
      <hr>
        <div class="row">
        <img
            class="col-md-3"
            src="../assets/image09.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
        <div class="col-md-9">
          <br><br>
          - 리버스 엔지니어링 바이블 ( 위키북스 )<br>
          - 35,000원<br>
          - 저자: 강병탁<br>
          - C/C++ 코드가 어셈블리 코드로 어떻게 변해가는지에 대한 기초적인 부분에서부터, 리버스 엔지니어링에 관련된 모든 사항을 다룸<br>
          - 리버스 엔지니어링을 처음 접하거나 수준을 높이고자 하는 독자를 대상으로 함
        </div>
      </div>
      </template>
      <template v-else-if="active == 3">
      <div class="row">
        <img
            class="col-md-3"
            src="../assets/image10.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
        <div class="col-md-9">
          <br>
          - 윈도우 시스템 보안과 해킹 (에이콘출판)<br>
          - 48,000원<br>
          - 저자 : 마이클 하워드, 데이빗 르블랑, 그렉 호글런드, 제임스 버틀러<br>
          - '루트킷'은 루트킷이 무엇이고 어떻게 작동하며 제작하는지, 어떻게 루트킷을 탐지하는지 등에 대해 차례로 설명<br>
          - '윈도우 비스타 보안 프로그래밍'에서는 윈도우 애플리케이션 개발자가 안전한 소프트웨어 제품을 만들 수 있는 보안 모범 사례를 보여줌<br>
        </div>
      </div>
      <hr>
        <div class="row">
        <img
            class="col-md-3"
            src="../assets/image11.png"
            aspect-ratio="1"
            max-width="150"
            max-height="150"
          ><br>
        <div class="col-md-9">
          <br><br>
          - iOS 해킹과 보안 가이드 (에이콘출판)<br>
          - 35,000원<br>
          - 디노 다이 조비, 찰리 밀러, 디오니소스 블라자키스, 빈센조 이오조, 스테판에서, 랄프필립 와인만 <br>
          - 아이폰과 아이패드를 비롯한 ios 기반 디바이스에서 발생할 수 있는 보안 위험성에 대해 설명<br>
        </div>
      </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      menulist: ['웹 해킹', '디지털 포렌식', '리버스 엔지니어링', '시스템 해킹']
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