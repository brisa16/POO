function message(){
    alert('Me gusta');
}

// Llamada desde el html 

function login(element){
    if(element.innerText == 'Login'){
        element.innerText = 'Logout';
    }
    else{
        element.innerText = 'Login';
    }
}

function hide(el){
    el.remove();
}