const bigContainer = document.getElementById('bigContainer');
const cancelButton = document.getElementById('cancelButton');

function makeRows(rows, cols) {
  bigContainer.style.setProperty('--grid-rows', rows);
  bigContainer.style.setProperty('--grid-cols', cols);
  for (i = 0; i < rows * cols; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    bigContainer.appendChild(box);
    box.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'pink';
    });
function reset() {
      while (bigContainer.firstChild) {
        bigContainer.removeChild(bigContainer.firstChild);
      }
    }
cancelButton.addEventListener('click', () => {
      reset();
    });

  }
}

//makeRows(16, 16);
let grid4X4 = document.getElementById('sixTeen');
sixTeen.addEventListener('click', () => {
  makeRows(4, 4);
});
let grid8X8 = document.getElementById('sixtyFour');
sixtyFour.addEventListener('click', () => {
  makeRows(8, 8);
});
let grid12X12 = document.getElementById('hundredFortyFour');
hundredFortyFour.addEventListener('click', () => {
  makeRows(12, 12);
});
let grid16X16 = document.getElementById('twoHundredFiftySix');
twoHundredFiftySix.addEventListener('click', () => {
  makeRows(16, 16);
});
let grid32X32 = document.getElementById('oneKTwentyFour');
oneKTwentyFour.addEventListener('click', () => {
  makeRows(32, 32);
});
let grid64X64 = document.getElementById('fourKninetySix');
fourKninetySix.addEventListener('click', () => {
  makeRows(32, 32);
});

