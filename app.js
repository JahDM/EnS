/*
for (let i = 0; i < 256; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.textContent = ':)';
    const bigContainer = document.getElementById('big-container');
    bigContainer.appendChild(box);
}
*/



const bigContainer = document.getElementById('bigContainer');
let box;

function makeRows(rows, cols) {
  bigContainer.style.setProperty('--grid-rows', rows);
  bigContainer.style.setProperty('--grid-cols', cols);
  for (i = 0; i < rows * cols; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    bigContainer.appendChild(box);
    document.getElementsByClassName('box')
    box.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'black';
})
  }
}
makeRows(16, 16);
