
const sketchBox = document.querySelector('.sketch-box');

numberOfBoxes = 5000;

boxSideLength = 600 / Math.sqrt(numberOfBoxes);
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
    //this prevent default line could become troubling if we add a drag function later
    // however it is used to eliminate erroneous sketching related to sketchbox mouseenter
    // comment
    event.preventDefault();
    if(event.button===0){
        drawState = true;
    }
});
window.addEventListener("mouseup", event => {
    if(event.button===0){
        drawState = false;
    }
});


// purpose of sketchbox mouse enter event listener
// It was found that you can get stuck in a drag scenario outside of the drawing square
// so if that happens this changes the draw state back to false when the mouse enters the sketch area
// however it doesn't happen quite fast enough so maybe one square will get filled
sketchBox.addEventListener('mouseenter', event => {
    drawState = false;
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
