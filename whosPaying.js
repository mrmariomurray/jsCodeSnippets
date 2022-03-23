////////////////////////////////// SELECTING VALUES OUT OF AN ARRAY ////////////////////////////////////////////////////
// Exercise: Who is Paying for Lunch
var names = ["Mario","Kay","Shaunte","Shalai","Chris"] 
function whosPaying(names) {
    
/******Don't change the code above*******/
   
   var numberOfPeople = names.length;
var randomSelect = Math.floor(Math.random() * numberOfPeople);
   var payerName = names[randomSelect] ;
   return payerName + " is going to buy lunch today!";
    
    
    
    


/******Don't change the code below*******/    
}  
whosPaying(names);