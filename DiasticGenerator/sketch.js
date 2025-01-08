var txt;
var words;
var currentWord = 0;

function preload() {
  txt = loadStrings('little_women.txt');
}

function diastic(search) {
  var phrase = [];
  for (var i = 0; i < search.length; i++) {
    var c = search.charAt(i);

    for (var j = currentWord; j < words.length; j++) {
      var expression = new RegExp(`^\\w\{${i}\}${c}\\w*`);
      if (expression.test(words[j])) {
        phrase.push(words[j]);
        break;
      }
      currentWord = j + 1;
    }
  }
  if (search.length != phrase.length) {
    currentWord = 0;
    return null;
  }
  return phrase;
}

function createPhraseElement(phrase, search) {
  var container = createP();
  for (var i = 0; i < search.length; i++) {
    var character = createSpan(search[i]);
    var wordStart = createSpan(phrase[i].substring(0, i));
    var wordEnd = createSpan(phrase[i].substring(i+1) + ' ');
    var wholeWord = createSpan();
    wordStart.parent(wholeWord);
    character.parent(wholeWord);
    wordEnd.parent(wholeWord);
    character.addClass('character-to-highlight');
    wholeWord.parent(container);
    wholeWord.mousePressed(showPopup.bind(null, phrase[i]));
  }
  return container;
}

function setup() {
  noCanvas();
  txt = join(txt, ' ');
  words = splitTokens(txt, ' "",!.?_');
  var submit = select("#submit");
  var search = select("#search");
  submit.mousePressed(onSubmitSearch);
}

function onSubmitSearch() {
  var search = select("#search");
  var searchToken = search.value();
  var phrase = diastic(searchToken);
  var p;
  if (phrase == null) {
    p = createP("we couldn't complete your request :\( try again");
    p.addClass('error-message')
  } else {
    p = createPhraseElement(phrase, searchToken);
  }
  p.parent(select(".form-container"));
  var charactersToHighlight = selectAll('.character-to-highlight');
  var transitionDelayMultiplier = 0;
  for(var i = 0; i < charactersToHighlight.length; i++) {
    var character = charactersToHighlight[i];
    if (!character.hasClass('highlight')) {
      character.addClass('highlight');
      character.style('transition-delay', transitionDelayMultiplier*300 + 'ms')
      transitionDelayMultiplier++;
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    onSubmitSearch(); 
  }
  
}

function showPopup(word) {
  var wordExpression = new RegExp(`${word}`, "g");
  var exampleSentencesExpression = new RegExp(`[^. ][^.]*${word}[^.]*\\.`, "g");
  var wordCount = Array.from(txt.matchAll(wordExpression)).length;
  
  var container = createDiv();
  container.addClass('popup');
  var wordCountMessage = createP(`"${word}" appears ${wordCount} times in Little Women`);
  wordCountMessage.addClass('word-count');
  var exampleMessage = createP('Examples:');
  var exampleContainer = createDiv();
  for (var example of txt.matchAll(exampleSentencesExpression)) {
    var exampleElement = createP(example[0]);
    exampleElement.parent(exampleContainer);
  }
  wordCountMessage.parent(container);
  exampleMessage.parent(container);
  exampleContainer.parent(container);
  container.mousePressed(closePopup);
}

function closePopup() {
  var popups = selectAll('.popup');
  for (var popup of popups) {
    popup.style('display', 'none');
  }
}








