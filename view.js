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
          <span id="verb1">${item.verb1} </span>
          <span id="verb2">${item.verb2} </span>
          <span id="verb3">${item.verb3}</span>
        </div>
        <div class="verb-level">${item.level}</div>
        <div class="verb-meaning" data-meaning="${item.meaning}" data-hungarian="${item.hu}" data-spanish="${item.es}">${bookIcon}</div>
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
    const huString = e.currentTarget
      .closest('.verb-meaning')
      .dataset
      .hungarian;
    const esString = e.currentTarget
      .closest('.verb-meaning')
      .dataset
      .spanish;
    const verb1String = Utils
      .getPreviousSibling(e.currentTarget, '.verb-text')
      .firstElementChild
      .textContent
      .trim();

    const oaldSlugLookup = {
      /* A1 */
      'can': 'can1',
      'cost': 'cost_2',
      'do': 'do1_1',
      'drink': 'drink_2',
      'lie': 'lie1_1',
      'sing': 'sing_2',
      'string': 'string_2',
      /* A2 */
      'dream': 'dream_2',
      'lead': 'lead1_1',
      'light': 'light_3',
      'ring': 'ring2_1',
      /* B1 */
      'upset': 'upset_2',
      /* B2 */
      'forecast': 'forecast_2',
      'input': 'input_2',
      'mistake': 'mistake_2',
      'output': 'output_2',
      'speed': 'speed_2',
      'spring': 'spring_2',
      'tear': 'tear1_1',
      'wind': 'wind2_2'
    }

    const oaldSlug = oaldSlugLookup[verb1String] || verb1String;
    const cambridgeSlug = verb1String;

    const oaldDomain = `https://www.oxfordlearnersdictionaries.com/definition/english/`
    const cambridgeDomain = `https://dictionary.cambridge.org/dictionary/english/`

    // populate the modal with the new info
    modalInner.innerHTML = `
    <h2>${verbString} – ${levelString}</h2>
    <hr>
    <p>${meaningString}</p>
    <br>
    ${esString && `<p><span class="bold">ES: </span>${esString}</p>`}
    ${huString && `<p><span class="bold">HU: </span>${huString}</p><br>`}
    <p>see verb in:</p>
    <ul>
    <li><a href="${oaldDomain}${oaldSlug}">Oxford Advanced Learner's Dictionary</a></li>
    <li><a href="${cambridgeDomain}${cambridgeSlug}">Cambridge Dictionary</a></li>
    </ul>
    `;
    // show the modal
    modalOuter.classList.add('open');
  }
}
