const candidate = Array(45).fill().map((v,i) => i+1);
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random,1); // 뽑은 값은 배열에 
  const value = spliceArray[0]; //배열에 들어 있는 값 꺼내기
  shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.slice(0,6).sort((a,b)=> a - b);
const bonus = shuffle[6]; //배열 6이 7번째 보너스 숫자
console.log(winBalls, bonus);
const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const showball = (number,$target) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  $target.appendChild($ball);
};

//
for (let i=0 ; i < 6 ; i++) {
  setTimeout(() => {
    showball(winBalls[i], $result);
  }, (i+1)*1000);
}

setTimeout(()=>{    //setTimout(()=> {}, 5000=5초)
  showball(bonus,$bonus);
},7000);