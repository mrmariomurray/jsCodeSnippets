var newBottles = bottles--;
var bottles = 99;
function bottleSong() {
for (bottles = 99; bottles >= 0 ; bottles--) {
    if (bottles === 0) {
        console.log("No more bottles of beer on the wall, No more bottles of beer. Go to the store and get some more. 99 bottles of beer on the wall.")
    } else if(bottles===1) {
        console.log("One more bottle of beer on the wall. One more bottle of beer. Take it down and pass it around. No more bottles of beer on the wall.")
    }
        else {
         newBottles = bottles-1;
        console.log(bottles + " bottles of beer on the wall " + bottles + " bottles of beer." + " Take one down and pass it around " + newBottles + " bottles of beer on the wall.")
        
        
        }
    } 
} 
bottleSong();