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
    } else if (elementText === 'bespeak bespoke bespoken') {
      utterance.text = 'bespeak bespoke be spoken';
    } else if (elementText === 'bestride bestrode bestridden') {
      utterance.text = 'bestride bestrode be stridden';
    } else if (elementText === 'breastfeed breastfed breastfed') {
      utterance.text = 'breast feed breast fed breast fed';
    } else if (elementText === 'forbear forbore forborne') {
      utterance.text = 'for bear forbore forborne';
    } else if (elementText === 'forbid forbade forbidden') {
      utterance.text = 'forbid for baid forbidden';
    } else if (elementText === 'forswear forswore forsworn') {
      utterance.text = 'for swear forswore forsworn';
    } else if (elementText === 'gainsay gainsaid gainsaid') {
      utterance.text = 'gainsay gain said gain said';
    } else if (elementText === 'inlay inlaid inlaid') {
      utterance.text = 'in lay in laid in laid';
    } else if (elementText === 'lip-read lip-read lip-read') {
      utterance.text = 'lip reed lip red lip red';
    } else if (elementText === 'lead led led') {
      utterance.text = 'leed led led';
    } else if (elementText === 'misread misread misread') {
      utterance.text = 'mis reed mis red mis red';
    } else if (elementText === 'overfly overflew overflown') {
      utterance.text = 'overfly over flew overflown';
    } else if (elementText === 'overlie overlay overlain') {
      utterance.text = 'over lie overlay overlain';
    } else if (elementText === 'proofread proofread proofread') {
      utterance.text = 'proofread proof red proof red';
    } else if (elementText === 'read read read') {
      utterance.text = 'read red red';
    } else if (elementText === 'rebuild rebuilt rebuilt') {
      utterance.text = 'ree build ree built ree built';
    } else if (elementText === 'redo redid redone') {
      utterance.text = 'redo redid ree done';
    } else if (elementText === 'redraw redrew redrawn') {
      utterance.text = 'redraw ree drew ree drawn';
    } else if (elementText === 'rehear reheard reheard') {
      utterance.text = 'rehear ree heard ree heard';
    } else if (elementText === 'remake remade remade') {
      utterance.text = 'ree make ree made ree made';
    } else if (elementText === 'rerun reran rerun') {
      utterance.text = 'ree run ree ran ree run';
    } else if (elementText === 'resit resat resat') {
      utterance.text = 'ree sit ree sat ree sat';
    } else if (elementText === 'restring restrung restrung') {
      utterance.text = 'ree string ree strung ree strung';
    } else if (elementText === 'retake retook retaken') {
      utterance.text = 'ree take ree took ree taken';
    } else if (elementText === 'rethink rethought rethought') {
      utterance.text = 'ree think ree thought ree thought';
    } else if (elementText === 'retread retrod/retreaded retrodden/retreaded') {
      utterance.text = 'ree tread ree trod/ree treaded ree trodden/ree treaded';
    } else if (elementText === 'rewrite rewrote rewritten') {
      utterance.text = 'ree write rewrote rewritten';
    } else if (elementText === 'sight-read sight-read sight-read') {
      utterance.text = 'sight-read sight-red sight-red';
    } else if (elementText === 'typeset typeset typeset') {
      utterance.text = 'type set type set type set';
    } else if (elementText === 'undertake undertook undertaken') {
      utterance.text = 'undertake under took undertaken';
    } else if (elementText === 'unfreeze unfroze unfrozen') {
      utterance.text = 'unfreeze unfroze un frozen';
    } else if (elementText === 'upset upset upset') {
      utterance.text = 'up set up set up set';
    } else if (elementText === 'wind wound wound') {
      utterance.text = 'wynd wouhnd wouhnd';
    } else {
      utterance.text = elem.currentTarget.nextElementSibling.textContent;
    }
  }
}
