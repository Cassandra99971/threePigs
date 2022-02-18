/* Uses Case Statements */

// variables
// var name = "";
var scene1=openingScene;

function checkAnswers(answer) {
  switch(answer) {
    case "Lazy pig":
      lazyPig();
      break;
    case "Stupid pig":
      stupidPig();
      break;
    case "Smart pig":
      smartPig();
      break;
    }
}

function openingScene(){
  story("Once upon a time, there were three little pigs who decided to build houses near the woods and get out of the big city. But a big bad wolf lived in the woods.<br>He was not happy when he saw the three little pigs building houses nearby.");
  choices = ["Lazy pig", "Stupid pig", "Smart pig"];
  answer = setOptions(choices);
}

function lazyPig(){
  story("The first little pig was lazy. He made a house of straw. The big bad wolf huffed and puffed and blew it down");
  choices = ["Stupid pig", "Smart pig", "Funeral"];
  answer = setOptions(choices);
}

function stupidPig(){
  story("The second little pig worked harder than the first little pig. He made a house of twigs. The big bad wolf huffed and puffed and blew the house down.");
  choices = ["Smart pig", "Funeral"];
  answer = setOptions(choices);
}

// Places
function thinkSomeMore() {
  story("You think about it some more and are sure this forest was not here yesterday.  \
  \nWhere did it come from and how does it know your name?\
  \nWhat do you want to do?");
  choices = ["go into the forest", "ignore it and go home"];
  answer = setOptions(choices);
}

function enterForest() {
    story("You enter the forest and soon become hopefully lost.\
    \nWhile you can't find your way out you do see a few places of interest.");
    forest();
}

function forest() {
  story("There is a house made of candy.\
  \nThere is a fruit vender.\
  \nThere is a small opening in the trees with a ring of mushroom in the middle.");
  choices = ["Think some more", "ignore it and go home"];
  answer = setOptions(choices);
}

function homeEarly() {
  var messages = ['You ignore it and walk home.',
    'Nothing exciting happens to you one the way.',
    "That was a very boring story, but you must be a boring person for having chosen to go home.",
    "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
    "To each his own I guess."
  ];
  delayText(messages, 1000);
}
