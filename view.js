import { speakerIcon, bookIcon } from './assets.js';
import { Utils } from './utils.js';
import { Speech } from './speech.js';

export class View {
  static displayList(data) {
    /* const counter = document.querySelector('#counter'); */
    const listContainer = document.querySelector('.list-container');
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
        <div class="verb-text">
          <span id="verb1" class="verb-box">${item.verb1} </span>
          <span id="verb2" class="verb-box">${item.verb2} </span>
          <span id="verb3" class="verb-box">${item.verb3}</span>
        </div>
        <div class="verb-level">${item.level}</div>
        <div class="verb-meaning" data-meaning="${item.meaning}">${bookIcon}</div>
      </div>
    `;
      return result;
    }, '');

    listContainer.innerHTML = listItems;
    // event listener on speaker icons
    const speakerIcons = document.querySelectorAll('.verb-speaker');
    speakerIcons.forEach(icon =>
      icon.addEventListener('click', this.speakerIconHandler)
    );
    // event listener on book icons
    const bookIcons = document.querySelectorAll('.verb-meaning');
    bookIcons.forEach(icon =>
      icon.addEventListener('click', this.bookIconHandler)
    );
  }
  static speakerIconHandler(e) {
    let u = new SpeechSynthesisUtterance();

    Speech.adjustPronunciation(e, u);

    u.rate = 0.8;
    u.lang = 'en-GB';
    speechSynthesis.speak(u);
  }
  static bookIconHandler(e) {
    const modalOuter = document.querySelector('.modal-outer');
    const modalInner = document.querySelector('.modal-inner');

    //grab the verb from the DOM
    const verbString = Utils
      .getPreviousSibling(e.currentTarget, '.verb-text')
      .textContent;
    const levelString = e.currentTarget
      .previousElementSibling
      .textContent;
    const meaningString = e.currentTarget
      .closest('.verb-meaning')
      .dataset
      .meaning;
    const verb1String = Utils
      .getPreviousSibling(e.currentTarget, '.verb-text')
      .firstElementChild
      .textContent;
    const oaldDomain = `https://www.oxfordlearnersdictionaries.com/definition/english/`
    const cambridgeDomain = `https://dictionary.cambridge.org/dictionary/english/`

    // populate the modal with the new info
    modalInner.innerHTML = `
    <h2>${verbString} – ${levelString}</h2>
    <hr>
    <p>${meaningString}</p>
    <br>
    <p>see verb in:</p>
    <ul>
    <li><a href="${oaldDomain}${verb1String}">Oxford Advanced Learner's Dictionary</a></li>
    <li><a href="${cambridgeDomain}${verb1String}">Cambridge Dictionary</a></li>
    </ul>
    `;
    // show the modal
    modalOuter.classList.add('open');
  }
}
