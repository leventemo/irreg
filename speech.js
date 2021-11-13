export class Speech {
  static adjustPronunciation = function (elem, utterance) {
    const elementText = Array.from(elem
      .currentTarget
      .nextElementSibling
      .children)
      .map(verb => {
        return verb.textContent;
      }).join('');

    if (elementText === 'babysit babysat babysat') {
      utterance.text = 'baby-sit baby-sat baby-sat';
    } else if (elementText === 'lead led led') {
      utterance.text = 'leed led led';
    } else if (elementText === 'proofread proofread proofread') {
      utterance.text = 'proofread proof red proof red';
    } else if (elementText === 'read read read') {
      utterance.text = 'read red red';
    } else if (elementText === 'remake remade remade') {
      utterance.text = 'ree make ree made ree made';
    } else if (elementText === 'rethink rethought rethought') {
      utterance.text = 'ree think ree thought ree thought';
    }
    else {
      utterance.text = elem.currentTarget.nextElementSibling.textContent;
    }
  }
}
