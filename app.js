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
function makeRows(rows, cols) {
  bigContainer.style.setProperty('--grid-rows', rows);
  bigContainer.style.setProperty('--grid-cols', cols);
  for (i = 0; i < rows * cols; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.textContent = (i+1);
    bigContainer.appendChild(box);
  }
}
makeRows(16, 16);
