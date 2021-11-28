# IRREG

[![Netlify Status](https://api.netlify.com/api/v1/badges/e623a1ff-91a5-44cd-9dca-8349099b44d1/deploy-status)](https://app.netlify.com/sites/irreg/deploys)

## ABOUT

This is an interactive list, and self-testing app, of English irregular verbs for learners, based on the idea of grouping the words into the six levels described by the [Common European Framework of Reference for Languages](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages).

[demo](https://irreg.netlify.app/)

## CONTENT

### The list

when compiling the list of verbs:
* I only included what reputable dictionaries (OALD/Cambridge Dictionary) for learners of English list as word entries
* I included compound and prefixed verbs when considered useful for language learning purposes
* that's not to say everything that is found in them is included

### The levels

when labelling the levels:
* I decided to do it based on the original meaning of the verb rather than the lowest level marked in dictionary entries
* eg. [beat](https://www.oxfordlearnersdictionaries.com/definition/english/beat_1?q=beat)
  + sports: A2 – metaphorical mng
  + orig mng: B2 – not metaphorical
  + so "beat" got labelled as "B2" since the A2 metaphorical mng seems to have derived from the B2 meaning
* in most cases, of course, the original meaning of a verb is the lowest level and metaphorical meanings tend to be marked as a higher level meanings
* the "floodlight case": floodlight (noun) === C2 -> floodlight (verb) = C2 too

### TODO: content
- [x] finish verb list: <https://www.englishpage.com/irregularverbs/irregularverbs.html>
- [x] more verbs from <https://en.wikipedia.org/wiki/List_of_English_irregular_verbs>
- [x] check printed OALD
- [x] include links to OALD/Cambridge dictionaries in modals
– [x] shorten -ed forms on long words + adjust pronunciation accordingly
- [x] HU/SP translation for A1-A2-B1:
- [ ] check "floodlight cases" – see above
- [ ] asterisk a là OALD printed? – what about text-to-speech then?
- [ ] example sentences
- [ ] HU/SP translation for B2:

last es/hu: understand

## CODE

### TODO: code
- [x] set language to English, set speaker if possible
- [x] finalize 'speech.js' > `adjustPronunciation`
- [x] set up layout on modals
- [x] style links in modals
- [x] fine-tune responsive verb listing: left a rogue grid-column in there for DOM-traversing & formatting reasons: `0.001rem`
- [ ] fix slug bugs like `dig: dig1` with a lookup object – checked links:
  - [x] A1
  - [ ] A2
  - [ ] B1
  - [ ] B2
  - [ ] C1
  - [ ] C2
  - [ ] ?
  - [ ] include slugs in `verbList`?


- [ ] bring back level marker for wider screens
- [ ] optimize text-to-speech for Android
- [ ] reading:
  + <https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/>
  + <https://css-tricks.com/using-the-web-speech-api-for-multilingual-translations/>
  + <https://www.voorhoede.nl/en/blog/exploring-the-web-speech-api/>
- [ ] `speech.js` > `adjustPronunciation` > `const elementText = ...` do it with `reduce()`
  + <https://stackoverflow.com/questions/38270089/reduce-array-to-a-single-string>
- [ ] test implemented language setting with 9C1
- [ ] use fetch rather than import from `data.js`
- [ ] align level marker to right in modal window - taken out of the flow with long verb forms, eg. "broadcast"
- [ ] try inverting svg icon backgrounds & paths
- [ ] alternative forms NOT with slashes?
- [ ] if Web Speech API is not supported, still show verb list but include a warning msg: "speaker icons aren't working"
- [ ] remove event listeners when they need to be removed
- [ ] what happens when `verblist.js` is not loaded?
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
* filter `verbList` for the selected verb objects using `checkedLevels`: call `filterForVerbs`
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

flip:
* smashing magazine walkthrough
* <https://codepen.io/MoorLex/pen/NBwNZa>
* <https://codepen.io/stix/pen/vgYwzG>

TEST MODE:
* ...

