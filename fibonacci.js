function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:

    var fibArray = [0,1];
    
    if (n >= 0 && n <= 1) {
        console.log(fibArray);
    }
    
    for (var i = 2; i < n; i++) {
        
        fibArray.push(fibArray[(i-1)] + fibArray[(i-2)]);
        console.log(fibArray);
    }

    
    
   
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(10);
