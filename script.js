// 1. 1-100까지의 랜덤한 숫자(정수를 반환한는 randomNumber )선언, 초기화 하시오.
//  Hint : Math.random()
let randomNumber = Math.floor(Math.random() * 100) + 1;
// 2. DOM 요소 5가지를 선택해 변수로 선언
//  Hint : resultParas, gueses, lastResult, lowOrHi, guessField
const guessSubmit = document.querySelector('.guessSubmit');
const gueses = document.querySelector('.gueses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guesesField = document.querySelector('.guessField');
// 3. 변수 2 가지를 선언(let)
//guess Count 초기값 1, restButton 선언만
let guesesCount = 1;
let restButton;

// 올바른 번호인지 확인하는 함수 만들기
function checkGuess(event) {
  // 기본값 막기
  event.preventDefault();
  // 사용자가 추측한 번호를 알아내는 변수 선언 userGuess
  const userGuess = Number(guesesField.value);
  // 올바른 경우
  if (randomNumber === userGuess) {
    lastResult.textContent = '축하합니다.';
    // 게임이 끝나는 로직
    setGameOver();
  } else if (guesesCount === 10) {
    lastResult.textContent = '게임오버 10회를 모두 사용했습니다.';
    setGameOver();
  } else {
    // 플레이어에게 자신이 틀렸으면 추측이 너무 높거나 낮은지 알려준다.
    // 유저가 추측한 것이 랜덤 숫자보다 낮을 때
    lastResult.textContent = '틀렸어요';
    if (randomNumber > userGuess) {
      lowOrHi.textContent = '추측한 숫자보다 높습니다.';
    } else if (randomNumber < userGuess) {
      lowOrHi.textContent = '추측한 숫자보다 낮습니다.';
    }
  }
  guesesCount++;
}
function setGameOver() {
  // 추측창 사용 못하게 한다.
  guesesField.disabled = true;
  guessSubmit.disabled = true;

  //버튼 태그인 리셋버튼을 DOM요소로 생성
  restButton = document.createElement('button');
  //생성한 DOM요소의 텍스트 컨텐츠를 을 "새 게임하기"로 변경
  resetButton.textContent = '새 게임하기';
  // 만든 DOM 버튼을 body태그 안에 추가
  document.body.appendChild(resetButton);
  // resetButton 을 'click'했을 때 새 게임이 되게하는 리스너를 추가해주세요.
  // 새 게임함수의 이름은 resetGame
  restButton.addEventListener('click', restButton);
}
function restGame() {
  // 초기화
  guesesCount = 1;
  guesesField.disabled = false;
  guessSubmit.disabled = false;
  restButton.parentNode.removChild(restButton);
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesesField.value = '';
  lowOrHi.value = '';
  lastResult.textContent = '';
}

// 이벤트 리스너 만들기 click 할 때 checkGuess 함수를 실행하는 리스너 추가
guessSubmit.addEventListener('click', checkGuess);
