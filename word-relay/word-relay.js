const number = parseInt(prompt('몇 명이 참가합니까?'),10);
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

let word; //제시어
let newWord // 새로 입력한 제시어


const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) { //제시어가 비어 있는가? || 끝글자와 첫글자가 올바른가?
    //비어 있다
    word = newWord; //입력한 단어가 제시어가 됨
    $word.textContent = word;
   
    const order = Number($order.textContent); // 현재 순서
    if (order + 1 > number ) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }

  } else { //올바르지 않은가?
      alert('올바르지 않습니다!');
    }
    $input.value = '';
    $input.focus();
  };

const onInput = (event) => {
  newWord = event.target.value; // 입력한 단어를 현재 단어로
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);