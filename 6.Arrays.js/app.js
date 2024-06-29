//Arrays sirve para almcadenar datos en formas de listas
//declaro arrays
//si respeta el orden en que los codeo en cambio los objetos no.
const productos = ['sillon', 'sillas','mesa', 'ropero'];
// const numeros = [1,2,3,4,5];
// const boleanos = [true, false, true];
// const mezcla = ['sillon',2,true];
// //array de objetos:
// const usuarios =[
//     { 
//         nombre: 'milton',
//         edad: 34,
//     },
//     {
//         nombre:'jose',
//         edad: 19,
//     }
// ]

//acceder al array
// console.log(productos);
// console.log(productos[2]);

//recorriendo nuestro array

// for (let i = 0; i < 4; i++){
//     console.log(productos[i]);
// }

//++++++++++ Metodos ++++++++
// 1.- LENGTH:cantidad de elementos del array
// console.log(productos.length);

// for (let i = 0; i < productos.length; i++){
//     console.log(productos[i]);
// }

//2.- PUSH: AGREGA ELEMENTO AL ARRAYS SIN HARD CODEARLO
//lo agrega al final del array
// productos.push('camas');
// console.log(productos);

//3.-UNSHIFT
//agrega elementos al inicio
// productos.unshift('puerta');
// console.log(productos)

//4.- SHIFT: elimina el primer elemento
// productos.shift();
// console.log(productos);

// 5.-POP: elimina el ultimo elemento
// productos.pop();
// console.log(productos);

//6.- splice: elimina uno o varios elementos del array
//-----------(indice donde arranco a eliminar)
//posicion uno y a partir de ahi tres elementos 
// productos.splice(1,2);
//  console.log(productos)

//7.- JOIN: generar un string con los elemento del array

// console.log(productos.join(' / ')) //separo lo elementos por una barra
// console.log(productos.join( ' , '));

//8.- CONCAT: unir dos array en uno

// const productos2 = ['puerta', 'ventana', 'ropero'];

// const productoFinal = productos.concat(productos2);
// console.log(productoFinal);

// 9.- SLICE: GENERA COPIA DE UNA PARTE DEL ARRAY
// const productosComedor = productos.slice(1,3)
// //el primer numero es el indice del elemento que queremos agarrar 
// //el segundo numero es el ultimo que queremos meter dentro del array pero no va a tomar ese sino el anterior
// console.log(productosComedor);

//10. INDEXOF: saber el numero de nuestro elementos
// console.log(productos.indexOf('ropero'));

// 11.- INCLUDE: saber si un elemento existe en el array

// console.log(productos.includes('sillas'))
//combino dos metodos
// /ejemplo: si quiero saber si exite un elemento y que posicion tiene */

// if(productos.includes('sillas')){
//     console.log(productos.indexOf('sillas'))
// }else{
//     console.log('cama no se encuentra en el array')
// }

//12- REVERSE: devuelve un array alreves

// productos.reverse();
// console.log(productos);
