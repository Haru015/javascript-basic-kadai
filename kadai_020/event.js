// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const text = document.getElementById('text');

  text.textContent = 'ボタンをクリックしました';

  // console.log(text);
})