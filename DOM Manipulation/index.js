
// changing heading and the third li
function changeName() {
    var changeLi = document.querySelector('ul').lastElementChild
    var greeting = document.firstElementChild.lastElementChild.firstElementChild;
        greeting.innerHTML = "Hello"
        changeLi.innerHTML = "Third"
            
   
    if (greeting.innerHTML === "Hello" && changeLi.innerHTML === "Third") {
         userName =  prompt("What is your name?")
   
        greeting.innerHTML = userName;
         changeLi.innerHTML = userName;
    } else if (greeting.innerHTML === "" && changeLi.innerHTML === "") {
        greeting.innerHTML = "Hello"
        changeLi.innerHTML = "Third"
    }

    //Checking a Box
    document.querySelector("input").click();
}

changeName();





