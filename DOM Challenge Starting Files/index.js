function changeName() {
   userName =  prompt("What is your name?")
    var changeLi = document.firstElementChild.lastElementChild.lastElementChild.innerHTML;
   changeLi = userName;
    alert("Wha Gwan " + userName);
}

changeName();
