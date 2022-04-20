
// Changing Heading and the Third Li
function changeName() {
    var changeLi = document.querySelector('ul').lastElementChild
    var greeting = document.firstElementChild.lastElementChild.firstElementChild;
        greeting.innerHTML = "Hello"
        changeLi.innerHTML = "Third"
            
   
    // if (greeting.innerHTML === "Hello" && changeLi.innerHTML === "Third") {
         userName =  prompt("What is your name?")
   console.log(userName);
   if (userName === "" || userName === null) {
       greeting.innerHTML = "Hello"
        changeLi.innerHTML = "Third"
   } else {
        greeting.innerHTML = userName;
         changeLi.innerHTML = userName;
    }  

    //Checking a Box
    document.querySelector("input").click();
   
    //Changing Link Color 
    document.querySelector('ul li a').style.color = "red";

    // Changing a button BG color
    document.querySelector(".btn").style.backgroundColor = "yellow";
}

changeName();





