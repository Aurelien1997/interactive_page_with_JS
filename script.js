// 1
let footer = document.querySelector('footer.text-muted');

let compteur = 0;
footer.addEventListener('click', function() {
    compteur++;
    console.log(`clic numéro ${compteur}`);
});

// 2
let menu = document.querySelector('button.navbar-toggler');

menu.addEventListener('click', function() {
    document.getElementById("navbarHeader").classList.toggle("collapse");
});

// 3
let card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div");
let edit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

edit.addEventListener("click", function(){
    card.style.color="#FF0000";
});

// 4
let card2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div");
let edit2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

edit2.addEventListener("click", function(){
    if (card2.style.color === ""){
        card2.style.color = "#00FF00";
    }else {
        card2.style.color = "";
    }
});

// 5
let nav = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow');
var link = document.querySelector('head > link');

nav.addEventListener("dblclick", function(){
    link.disabled = true;
});

// 6
let view = document.getElementsByClassName('btn btn-sm btn-success');
let image = document.getElementsByClassName('card-img-top');
let text = document.getElementsByClassName('card-text');

for (let i = 0; i < view.length; i++)
    view[i].addEventListener('mouseover', function () {
        text[i].classList.toggle("d-none");
        image[i].classList.toggle("w-25");
    });

// 7
let button = document.querySelector('body > main > section > div > p > a.btn.btn-secondary.my-2');
let parent = document.getElementsByClassName("row")[1];

button.addEventListener("click", function () {
    parent.insertBefore(parent.lastChild.previousElementSibling, parent.firstChild.nextElementSibling);
});

//8
let button1 = document.querySelector('body > main > section > div > p > a.btn.btn-primary.my-2');
let parent1 = document.getElementsByClassName("row")[1];

button1.setAttribute("href", "#");

button1.addEventListener("click", function () {
    parent1.insertBefore(parent.firstChild.nextElementSibling, parent.lastChild.previousElementSibling);
});