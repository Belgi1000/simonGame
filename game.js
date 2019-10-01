function clickBlink(color) {
  $('#' + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

// Record the buttons that were clicked



var userClicks = [];

$(".btn").click(function(event) {
  var mouseClick = this.id;
  userClicks.push(mouseClick);
  makeSound(mouseClick);
  gameWin();
  setTimeout(function() {
    nextLevel();
  }, 2000);
  nextLevel();

});


// Make a sound when there is a click

function makeSound(colors) {
  switch (colors) {
    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      clickBlink("green");
      break;
    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play(blue);
      clickBlink("blue");
      break;
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play(red);
      clickBlink("red");
      break;
    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play(yellow);
      clickBlink("yellow");
      break;
    default:
      // code block
  }
}



// add levels to the game

var game = [];

function addLevel() {

  var rndRes = (Math.floor(Math.random() * 4));

  if (rndRes === 0) {
    game.push("green");
  } else if (rndRes === 1) {
    game.push("blue");
  } else if (rndRes === 2) {
    game.push("red");
  } else {
    game.push("yellow");
  }


}



// setTimeout(function(){ makeSound(game[0]); }, 5000);




// Title changes when press a
function gameBegin() {

  $("body").keypress(function(event) {

    if (event.key == "a") {
      $("h1").text("The game begins!");
      alert("the game begins");
      addLevel();
      makeSound(game[0]);
      prompt();
    }
  });
}

gameBegin();

// Checks if the player pressed the right button

var levelCounter = length.game;
var i = 0;
var b = 0;

function gameWin() {
  if (game[i] == userClicks[i]) {
    i++;
    b++;
  } else {

    setTimeout(function(){
      $("body").addClass("game-over");
      $("h1").text("Game Over!");

    }, 1000);
return;

  }
}


function nextLevel() {
  if (game.length == userClicks.length) {
    i = 0;
    addLevel();
    $("h1").text("Great! Level " + (game.length-1));
    userClicks = [];
    setTimeout(function() {
      makeSound(game[game.length-1]);
    }, 2000);
  }
}
