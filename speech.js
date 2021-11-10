export class Speech {
  static adjustPronunciation = function (elem, utterance) {
    const e = elem.currentTarget.nextElementSibling.textContent;
    if (e === 'read read read') {
      utterance.text = 'read red red';
    } else if (e === 'proofread proofread proofread') {
      utterance.text = 'proofread proof red proof red';
    } else if (e === 'lead led led') {
      utterance.text = 'leed led led';
    } else if (e === 'remake remade remade') {
      utterance.text = 'ree make ree made ree made';
    } else if (e === 'rethink rethought rethought') {
      utterance.text = 'ree think ree thought ree thought';
    } else if (e === 'babysit babysat babysat') {
      utterance.text = 'baby-sit baby-sat baby-sat';
    }
    else {
      utterance.text = elem.currentTarget.nextElementSibling.textContent;
    }
  }
}
