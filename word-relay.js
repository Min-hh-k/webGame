const number = parseInt(prompt('몇 명이 참가합니까?'),10);
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');

let word; //제시어
let newWord // 새로 입력한 제시어


const onClickButton = function () {
  if (!word) { //제시어가 비어 있는가?
    //비어 있다
    word = newWord; //입력한 단어가 제시어가 됨
    $word.textContent = word;
    $input.value = ''; 
  } else {
    //비어 있지 않다
  }
};

const onInput = (event) => {
  newWord = event.target.value;
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);