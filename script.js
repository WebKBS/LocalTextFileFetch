const resultText = document.getElementById('result');
const button = document.querySelector('button');
const input = document.querySelector('input');

const url = './word.txt';

let textList = null;

fetch(url).then(async (res) => {
  let text = await res.text();
  let splitN = text.split('\n');

  let trims = splitN.map((ev) => ev.trim());
  textList = trims;

  button.addEventListener('click', () => {
    if (input.value === '') {
      return;
    }
    textList.filter((arr) => (resultText.textContent = arr.indexOf(input.value) > -1));
  });
});
