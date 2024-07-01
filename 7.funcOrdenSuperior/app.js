// *****************
//funciones de orden superior

//Abstraccion de Funciones:
function sumarRango(min, max){
    let total = 0;

    for(let i = min; i <= max; i++ ){
        // total= total + i;
        total += i;
    }
    return total;
}

console.log(sumarRango(2,7));
console.log(sumarRango(1,6));
console.log(sumarRango(6,8));

let sumarEntreTresYSiete = sumarRango(3,7);
console.log('el resultado de la suma entre los num 3 y 7 es: ', sumarEntreTresYSiete)


//****** RETORNO de FUNCIONES:*********

// const mayoQueDiez = (num)=> num > 10;
    
function mayorQue(x){
    return (num) => num > x;

}
const mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez(11));

//******METODOS DE BUSQUEDA Y TRANSFORMACION */
const numeros = [1,2,45,65,5];
const animales = ["perro", "gato", "tortugas"]
const productos = [
    {nombre: "mesa", precio: 3500},
    {nombre: "silla", precio: 2890},
    {nombre: "silla madera", precio: 2890},

    {nombre: "cuadro", precio: 290},
    {nombre: "puerta", precio: 890}

]

//1.METODO ForEach() recorre el array y ejecuta lo que le digamos con cada eleemento
//-------------(numero): en este caso ese parametro representa a cada elemento del array
numeros.forEach((numero) =>{
    console.log(numero);
});
// se lee: En el array de numeros por cada numero haceme un console.log()de cada numero del array

productos.forEach((producto) =>{
    console.log(producto.nombre)
    console.log(producto.precio)

});

//2. Metodo FIND() recorrer el array y devolver el PRIMER ELEMETO que cumpla la condicion
//quiero saber si tengo un perro dentro del array

const perro = animales.find((animal) => animal === "perro");

console.log(perro);

//ejemplo importante:
// const productoElegido = prompt("ingrese el producto que quiera comprar");
// console.log(productos.find((producto)=> producto.nombre === productoElegido));


//3-METODO fILTER() Recorrer todo el array y devolver uno nuevo con los elementos que cumplan la condicion
//siempre nos devuelve un array
const gato = animales.filter((animal)=> animal === "gato");
console.log(gato);

const silla = productos.filter((producto) => producto.nombre.includes("silla"));
console.log(silla);

//4- Metodo SOME(): Recorrer el array y devolver true o false si se encuentra o no la condicion
 const cisne = animales.some((animal) => animal === "cisne");
 console.log(cisne);

 //5- MAP: recorrer el array y devolver un nuevo con los elementos transformados del array original
 //sirve para recorrer arrays de objetos
 const nombres = productos.map((producto) => producto.nombre);
 console.log(nombres);

 //ejemplo de MAP:
//actualizo los precios del array productos:
 const preciosActualizados = productos.map((producto) =>{
    //devuelve un nuevo array con los nobres y precios actualizados
    return{
        nombre: producto.nombre,
        precio: producto.precio * 1.5
    }
 })
 //llamo a los dos array el viejo y el nuevo para comparar
 console.log(productos);
 console.log(preciosActualizados);

 // 6- REDUCE()=> Recorre el array y devuelve un unico valor tras hacer una operacion sobre los elementos

 const total= numeros.reduce((acumulador, numero)=> acumulador + numero, 0);
 console.log(total);
//calculoo el total de precios de los prod del array
const totalCarrito = productos.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
console.log(totalCarrito);

// 7- SORT()=> reordenar el array segun el criterio que le indiquemos
//ordeno el array de menor a mayor
numeros.sort((a, b)=> a - b);
console.log(numeros);

// ***** MATH *****

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

//numero minimo del listado que le paso
console.log(Math.min(34,54,32,1));

//numero maximo del listado que le paso
console.log(Math.max(34,54,32,1));

// ceil() retornar el numero entero redondeado para arriba
console.log(Math.ceil(numeroDecimal1));

// floor() retornar el numero entero redondeado para abajo
console.log(Math.floor(numeroDecimal2));

// round() retornar si es mayor a la mitad para arriba y si es menor para abajo
console.log(Math.round(1.4));
console.log(Math.round(1.7));

//--random()=> retornar un numero aleatorio entre dos parametros
console.log(Math.random()); //num aleatorio entre 0 y 1

console.log(Math.round (Math.random()));//redondea numero aletorio

//ejemplo numero aleatorio entre 0 y 50

console.log(Math.round (Math.random() * 50));

//numeros entre 20 y 70 (porque va a arrancar en 20 y le terminar en 70= 50+20)

console.log(Math.round(Math.random()*50 + 20));