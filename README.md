# IRREG

[![Netlify Status](https://api.netlify.com/api/v1/badges/e623a1ff-91a5-44cd-9dca-8349099b44d1/deploy-status)](https://app.netlify.com/sites/irreg/deploys)

## ABOUT

This is an interactive list, and self-testing app, of English irregular verbs for learners, based on the idea of grouping the words into the six levels described by the [Common European Framework of Reference for Languages](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages).

[demo](https://irreg.netlify.app/)

## CONTENT

### The list

when compiling the list of verbs:
* I only included what reputable dictionaries (OALD/Cambridge Dictionary) for learners of English list as word entries
* I included prefixed verbs when considered useful for language learning purposes
* that's not to say everything that is found in them is included

### The levels

when labelling the levels:
* I decided to do it based on the original meaning of the verb rather than the lowest level marked in dictionary entries
* eg. [beat](https://www.oxfordlearnersdictionaries.com/definition/english/beat_1?q=beat)
  + sports: A2 – metaphorical mng
  + orig mng: B2 – not metaphorical
  + so "beat" got labelled as "B2" since the A2 metaphorical mng seems to have derived from the B2 meaning
* in most cases, of course, the original meaning of a verb is the lowest level and metaphorical meanings tend to be marked as a higher level meanings

### TODO: content
- [x] finish verb list
- [ ] label missing levels
- [ ] include links to OALD URLs for each word
- [ ] HU/SP translation for A1-A2
- [ ] more verbs from <https://en.wikipedia.org/wiki/List_of_English_irregular_verbs> ?

## CODE

### TODO: code
- [x] create 2-row dash: counter, search box, etc. below level buttons
- [x] set modal window margin for small devices
- [x] bigger font size in modals
- [x] level indicators to be positioned right
- [x] 3 verb forms in separate divs
- [ ] try inverting svg icon backgrounds & paths
- [ ] add fn to correct speech engine's pronunciation to Utils class
- [ ] pronunciation to be corrected (verbs with no level still to be checked): upset (stress), forbade (two forms), wind (all forms)
- [ ] check & correct text-to-speech pronunciation problems
- [ ] alternative forms NOT with slashes
- [ ] if Web Speech API is not supported, still show verb list but include a warning msg: "speaker icons aren't working"
- [ ] remove event listeners when needed to be removed
- [ ] what happens when `dictionary.js` is not loaded?
- [ ] transition on list appearing, disapperaring?
- [ ] TS rewrite
- [ ] svg with a sprite: https://gomakethings.com/using-svgs/?

### User stories

user can look up single verbs

user can choose between 3 modes:
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

### Pseudo

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

