const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 1; n <= 9; n += 1) {
  numbers.push(n);
}

const answer = [];
for (let n = 0; n <= 3; n += 1) { // 네 번 반복
  const index = Math.floor(Math.random() * numbers.length); // 0~8 정수
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) { //검사하는 코드
  if (input.length !== 4){ // 길이가 4가 아닌가?
    return alert('4자리 숫자 입력해주세요')
  }
  if (new Set(input).size !==4) { // 중복된 숫자가 없는가?
    return alert('중복되지 않게 입력해주세요.')
  }
  if(tries.includes(input)) { //이미 시도 한 값인가? new Set 은 중복이 없는 배열
    return alert('이미 시도한 값입니다.')
  }
  return true;
}

$form.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본동작 막기
  const value = $input.value;
  $input.value = '';
  const valid = checkInput(value);
  if (!valid) return;
  if (answer.join('') === value) { //join: 배열을 문자열로 변경 [1,2,3,4] -> '1234' , 
    $logs.textContent = '홈런!';
    return;
  }
  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
    return;
  }
  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { // 일치하는 숫자 발견
      if (index === i) { // 자릿수도 같음
        strike += 1;
      } else { // 숫자만 같음
        ball += 1;
      }
    }
  }
  $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  tries.push(value);
});