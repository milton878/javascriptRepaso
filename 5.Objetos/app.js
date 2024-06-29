// objeto def: es una coleccion de Propiedades, y una propiedad es una asociacion 
// entre un nombre(Clave) y un Valor;

//objeto
const usuario1 = {
    nombre:"Milton",
    apellido:"Caraball",
    nacionalidad:"Argentina",
    //creo otro objeto dentro del mismo objeto usuario1
    hobbies: {
        deporte1:"futbol",
        desporte2:"natacion"
    }
}

const usuario2 = {
    nombre:"Eneas",
    apellido:"Caraball",
    nacionalidad:"Argentina"
}
//TRANSFORMA EL OBJETO "cambio valor de nacinalidad"
//se puede hacer en cualquier instancia del programa
usuario1.nacionalidad = "brasilera";

console.log(usuario1);
console.log(usuario2.nombre);

//otra forma de llegar a nombre
// console.log(usuario2["nombre"]);

//---ejemplo producto:
//puedo agregar al objeto variables que esten por fuera del el
//propiedades y metodos con variables y funciones externas

 const IVA = 1.21;
function saludar(){
    console.log("hola soy " + this.nombre)
}
const producto = {
    precio:"$45",
    color:"verde",
    tipo:"base",
    iva : IVA,
    saludar
}
console.log(producto)