<template>
  <div class="article">
    <h1>보안용어 정리</h1>
 
    <div class="dan">
<h2>정보보호 vs 정보보안</h2><br><br>
<h3>정보보호</h3>
정보의 수집 가공 저장 검색 송신 수신 중에 정보의 훼손 변조 유출 등을 방지하기 위한 관리적/기술적 수단을 강구하는 것<br>
정보화 역기능을 방지하기 위하여 정보 및 정보시스템을 보호하고,정보의 비밀성,무결승,인증,부인봉쇄,가용성을 보장해 줄 수 있도록 관리적,물리적,기술적 수단을 강구하는 것<br>
<br>
<h3>정보보안</h3>
비밀성에 초점을 맞추어 기업의 영업비밀이나 개인의 프라이버시를 보호하기 위해서 주로 사람에 의하여 고의적으로 발생하는 정보의 유출 도청 파괴에 대한 대응을 강조하는 것<br>
비밀성 유지에 초점을 맞춘 보안의 개념에 상당히 치우쳐 있음<br><br>

<h3>정리</h3>
-정보보호; 보호해야 할 가치가 있는 정보를 외부의 위협으로부터 지키는 활동<br>
Ex)개인정보<br>
-정보보안;지정된 일부의 인원만 알고 있어야하는 정보를 위험으로부터 지키는 것<br>
Ex)시스템 보안,db보안,소스코드 보안<br><br>

<h3>COMPUTER FORENSIC VS DIGITAL FORENSICS</h3><br>
Computer forensic<br>
자료의 무결성을 유지하는 방식으로 조사 목적으로 컴퓨터 관련 자료를 수집, 보존, 분석하는 관행.<br>
Digital Forensics <br>
정보의 무결성을 보존하고 데이터에 대한 엄격한 보호 체인을 유지하는 동시에 데이터의 식별, 수집, 검사 및 분석에 과학의 적용.<br>
정보의 공급자가 제공한 정보를 관리하는 경우<br><br>

<h3>스푸핑</h3>
유명 사이트 메일을 도용하여 스팸메일을 보내 수신자로 하여금 해당 메일을 열어보게끔 유도하는 행위<br><br>

<h3>스니핑(킁킁 냄새를 맡다)=”도청”</h3>
=다른 상대방의 패킷을 엿 봄.ID나 패스워드 등 네트워크상에 자신이 아닌 상대방들의 패킷을 훔쳐보는 것<br><br>

<h3>스누핑(기웃거리다,염탐하다)</h3>
스니핑과 같이 도청.<br>
네트워크상에 떠도는 중요 정보를 몰래 획득하는 행위<br><br>
<h3>스미싱</h3>
문자 메시지를 보내어 URL링크를 통해 악성코드 설치 후 개인정보 탈취 및 원격 조종<br><br>
		
<h3>Cloud</h3>
요청을 원격으로 처리하는 대용량 저장소 기능을 가진 컴퓨터들의 모음입니다<br><br>
<h3>Vpn</h3>
위치를 가리고 트래픽을 암호화하여 인터넷을 사용하면서 익명으로 남길 수 있는 도구.<br><br>
<h3>Exploit</h3>
컴퓨터의 취약성을 이용하는 데 사용할 수 있는 악성 애플리케이션 또는 스크립트.<br><br>
<h3>방화벽</h3> 들어오고 나가는 네트워크 트래픽을 모니터링하고 제어하는 네트워크 보안 시스템<br><br>
<h3>멀웨어</h3>
(=악성코드)<br><br>
<h3>피싱</h3>
전자우편 또는 메신저를 사용해서 신뢰할 수 있는 사람 또는 기업이 보낸 메시지인 것처럼 가장함으로써, 비밀번호 및 신용카드 정보와 같이 기밀을 요하는 정보를 부정하게 얻으려는 social engineering의 한 종류<br><br>

<h2>악성코드의 종류</h2><br>
<h3>Virus</h3>
트로이얀(Trojan)과는 달리 스스로를 복제, 특정한 대상(파일, 부트 섹터 등)을 감염시켜서 해당 대상이 실행되면 동작하는 악성코드<br>
트로이 목마(trojan)<br>
컴퓨터 바이러스와 다른 점이 있다면, 다행히도 바이러스와 달리 살아있는거 마냥 다른기기를 전부 전염시키고, 자가복제를 하거나 다른 정상적인 파일에 자기 자신을 덮어 씌우거나 하지 않고, 해당하는 트로이 목마 프로그램 하나만 삭제하면 더 이상의 피해는 없다.<br><br>
<h3>스파이웨어</h3>
중요한 개인정보 등을 수집하고 공격자의 서버로 전송<br><br>
<h3>백도어</h3>
백도어는 말 그대로 뒷문이라는 뜻으로, 시스템 접근에 대한 사용자 인증 등 정상적인 절차를 거치지 않고 응용 프로그램 또는 시스템에 접근하여 컴퓨터 속의 정보를 빼내가거나 특정 작업을 하도록 제작된 프로그램<br><br>
<h3>랜섬웨어</h3>
컴퓨터의 데이터에 암호를 걸고, 데이터를 인질로 삼아 잠금을 해제하는 키를 대가로 금품을 요구하는 악성코드<br><br>
<h3>리버싱 -> 바이너리(Binary)</h3>
어느 특정 물건, 장치 등이 있으면 그것에 대한 구조, 기능, 동작 등을 역으로 따라가며 분석하고 그 원리를 이해하며 부족한 부분을 보완하며 새로운 기능 등을 추가하는 작업<br>
제로데이 헌팅:  컴퓨터 소프트웨어의 취약점을 공격하는 기술적 위협<br>
악성코드: 악성코드(Malware, 악성 소프트웨어)는 컴퓨터 바이러스, 웜, 스파이웨어, 트로이 목마 등 컴퓨터 사용자에게 해를 끼치는 모든 코드(Code)의 총칭을 말한다.<br>
 기계어와 일대일 대응이 되는 컴퓨터 프로그래밍의 저급 언어이다.<br>
    </div>
  </div>
</template>

<style scoped>
.article {
  min-height: 400px;
  padding: 15%;
  padding-top: 20px;
}
</style>