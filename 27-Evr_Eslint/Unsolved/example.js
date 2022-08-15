var num_1 =  parseInt(prompt('Give me a number!'));
var num_2 = parseInt(prompt("Give me another number!"));
var results;

var operation = prompt('What would you like to do? (add, subtract, multiply, divide)').toUpperCase();

if (operation == "ADD") {
     var results = num_1 + num_2;
  alert('The sum of ' + num_1 + " and " + num_2 + " is " + results);
} else if (   operation === 'SUBTRACT') 
{
results = num_1 - num_2;
alert('The difference between ' + num_1 + " and " + num_2 + " is " + results);
} 
else if (operation === "MULTIPLY") {
    results = num_1 * num_2;
    alert('The product of ' + num_1 + " and " + num_2 + " is " + results);
} else if (operation === "DIVIDE") {
results = num_1 / num_2;
  alert('The quotient of ' + num_1 + " and " + num_2 + " is " + results);
} else {
alert("Not a valid option!");
}

