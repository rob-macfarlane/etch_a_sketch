
const sketchBox = document.querySelector('.sketch-box');


box_per_side = 50
numberOfBoxes = box_per_side * box_per_side;

boxSideLength = 500 / Math.sqrt(numberOfBoxes);
lengthString = boxSideLength + 'px'
console.log(lengthString)


for (let i = 0; i < numberOfBoxes; i++){
    const sketchElement = document.createElement('div');
    sketchElement.classList.add('sketch-element');
    sketchElement.style.width = lengthString
    sketchElement.style.height = lengthString
    sketchBox.appendChild(sketchElement);
}


//related to drawing functionality
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
//end relation to drawing functionality 


//reset the draw space to all white
const btn = document.querySelector('#reset-draw-space');
btn.addEventListener('click', resetDrawSpace);

function resetDrawSpace() {
    sketchElements = document.querySelectorAll('.sketch-element');
    for (let i =0; i < sketchElements.length; i++) {
        sketchElements[i].style.backgroundColor = 'white';
    }
    // sketchBox.style.borderColor = 'green';
};


