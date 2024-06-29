//funciones DECLARADAS

//saludar()//se puede invocar antes de la declaracion de la funcion
//esto es unicamente con las funciones flechas con las anonimas no se puede

//--------NOMBRE-------(prametros){
//     SENTENCIA DE LA FUNCION
// }
// LLAMO   FUNCION()

function saludar(nombre, apellido){
    console.log("Hola mundo " + nombre + " " + apellido);
}
saludar('milton', 'Caraball'); //(le paso el nombre al parametro)
saludar('Eneas', 'Caraball');

//-FUNCIONES DECLARADAS CON RETORNO:
function saludar4(nombre2){
   return('hola ' + nombre2)
}
 console.log(saludar4('milton2'));
// otra forma de llamarlo es 
// let saludarMilton =saludar4("milton2")
// console.log("saludarMilton");

function suma(a,b){
    return a + b;
}
console.log(suma(20 , 10));

//FUNCIONES FLECHA CON RETORNO IMPLICITO
//NO HACE FALTA ESCRIBIRLO PORQUE YA LO TIENE IMPLICITO EN LA FUNCION FLECHA
const resta = (a, b) => a - b ;

console.log(resta (10, 4));


//---funciones Anonimas
//uso una constante para invocar a la funcion
const saludar2 = function(dias){
    console.log("Hola mundo hoy es " + dias)
}
saludar2("lunes");


//---funciones flecha
const saludar3 = (sobreNombre)=>{
    console.log("holas saludo de f.A me dicen " + sobreNombre)
}
//---si tengo un solo  PARAMETRO Y UNA SOLA SENTENCIA en la funcion la puedo comprimir
//ELIMINANDO PARENTECIS Y LLAVES
//const saludar3 = sobreNombre =>console.log("hola " + sobreNombre)
saludar3("titi")