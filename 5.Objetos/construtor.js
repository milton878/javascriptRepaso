

//FUNCION CONSTRUCTORA:Para futuros Objetos
//SIEMPRE CON MAYUSCULA EL CONSTRUCTOR
//this hace referencia al producto en este caso
function Producto (titulo, color, precio){
    this.titulo = titulo;
    this.color = color;
    this.precio = precio;
}
//creo el nuevo objeto
const producto1 = new Producto ("silla", "rojo","$5000");
const producto2 = new Producto ("silla", "nrego","$5000");

console.log(producto1);
console.log(producto2);

