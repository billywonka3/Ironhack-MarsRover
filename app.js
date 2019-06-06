// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// Rover Movement Functions
function turnLeft(rover) {
  switch(rover.direction) {
    case "N": rover.direction = "W"; break;
    case "W": rover.direction = "S"; break;
    case "S": rover.direction = "E"; break;
    case "E": rover.direction = "N"; break;
  }
  console.log("turnLeft was called!" + " You are now facing '${rover.direction}'.");
}

function turnRight(rover) {
  switch(rover.direction) {
    case "N": rover.direction = "E"; break;
    case "E": rover.direction = "S"; break;
    case "S": rover.direction = "W"; break;
    case "W": rover.direction = "N"; break;
    default : return "Try again" ; break;
  }
  console.log("turnRight was called!" + " You are now facing '${rover.direction}'.");
}

function moveForward(rover) {
  switch(rover.direction) {
    case "N": rover.y = y-1; break;
    case "E": rover.x = x+1; break;
    case "S": rover.y = y+1; break;
    case "W": rover.x = x-1; break;
  }
  console.log("moveForward was called" + " You are at coordinate ('${x}','${y}')")
}

// Command Input Function
var input = get_string("Input commands: ");

function getInput(input) {
  for (let i=0; i<String.length; i++) {
    switch(i) {
      case r: turnRight(rover); 
        break;
      case l: turnLeft(rover); 
        break;
      case f: moveForward(rover); 
        rover.travelLog.push ['(x,y)']; 
        break;
      default: console.log("Please enter a valid set of commands");
        break
    }
  }
  console.log("Here is your Travel Log: ${travelLog[]}");
}