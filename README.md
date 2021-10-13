# IRREG

## TODO: CONTENT
- [ ] finish verb list
- [ ] label missing levels
- [ ] include links to OALD URLs for each word
- HU/SP translation for A1-A2

## TODO: CODE
- [ ] if Web Speech API is not supported, still show verb list but include a warning msg: "speaker icons aren't working"
- [ ] remove event listeners when needed to be removed
- [ ] what happens when `dictionary.js` is not loaded?
- [ ] multiple meaning: arrays to show them in multiple paragraph tags?
- [ ] level indicators to be positioned right
- [ ] transition on list appearing, disapperaring?
- [ ] TS rewrite
- [ ] svg with a sprite: https://gomakethings.com/using-svgs/?

## USER STORIES

* user can choose from modes:
  + study mode: instant search + text-to-speech + modal
    - user chooses level
    - all forms displayed, text-to-speech + mng on icons
    - all verbs of choosen level listed at the same time
  + practice mode:
    - user chooses level, sets timer
    - random verbs of choosen level are listed one by one
    - random forms are hidden, text-to-speech on icon, mng in modal on icon
    - click on hidden verb form displays verb form + starts timer to go to next verb
    - timer has a default value but user can set it too?
  + test mode: gapfill on random missing forms
    - user chooses level + sets timer as well, maybe?

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

## User stories

practice mode
* app to practice irregular verbs: user = student
* setup: user can
  + choose between collections of irregular verbs – level-based
  + they can set the number of qns for the round
* on start, user gets
  + random irreg verbs from the choosen level with of of the 3 forms hidden
  + click on missing form displays it
  + click on speaker icon: user can listen to the 3 forms
  + next
* when round finishes: setup for another round

test mode
* same but with feedback at the end:
  + scores
  + verbs that user made a mistake on

## ABOUT

what's incuded
* only what is included in OALD/Cambridge Dictionary
* that's not to say everything that is found in them is included

principles:
* when labelling the level, first idea: always use the lowest level: we're learners and want to know the word as early as possible
* BUT ended up choosing to find the orig mng
  + seemingly counter-intuitive results, eg. "beat"
    - sports: A2 – metaphorical mng
    - orig mng: B2 – not metaphorical
  + reason: logical – secret life of words
