export class Speech {
  static adjustPronunciation = function (elem, utterance) {
    const elementText = Array.from(elem
      .currentTarget
      .nextElementSibling
      .children)
      .map(verb => {
        return verb.textContent;
      }).join('');

    const lookupObj = {
      'babysit babysat babysat': 'baby-sit baby-sat baby-sat',
      'bespeak bespoke bespoken': 'bespeak bespoke be spoken',
      'bestride bestrode bestridden': 'tyutyu bestrode be stridden',
      'breastfeed breastfed breastfed': 'breast feed breast fed breast fed',
      'forbear forbore forborne': 'for bear forbore forborne',
      'forbid forbade forbidden': 'forbid for baid forbidden',
      'forswear forswore forsworn': 'for swear forswore forsworn',
      'gainsay gainsaid gainsaid': 'gainsay gain said gain said',
      'inlay inlaid inlaid': 'in lay in laid in laid',
      'lip-read lip-read lip-read': 'lip reed lip red lip red',
      'lead led led': 'leed led led',
      'misread misread misread': 'mis reed mis red mis red',
      'overfly overflew overflown': 'overfly over flew overflown',
      'overlie overlay overlain': 'over lie overlay overlain',
      'proofread proofread proofread': 'proofread proof red proof red',
      'read read read': 'read red red',
      'rebuild rebuilt rebuilt': 'ree build ree built ree built',
      'redo redid redone': 'redo redid ree done',
      'redraw redrew redrawn': 'redraw ree drew ree drawn',
      'rehear reheard reheard': 'rehear ree heard ree heard',
      'remake remade remade': 'ree make ree made ree made',
      'rerun reran rerun': 'ree run ree ran ree run',
      'resit resat resat': 'ree sit ree sat ree sat',
      'restring restrung restrung': 'ree string ree strung ree strung',
      'retake retook retaken': 'ree take ree took ree taken',
      'rethink rethought rethought': 'ree think ree thought ree thought',
      'retread retrod/retreaded retrodden/retreaded': 'ree tread ree trod/ree treaded ree trodden/ree treaded',
      'rewrite rewrote rewritten': 'ree write rewrote rewritten',
      'sight-read sight-read sight-read': 'sight-read sight-red sight-red',
      'typeset typeset typeset': 'type set type set type set',
      'undertake undertook undertaken': 'undertake under took undertaken',
      'unfreeze unfroze unfrozen': 'unfreeze unfroze un frozen',
      'upset upset upset': 'up set up set up set',
      'wind wound wound': 'wynd wouhnd wouhnd'
    }

    utterance.text = lookupObj[elementText] || elementText;

  }
}
