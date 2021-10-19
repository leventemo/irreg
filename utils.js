export class Utils {
  static getPreviousSibling = function (elem, selector) {
    var sibling = elem.previousElementSibling;

    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.previousElementSibling;
    }
  }

  static adjustPronunciation = function (e, u) {
    if (e.currentTarget.nextElementSibling.textContent === 'read read read') {
      u.text = 'read red red';
    } else if (e.currentTarget.nextElementSibling.textContent === 'proofread proofread proofread') {
      u.text = 'proofread proof red proof red';
    } else if (e.currentTarget.nextElementSibling.textContent === 'lead led led') {
      u.text = 'leed led led';
    } else if (e.currentTarget.nextElementSibling.textContent === 'remake remade remade') {
      u.text = 'ree make ree made ree made';
    } else if (e.currentTarget.nextElementSibling.textContent === 'rethink rethought rethought') {
      u.text = 'ree think ree thought ree thought';
    } else {
      u.text = e.currentTarget.nextElementSibling.textContent;
    }
  }
};
