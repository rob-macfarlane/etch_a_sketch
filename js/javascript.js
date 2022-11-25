
const sketchBox = document.querySelector('.sketch-box');

numberOfBoxes = 81;

boxSideLength = 400 / Math.sqrt(numberOfBoxes);
lengthString = boxSideLength + 'px'
console.log(lengthString)


for (let i = 0; i < numberOfBoxes; i++){
    const sketchElement = document.createElement('div');
    sketchElement.classList.add('sketch-element');
    sketchElement.textContent = 'h';
    sketchElement.style.width = lengthString
    sketchElement.style.height = lengthString
    sketchBox.appendChild(sketchElement);

}
