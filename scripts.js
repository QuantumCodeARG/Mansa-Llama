// Usuario y contraseña validos para el ingreso
const UsuarioValido = "MansaLlama";
const ContraseñaValida = "mansallamadelvalle";

// Funcion para el inicio de sesion
function handleLogin(event){
    event.preventDefault(); // Con esto evitamos que el formulario se envie automaticamente

    // Para obtener loa valores ingresados por el usuario
    const usurname = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Para validar credenciales
    if(usurname === UsuarioValido && password === ContraseñaValida){
        //Redirigira a dashboard
        window.location.href = "dashboard.html";
    } else {
        //Mostrar mensaje de error
        alert ("Usuario o contraseña incorrectos, Inténtalo de nuevo.");
    
    }
}