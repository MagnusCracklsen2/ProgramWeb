document.title = "Iniciar Sesion";
//---------------------------------------------------------------

//Crear contenedor para el formulario
const container = document.createElement("div");
container.style.margin = "20px";


//Crear titulo
const title = document.createElement("h2");
title.textContent = "Iniciar Sesion";
container.appendChild(title);

//crear el formulario
const form = document.createElement("form");

//crear campo de nombre de usuario
const usernamelabel = document.createElement("label");
usernamelabel.textContent = "Nombre de Usuari@";
const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);


//Crear campo de la contraseña
const passwordlabel = document.createElement("label");
usernamelabel.textContent = "Contraseña";
const passwordInput = document.createElement("input");
usernameInput.type = "password";
usernameInput.required = true;
form.appendChild(passwordlabel);
form.appendChild(passwordInput);

//Crear boton de envio
const submitButton = document.createElement("button");
submitButton.textContent = "Iniciar sesion";
form.appendChild(submitButton);

//Mensaje de respuesta
const message = document.createElement("p");
container.appendChild(form);
container.appendChild(message);

//Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

//DATOS DE INICIO DE SESION PREDEFINIDA
const validUsername = "FEDELOBO";
const validaPassword = "ELFEDEWOOOOLF";
//Validar el nombre del user y el pass
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Validar nombre y el pass
    if(validUsername.value === validUsername && passwordInput.value === validaPassword){
        message.textContent = "Bienvenido";
        message.style.color = "green";
    }else{
        message.textContent = "Nombre de Usuario o contraseña Incorrecto"
        message.style.color = "red"; 
    }

    //Limpiar los imput
    usernameInput.value = "";
    passwordInput.value = "";
})