

// // Left Triangle
var triangle = "";

for (var i = 1; i <= 5; i++) 
{
  for (var j = 1; j <= i; j++) 
  {
    triangle += "*";
  }
  triangle += "\n";
}
console.log(triangle);




// Right Triangle
var length1 = 5;
var triangle1 = "";

for (var i = 1; i <= length1; i++) {
  var spaces = " ".repeat(length1 - i);
  var asterisks = "*".repeat(i);
  triangle1 += spaces + asterisks + "\n";
}

console.log(triangle1);



// Triangle
let length2 = 5;
var triangle2 = "";

for (var i = 1; i <= length2; i++) {
  var spaces = " ".repeat(length2 - i);
  var asterisks = "*".repeat(2 * i - 1);
  triangle2 += spaces + asterisks + "\n";
}

console.log(triangle2);
