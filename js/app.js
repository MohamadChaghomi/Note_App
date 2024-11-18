const inputElem = document.getElementById('input-field');
const addBtn = document.getElementById('btn-save');
const listedElem = document.getElementById('listed');
const removeBtn = document.getElementById('btn-delete');
const colorSelect = document.getElementsByClassName('color-box');
const removeCard = document.getElementById('listed');
function addTask() {
    if (inputElem.value.length != 0) {
        let newTaskP = document.createElement('p');
        newTaskP.className = "card-text p-3";
        newTaskP.innerHTML = inputElem.value;

        let newTaskDiv = document.createElement('div');
        newTaskDiv.style.backgroundColor = inputElem.style.backgroundColor
        newTaskDiv.className = "card shadow-sm rounded";
        newTaskDiv.appendChild(newTaskP);

        listedElem.appendChild(newTaskDiv);

        inputElem.value = '';
        inputElem.style.backgroundColor = 'white'
    }
}

function addTaskEnter(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}

function removeInput() {
    inputElem.value = '';
    inputElem.style.backgroundColor = 'white'
}

function changeColor(event) {
    const selectedColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = selectedColor;
}

function removeCardFunction(event) {
    const card = event.target.closest('.card');
    if (card) {
        card.remove();
    }
}

// Event listeners
inputElem.addEventListener('keyup', addTaskEnter);
addBtn.addEventListener('click', addTask);
removeBtn.addEventListener('click', removeInput);
removeCard.addEventListener('click', removeCardFunction);


// Add click event listener to each color box
Array.from(colorSelect).forEach(function(box) {
    box.addEventListener('click', changeColor);
});
