# IRREG

## ABOUT

This is an interactive list, and self-testing app, of English irregular verbs for learners

what's included in the verb list
* only what is included in OALD/Cambridge Dictionary
* that's not to say everything that is found in them is included

principles:
* when labelling the level, first idea: always use the lowest level: we're learners and want to know the word as early as possible
* BUT ended up choosing to find the orig mng
  + seemingly counter-intuitive results, eg. "beat"
    - sports: A2 – metaphorical mng
    - orig mng: B2 – not metaphorical
  + reason: logical – secret life of words

## TODO: CONTENT
- [ ] finish verb list
- [ ] label missing levels
- [ ] include links to OALD URLs for each word
- [ ] HU/SP translation for A1-A2

## TODO: CODE
- [ ] create 2-row dash: counter, etc. below level buttons
- [ ] 3 forms in separate divs
- [ ] alternative forms NOT with slashes
- [ ] level indicators to be positioned right
- [ ] if Web Speech API is not supported, still show verb list but include a warning msg: "speaker icons aren't working"
- [ ] remove event listeners when needed to be removed
- [ ] what happens when `dictionary.js` is not loaded?
- [ ] transition on list appearing, disapperaring?
- [ ] TS rewrite
- [ ] svg with a sprite: https://gomakethings.com/using-svgs/?

## USER STORIES

user can choose from modes:
  + study mode: instant search + text-to-speech + modal
    - user chooses level
    - all forms displayed, text-to-speech + mng on icons
    - all verbs of choosen level listed at the same time
    - user can mark their verbs with an asterisk and save their own list – in practice mode?
  + practice mode:
    - user chooses level, sets the number of qns for the round
    - random verbs of choosen level are listed one by one
    - random forms are hidden, text-to-speech on icon, mng in modal on icon
    - click on hidden verb form displays verb form
  + test mode: gapfill on random missing forms
    - user chooses level + sets the number of qns for the round
    - feedback at the end: scores, verbs that user made a mistake on
    - app registers correct answers and doesn't use those verbs in further rounds

## PSEUDO

STUDY MODE:
* on load:
  + set all checkboxes to "not checked" for Firefox
  + run the whole script once with empty values and display buttons + instructions: "Click to select"
* parse for checked levels: call `scanForChecked()`
  + return an array of checked levels: `checkedLevels`
* filter `dictionary` for the selected verb objects using `checkedLevels`: call `filterForVerbs`
  + create an array of the required verb objects: `verbsArray`
  + use `verbsArray` to calculate the number of hits
  + sort `verbsArray`
  + return `verbsArray`
* display a list of the verbs
* checkbox events: `scanForChecked()` again
  + event should be `change` to avoid the event firing twice, like with the `click` event
* speaker events: text-to-speech
* book events: modal windows

PRACTICE MODE:
* ...

TEST MODE:
* ...
