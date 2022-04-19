

function changeName() {
    var changeLi = document.querySelector('ul').lastElementChild
    var greeting = document.firstElementChild.lastElementChild.firstElementChild;
        greeting.innerHTML = "Hello"
        changeLi.innerHTML = "Third"
            
   
    if (greeting.innerHTML === "Hello" && changeLi.innerHTML === "Third") {
         userName =  prompt("What is your name?")
        // greeting.innerHTML = "Hello"
        // changeLi.innerHTML = "Third"
        greeting.innerHTML = userName;
         changeLi.innerHTML = userName;
    } else if (greeting.innerHTML === "" && changeLi.innerHTML === "") {
        greeting.innerHTML = "Hello"
        changeLi.innerHTML = "Third"
    }

    
    
}

changeName();





