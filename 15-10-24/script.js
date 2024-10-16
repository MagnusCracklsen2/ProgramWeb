//definicion de una funcion
/*
function hello(){
    console.log("Hola Clase")
    console.log(" 5IV7");
}

//Llamada a la funcion
hello();
hello();
hello();
hello();
hello(); */

/*
//Retorno de una Funcion
function hello(){
    return "Hola clase";
}

const result = hello()

console.log(result);
*/
/*
//Funcion que retorna otra funcion
function hello(){
    return function (){
        return "Hola soy la funcion 2"
    }
}

console.log(hello()())

*/
/*
function add(x){

    console.log(x);

}

add(5)
*/
/*
//Multiparametros
function add(x,y){

    console.log(x+y);
}

add(5,10)
*/
/*
//control de error en multiparametros
function add(x,y){

    if (y===undefined){
        y=0;
    }

    console.log(x+y);
}

add(5,undefinied)

*/

/*
//Parametro de tipo cadena
function add(name){

    console.log("Hola"+name)
}
add("Hola Clase JS");

*/

//Objetos
const user = {
    nombre:"Alvarado",
    apellidoP:"Reyes",
    apellidoM:"Quiroz",
    eded:91,
    direccion :{
        calle:"Nicolas Bravo",
        no:598,
        colonia:"Narvarte",
        delegacion:"Los Pinos"
    },
    amigos: ["Raul","Maria"],
    usuario:"RaulRata",
    correo:"Raulelratin@gmail.com",
    activo:activo
}

console.log( user.nombre, user.apellidoP, user.apellidoM)
console.log(user.eded)
console.log(user.amigos)

if(user.activo){
    alert("El usuario esta activo") 
}else{
    alert("Elusuario esta inactivo")
}

if(user.activo){
    activo = true
    alert(user.direccion) 
}
//consola nombre y eso 
//alert activo
//consola edad
//alert calle y eso
// consola amigos