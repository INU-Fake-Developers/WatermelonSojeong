/**
 * 이 프로젝트는 모든 사람이 기술과 엔터테인먼트를 배우는 데 도움이 될 뿐이며 침해를 피하기 위해 수정된 웹 사이트를 대규모로 퍼뜨리거나 상업화하지 않음을 선언합니다!
 */

// 보너스 포인트: 숫자 수정
let extraScore = 1;

// 무적 모드: true를 false로 변경
let wuDi = true;

// 첫 번째 과일: 숫자를 0-10으로 수정, 0은 포도, 9는 수박 반개
let firstFruit = 0;

// 과일 합성 역: 거짓에서 참으로
let reverseLevelUp = false;

// 생성된 과일 지정: 기본값: 역방향 0-5 켜지 않음 역방향 6-11 켜고 해당 숫자를 수정하여 무작위로 생성되는 과일의 범위를 제어
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 무작위 과일 생성 최소값(0-10) 0은 포도, 9는 수박 반
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 무작위 과일의 최대값 생성(1-11) 0은 포도, 9는 수박 반
let setFruits = {
  // 이전 몇 번에서 생성된 과일을 지정하십시오. 숫자를 얼마든지 입력할 수 있습니다. 0 = 포도, 9 = 수박 반
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일을 더 많이 만들기 Q: 0보다 크고 1보다 작은 소수점으로 잘못된 변경(0.9 권장)
let fruitQTan = false;

// 천천히 떨어지는 과일: false를 0보다 큰 숫자로 변경, 값이 클수록 저항이 클수록 떨어지는 속도가 느려집니다(권장 5)
let fruitSlowDown = false;

// 과일을 변경하려면 오른쪽 상단의 아이콘을 클릭하십시오. false에서 true로 변경
let clickChangeFruit = true;

// 광고 링크: false 또는 빈 문자열은 광고로 건너뛰지 않음을 의미합니다.
let adLink = 'https://instagram.com/ssoo_shin';

// 웹 페이지 제목 수정: "when will my life begin" 대체
document.getElementsByTagName("title")[0].innerText = 'When will my life begin?';

// 선택 팝업 창 열기: false를 true로 변경
let selectModal = false;

