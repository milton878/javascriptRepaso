//estructura  para futuro objetos
//CLASS:
class Producto{
    constructor(titulo, color, precio){
        this.titulo = titulo;
        this.color = color;
        this.precio = precio;
    }
}
//creo el nuevo objeto (paso parametros)
const producto1 = new Producto("silla", "blanca", "400$");
console.log(producto1);
//es igaul que declarar al objeto de forma literal llego a lo mismo

const producto2 ={
    titulo: "silla",
    color:"blanca",
    precio:"$5000"
}
console.log(producto2);