
const sketchBox = document.querySelector('.sketch-box');
const slide = document.querySelector('.slider');

console.log(slide.value);

setSketchBoxes(slide);
setToFalse();
addDrawFunctionality();

function setSketchBoxes(slide) {
    box_per_side = slide.value;
    numberOfBoxes = box_per_side * box_per_side;
    
    boxSideLength = 500 / Math.sqrt(numberOfBoxes);
    lengthString = boxSideLength + 'px';
    console.log(lengthString);
    for (let i = 0; i < numberOfBoxes; i++){
        const sketchElement = document.createElement('div');
        sketchElement.classList.add('sketch-element');
        sketchElement.style.width = lengthString
        sketchElement.style.height = lengthString
        sketchBox.appendChild(sketchElement);
    }
};


function removeAllChildren() {
    console.log('delete');
    console.log(sketchBox.firstChild);
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

const deleteButton = document.querySelector('#delete-elements');
deleteButton.addEventListener('click', removeAllChildren);




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
var output = document.getElementById("demo");
output.innerHTML = slider.value + ' x ' + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

    output.innerHTML = this.value + ' x ' + this.value;
    removeAllChildren(sketchBox);
    setSketchBoxes(this);
    setToFalse();
    addDrawFunctionality();

}