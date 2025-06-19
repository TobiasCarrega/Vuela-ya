function mensajebienvenida(nombre,contraseña){
    // Funcion que muestra el mesaje de bienvenida
    alert('Bienvenid@ ' + nombre );            
    window.location.href = "./html/main.html";

    // alert("su contraseña es" + contraseña)
}

function validarcuenta(){

// funcion que valida que la contraseña coincida con el nombre de usuario, extrayendo el usuario y la contraseña, comparandolas y enviando un mensaje para cada caso

    let nombre=document.getElementById("nombre").value;
    let contraseña=document.getElementById("Contraseña").value;
    let encontrado= false

    for (let i = 0; i < nombres.length; i++) {
        if (nombre===nombres[i] && contraseña===contraseñas[i]){
            mensajebienvenida(nombre,contraseña);
            encontrado=true
        }
        
    }
    if (encontrado===false) {
            alert("El usuario y/o contraseña no es correcta");
            // alert("su contraseña es" + contraseña);
        }
}

let nombres=["Lucia","Galo","Samuel","Tobias"]
let contraseñas=["4321","112233","1020","1234"]

document.getElementById("mostrarEnPantalla").addEventListener("click",validarcuenta);

