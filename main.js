import dictionary from './dictionary.js';
import { speakerIcon, bookIcon } from './assets.js';
import { Utils } from './utils.js';

const counter = document.querySelector('#counter');
const listContainer = document.querySelector('.list-container');
const inputs = document.querySelectorAll('input[type=checkbox]');

const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

let filtered = [];

function scanForChecked() {
  let checkedLevels = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(item => {
    checkedLevels.push(item.value);
  })
  return checkedLevels;
}

function filterForVerbs(markedLevels) {
  const allFiltered = [];
  markedLevels.forEach(level => {
    filtered = dictionary.filter(verb => verb.level === level);
    allFiltered.push(...filtered);
  });
  /*   // log verbs with unmarked level
    console.log(dictionary.filter(verb => verb.level === '?'));
    return allFiltered.sort((a, b) => (a.verb1 > b.verb1) ? 1 : ((b.verb1 > a.verb1) ? -1 : 0)); */
}

function displayList(data) {
  counter.innerHTML = data.length;

  if (data.length === 0) {
    return listContainer.innerHTML = `<div class="verb-text">Click to select</div>`;
  };

  if (!window.speechSynthesis) {
    return listContainer.innerHTML = `<div class="verb-text">Your browser does not support the Web Speech API. Try a different one.</div>`;
  }

  const listItems = data.reduce((result, item) => {
    result += `
      <div class="verb-container">
        <div class="verb-speaker"> ${speakerIcon}</div>
        <div class="verb-text">${item.verb1} ${item.verb2} ${item.verb3}</div>
        <span class="verb-level">${item.level}</span>
        <div class="verb-meaning" data-meaning="${item.meaning}">${bookIcon}</div>
      </div>
    `;
    return result;
  }, '');

  listContainer.innerHTML = listItems;
  // event listener on speaker icons
  const speakerIcons = document.querySelectorAll('.verb-speaker');
  speakerIcons.forEach(icon =>
    icon.addEventListener('click', speakerIconHandler)
  );
  // event listener on book icons
  const bookIcons = document.querySelectorAll('.verb-meaning');
  bookIcons.forEach(icon =>
    icon.addEventListener('click', bookIconHandler)
  );
}

// EVENT HANDLERS
function checkboxHandler(e) {
  const checkedLevels = scanForChecked();
  const filteredData = filterForVerbs(checkedLevels);
  displayList(filteredData);
}

function speakerIconHandler(e) {
  let u = new SpeechSynthesisUtterance();

  Utils.adjustPronunciation(e, u);

  u.rate = 0.7;
  u.lang = 'en-GB';
  speechSynthesis.speak(u);
}

function bookIconHandler(e) {
  //grab the verb from the DOM
  const verbString = Utils.getPreviousSibling(e.currentTarget, '.verb-text').textContent;
  const levelString = e.currentTarget.previousElementSibling.textContent;
  const meaningString = e.currentTarget.closest('.verb-meaning').dataset.meaning;

  // populate the modal with the new info
  modalInner.innerHTML = `
    <h2>${verbString} – ${levelString}</h2>
    <p>${meaningString}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
}

// EVENT LISTENERS
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
