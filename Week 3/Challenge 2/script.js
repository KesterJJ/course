console.log(upIt());
var name = prompt("What is your name?");


function upIt() {
    var name = prompt("What is your name?");
var first = name.splice(0, 1);

var upper = first.toUpperCase();
return upper + name;
}

