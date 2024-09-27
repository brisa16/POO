var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoImg = document.querySelector(".nav img");


var h3 = document.querySelector("h3");
h3.innerText = "New Title";


var petImg = document.querySelector("#pet-img");
function switchImg() {
    petImg.src = "dog.jpg";
}

function setActive(element) {
    if (element.classList.contains("dark-mode")) {
        element.innerText = "Cambiar al modo claro";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Cambiar al modo oscuro";
        element.classList.add("dark-mode");
    }
}