const sketchBox = document.querySelector('.sketch-box');
const slide = document.querySelector('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const pageContent = document.querySelector('.page-content');
const centerContainer = document.querySelector('.center');


setSketchBoxes(slide);
setToFalse();
addDrawFunctionality();

function setSketchBoxes(slide) {
    box_per_side = slide.value;
    numberOfBoxes = box_per_side * box_per_side;
    
    boxSideLength = 500 / Math.sqrt(numberOfBoxes);
    lengthString = boxSideLength + 'px';
    for (let i = 0; i < numberOfBoxes; i++){
        const sketchElement = document.createElement('div');
        sketchElement.classList.add('sketch-element');
        sketchElement.style.width = lengthString
        sketchElement.style.height = lengthString
        sketchBox.appendChild(sketchElement);
    }
};

function removeAllChildren() {
    // sketchBox.removeChild(sketchBox.lastChild);
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.lastChild);
    }
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

function setToFalse() {
    document.querySelectorAll(':not(.sketch-box .sketch-element').forEach(item => {
        item.addEventListener('mouseenter', event => {
            drawState = false;
        });
    });
}

function addDrawFunctionality() {
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
}
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

var slider = document.getElementById("myRange");
var output = document.getElementById("grid-size");
output.innerHTML = slider.value + ' x ' + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value + ' x ' + this.value;
}

slider.onchange = function () {
    removeAllChildren(sketchBox);
    setSketchBoxes(this);
    setToFalse();
    addDrawFunctionality();
}

right.style.width = (((pageContent.clientWidth - centerContainer.clientWidth) / 2) - 10 + 'px');
left.style.width = (((pageContent.clientWidth - centerContainer.clientWidth) / 2) - 10 + 'px');
