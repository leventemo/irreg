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
  static oaldSlugLookup = {
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
    'wind': 'wind2_2',
    /* C1 */
    'remake': 'remake_2',
    'spotlight': 'spotlight_2',
    'test-drive': 'test-drive_2',
    'floodlight': 'floodlight_2',
    'resit': 'resit_2',
    'sow': 'sow1',
    /*?*/
    'awake': 'awake_2',
    'backlight': 'backlight_2',
    'drip-feed': 'drip-feed_2',
    'green-light': 'green-light_2',
    'hamstring': 'hamstring_2',
    'inset': 'inset_2',
    'mishit': 'mishit_2',
    'overrun': 'overrun_2',
    'overspend': 'overspend_2',
    'relay': 'relay2',
    'rerun': 'rerun_2',
    'retread': 'retread_2',
    'saw': 'saw_2',
    'shit': 'shit_3',
    'shoe': 'shoe_2',
    'slit': 'slit_2',
    'stave': 'stave_2',
    'wet': 'wet_2'
  }
};
