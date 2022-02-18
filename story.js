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
    case "Taunt the wolf":
      tauntWolf();
      break;
    case "Try the chimney":
      chimney();
      break;
    case "Give up":
      giveUp();
      break;
    case "Funeral":
      funeral();
      break;
    case "The End":
      theEnd();
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

function smartPig(){
  story("The third little pig made a house of bricks.<br>The big bad wolf said \"Little Pig, Little Pig, Let Me In!\"");
  choices = ["Taunt the wolf", "Let him in"];
  answer = setOptions(choices);
}

function tauntWolf(){
  story("The pig replied,\"Not by the hairs on my chinny chin chin!\" The wolf replied,\"Then I'll huff and I'll puff and I'll blow your house in!\" The wolf huffed and puffed.<br>But the house did not fall down. The wolf smoked too much I guess. He was very, very angry.");
  choices = ["Give up", "Try the chimney"];
  answer = setOptions(choices);
  }

function chimney(){
  story("The wolf went up on the roof and tried to get into the house through the chimney. He climbed into the chimney and slid down into a pot of boiling water. He ran out of the house and never came back!");
  choices = ["The End"];
  answer = setOptions(choices);
  }

function giveUp(){
  story("The wolf forgot his asthma inhaler so he had to go home.");
  choices = ["The End"];
  answer = setOptions(choices);
  }

function funeral(){
  story("You go to the funeral of the pig.  The funeral is very sad.  You spend so much time at the funeral that you don't learn how the smart pig defeated the wolf.  Hopefully you won't be in a similar situation one day!");
  choices = ["The End"];
  answer = setOptions(choices);
  }

function theEnd(){
  story("The end! Remember: Work hard, be smart, and always carry an inhaler.");
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
