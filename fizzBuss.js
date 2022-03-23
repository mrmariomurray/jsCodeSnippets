////////////////////////////////////// NOTE WELL //////////////////////////////////////////////////////////////////////////////
// the order of your if statements if of extreme importance. Once the if statement is evaluated as true it will skip all the other if statements. 

var output = [];
var count = 1;
var mod5 = count % 5;
var mod3 = count % 3;

function fizzBuzz() {
    while (count <= 100) {
        
    if (mod5 === 0 && mod3 === 0) {
        output.push("Fizz Buzz");
    } else if (mod5 === 0) {
        output.push("Buzz");
    } else if (mod3 === 0) {
            output.push("Fizz");
    }  else {
        output.push(count);
       }
  count++;
    }
    
    console.log(output);
}

fizzBuzz();