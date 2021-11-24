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
      'abide abode/~d abode/~d': 'abide abode/abided abode/abided',
      'babysit babysat babysat': 'baby-sit baby-sat baby-sat',
      'backlight backlit/~ed backlit/~ed': 'backlight backlit/backlighted backlit/backlighted',
      'beseech besought/~ed besought/~ed': 'beseech besought/beseeched besought/beseeched',
      'bespeak bespoke bespoken': 'bespeak bespoke be spoken',
      'bestride bestrode bestridden': 'bestride bestrode be stridden',
      'bid bid/bade bid/bidden': 'bid bid/baid bid/bidden',
      'breastfeed breastfed breastfed': 'breast feed breast fed breast fed',
      'broadcast broadcast/~ed broadcast/~ed': 'broadcast broadcast/broadcasted broadcast/broadcasted',
      'burn burnt/~ed burnt/~ed': 'burn burnt/burned burnt/burned',
      'bust bust/~ed bust/~ed': 'bust bust/busted bust/busted',
      'cleave cleft/clove/~d cleft/cloven/~d': 'cleave cleft/clove/cleaved cleft/cloven/cleaved',
      'dream dreamt/~ed dreamt/~ed': 'dream dreamt/dreamed dreamt/dreamed',
      'dwell dwelt/~ed dwelt/~ed': 'dwell dwelt/dwelled dwelt/dwelled',
      'forbear forbore forborne': 'for bear forbore forborne',
      'forbid forbade forbidden': 'forbid for baid forbidden',
      'forecast forecast/~ed forecast/~ed': 'forecast forecast/forecasted forecast/forecasted',
      'for(e)go for(e)went for(e)gone': 'forego forewent foregone',
      'forswear forswore forsworn': 'for swear forswore forsworn',
      'gainsay gainsaid gainsaid': 'gainsay gain said gain said',
      'green-light green-lit/~ed green-lit/~ed': 'green-light green-lit/green-lighted green-lit/green-lighted',
      'inlay inlaid inlaid': 'in lay in laid in laid',
      'input input/~ted input/~ted': 'input input/inputted input/inputted',
      'kneel knelt/~ed knelt/~ed': 'kneel knelt/kneeled knelt/kneeled',
      'learn learnt/~ed learnt/~ed': 'learn learnt/learned learnt/learned',
      'lip-read lip-read lip-read': 'lip reed lip red lip red',
      'lead led led': 'leed led led',
      'misread misread misread': 'mis reed mis red mis red',
      'misspell misspelt/~ed misspelt/~ed': 'misspell misspelt/misspelled misspelt/misspelled',
      'overfly overflew overflown': 'overfly over flew overflown',
      'overlie overlay overlain': 'over lie overlay overlain',
      'output output/~ted output/~ted': 'putput output/outputted output/outputted',
      'plead pled/~ed pled/~ed': 'plead pled/pleaded pled/pleaded',
      'proofread proofread proofread': 'proofread proof red proof red',
      'prove proved proven/~d': 'prove proved proven/proved',
      'quit quit/~ted quit/~ted': 'quit quit/quitted quit/quitted',
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
      'retread retrod/~ed retrodden/~ed': 'ree tread ree trod/ree treaded ree trodden/ree treaded',
      'wind wound wound': 'ree wynd ree wouhnd ree wouhnd',
      'rewrite rewrote rewritten': 'ree write rewrote rewritten',
      'shit shat/shit/~ted shat/shit/~ted': 'shit shat/shit/shitted shat/shit/shitted',
      'show showed shown/~ed': 'show showed shown/showed',
      'sight-read sight-read sight-read': 'sight-read sight-red sight-red',
      'smell smelt/~ed smelt/~ed': 'smell smelt/smelled smelt/smelled',
      'sneak snuck/~ed snuck/~ed': 'sneak snuck/sneaked snuck/sneaked',
      'speed sped/~ed sped/~ed': 'speed sped/speeded sped/speeded',
      'spell spelt/~ed spelt/~ed': 'spell spelt/spelled spelt/spelled',
      'spill spilt/~ed spilt/~ed': 'spill spilt/spilled spilt/spilled',
      'spoil spoilt/~ed spoilt/~ed': 'spoil spoilt/spoiled spoilt/spoiled',
      'stave stove/~d stove/~d': 'stave stove/staved stove/staved',
      'strew strewed strewn/~ed': 'strew strewed strewn/strewed',
      'strive strove/~d striven/~d': 'strive strove/strived striven/strived',
      'swell swelled swollen/~ed': 'swell swelled swollen/swelled',
      'typeset typeset typeset': 'type set type set type set',
      'undertake undertook undertaken': 'undertake under took undertaken',
      'unfreeze unfroze unfrozen': 'unfreeze unfroze un frozen',
      'upset upset upset': 'up set up set up set',
      'wind wound wound': 'wynd wouhnd wouhnd'
    }

    utterance.text = lookupObj[elementText] || elementText;

  }
}
