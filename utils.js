export class Utils {
  static getPreviousSibling = function (elem, selector) {
    var sibling = elem.previousElementSibling;

    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.previousElementSibling;
    }
  }

  static adjustPronunciation = function (elem, utterance) {
    if (elem.currentTarget.nextElementSibling.textContent === 'read read read') {
      utterance.text = 'read red red';
    } else if (elem.currentTarget.nextElementSibling.textContent === 'proofread proofread proofread') {
      utterance.text = 'proofread proof red proof red';
    } else if (elem.currentTarget.nextElementSibling.textContent === 'lead led led') {
      utterance.text = 'leed led led';
    } else if (elem.currentTarget.nextElementSibling.textContent === 'remake remade remade') {
      utterance.text = 'ree make ree made ree made';
    } else if (elem.currentTarget.nextElementSibling.textContent === 'rethink rethought rethought') {
      utterance.text = 'ree think ree thought ree thought';
    } else {
      utterance.text = elem.currentTarget.nextElementSibling.textContent;
    }
  }
};
