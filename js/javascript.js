
const sketchBox = document.querySelector('.sketch-box');

console.log(sketchBox)

const div = document.createElement('div');
div.classList.add('sketch-block');
div.textContent = 'hello world!';
sketchBox.appendChild(div);
