import { Utils } from './utils.js';
import { View } from './view.js';

const inputs = document.querySelectorAll('input[type=checkbox]');
const modalOuter = document.querySelector('.modal-outer');

// EVENT HANDLERS
function checkboxHandler(e) {
  const checkedLevels = Utils.scanForChecked();
  const filteredData = Utils.filterForVerbs(checkedLevels);
  View.displayList(filteredData);
}

// on load
document.addEventListener('DOMContentLoaded', (event) => {
  // reset checked value for Firefox
  inputs.forEach(input => input.checked = false);
  // set A1 to checked for a start
  /* inputs[0].checked = true; */
  checkboxHandler();
});

// on checkboxes
inputs.forEach(item => addEventListener('change', checkboxHandler));

// modal events
function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
