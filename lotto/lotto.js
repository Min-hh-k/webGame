const candidate = Array(45).fill().map((v,i) => i+1);
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random,1); // 뽑은 값은 배열에 
  const value = spliceArray[0]; //배열에 들어 있는 값 꺼내기
  shuffle.push(value);
}
console.log(shuffle);