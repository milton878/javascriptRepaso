//metodos funciones que hacemos dentro del constructor
//setear acciones que se pueden hacer con las propiedades

class Persona{
    constructor(nombre, edad , nacionalidad){
        //propiedades
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        //Metodos
        this.saludar = function(){console.log("hola soy " + this.nombre)}
        this.cumpleaños = ()=>{this.edad ++};
    }
}
const perosona1 = new Persona("Milton","34","Argentina");
const perosona2 = new Persona("nico","34","Argentina");

console.log(perosona1);
perosona1.saludar();//ejecuto la funcion linea 9
perosona2.saludar();

console.log(perosona1.edad);

perosona1.cumpleaños();
console.log(perosona1.edad);

//IN (para saber si hay cierta propiedad en un objeto)


if ("nombre" in perosona1){
    console.log(perosona1.nombre)
}else{
    "no hay nombre";
}
if("hobbies" in perosona1){
    console.log(perosona1.hobbies)
}else{
    console.log("no hay hobbies");
}

//operador FOR IN(recorre las propiedades del objeto)
for (const propiedad in perosona1){
    console.log(propiedad);
}
