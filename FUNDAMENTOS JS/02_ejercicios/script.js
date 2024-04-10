function temperatureCelsius()
{
console.log()
    let resultado = "";

    let temperature = prompt("Por favor ingrese la temperatura: ")
    if(temperature >= 0){
        resultado = `hace calor hay una temperatura de: <h2>${temperature} </h2>`
    } 
    else if(temperature < 0){
        resultado = `hace frio hay una temperatura de: <h2>${temperature} </h2>`
    }
    else{
        resultado = `Ingrese un caracter válido`;
    document.getElementById('lista').innerHTML = resultado;
    }
}