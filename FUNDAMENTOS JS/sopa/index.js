function ejemplo(elemento) {
    console.log("elemento clickeado", elemento);
    elemento.style.backgroundColor = 'green'; // Cambia el color de fondo del botón
    elemento.textContent = 'Clickeado!'; // Cambia el texto del botón
}

function turnOff(element) {
    element.innerText = "Off";
    }

function hide(element) {
    element.remove();
    }
