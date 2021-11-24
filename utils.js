import verbList from './verbList.js';

export class Utils {
  static scanForChecked() {
    let checkedLevels = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(item => {
      checkedLevels.push(item.value);
    })
    return checkedLevels;
  }

  static filterForVerbs(markedLevels) {
    let filtered = [];
    const allFiltered = [];
    markedLevels.forEach(level => {
      filtered = verbList.filter(verb => verb.level === level);
      allFiltered.push(...filtered);
    });
    /*   // log verbs with unmarked level
      console.log(verbList.filter(verb => verb.level === '?')); */

    return allFiltered.sort((a, b) => (a.verb1 > b.verb1) ? 1 : ((b.verb1 > a.verb1) ? -1 : 0));
  }

  static getPreviousSibling = function (elem, selector) {
    var sibling = elem.previousElementSibling;

    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.previousElementSibling;
    }
  }
  static getFirstChildInPreviousSibling = function (elem, selector) {
    var sibling = elem.previousElementSibling;

    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.previousElementSibling;
    }
  }
};
