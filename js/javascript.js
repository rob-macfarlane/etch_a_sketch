
const sketchBox = document.querySelector('.sketch-box');

numberOfBoxes = 1000;

boxSideLength = 400 / Math.sqrt(numberOfBoxes);
lengthString = boxSideLength + 'px'
console.log(lengthString)


for (let i = 0; i < numberOfBoxes; i++){
    const sketchElement = document.createElement('div');
    sketchElement.classList.add('sketch-element');
    // sketchElement.textContent = 'h';
    sketchElement.style.width = lengthString
    sketchElement.style.height = lengthString
    sketchBox.appendChild(sketchElement);
}

var drawState = false;
window.addEventListener("mousedown", event => {
    if(event.button===0){
        drawstate = true;
    }
});

var drawState = false;
window.addEventListener("mouseup", event => {
    if(event.button===0){
        drawstate = false;
    }
});



document.querySelectorAll('.sketch-element').forEach(item => {
    item.addEventListener('mouseover', event => {
        if (drawstate) {
            item.style.backgroundColor = 'black';
        }
    });
});
