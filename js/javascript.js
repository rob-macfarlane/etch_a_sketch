
const sketchBox = document.querySelector('.sketch-box');

numberOfBoxes = 5000;

boxSideLength = 600 / Math.sqrt(numberOfBoxes);
lengthString = boxSideLength + 'px'
console.log(lengthString)


for (let i = 0; i < numberOfBoxes; i++){
    const sketchElement = document.createElement('div');
    sketchElement.classList.add('sketch-element');
    sketchElement.style.width = lengthString
    sketchElement.style.height = lengthString
    sketchBox.appendChild(sketchElement);
}

var drawState = false;
window.addEventListener("mousedown", event => {

    if(event.button===0){
        drawState = true;
    }
});
window.addEventListener("mouseup", event => {
    if(event.button===0){
        drawState = false;
    }
});

document.querySelectorAll(':not(.sketch-box .sketch-element').forEach(item => {
    item.addEventListener('mouseenter', event => {
        drawState = false;
    });
});

document.querySelectorAll('.sketch-element').forEach(item => {
    item.addEventListener('mousedown', e => {
        e.preventDefault();
    });
    item.addEventListener('mouseover', event => {
        if (drawState) {
            item.style.backgroundColor = 'black';
        }
    });
});
