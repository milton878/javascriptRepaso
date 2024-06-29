

//-----FOR
// igaul funciona igual de while
// for (let x = 0; x < 10; x ++){
//     console.log("ciclos numero "+ x);
// }
// for (let x =0; x < 5; x++){
//     console.log("ciclo numero " + x);
// }


//----------WHILE (como)
// let x = 0;  //inicio
// ---(condicion)
// while(x < 5){ 
//     console.log("ciclo while " + x)
//     // lo ejecuta 5 veces
//      x = x + 1; //incrementador

// }
//     console.log( "ciclo numero " + x);
//     //lo repite hasta el nueve uno por uno

//     // alert(" ciclos " + x)

// }

//----DO WHILE: 
// LA INICA DEFERENCIA CON WHILE ES QUE SE EJECUTA AUNQUE SEA UNA VEZ
// sin prestarle atencin a la condicion que pongamos
// let z = 15;
// do{
//     console.log("ciclos do while numero " + z);
//     z++;

// }while(z < 10);

//---   SWITCH:
let disDeLaSemana = prompt("ingresar dia de la semana con numeros") ;
switch(disDeLaSemana){
    case "0":
        console.log("lunes");
        breack; //sino ponemos breack se sigue ejecutnado
        //es opcional porque en ocaciones podemos necesitar que siga 
    case "1": 
        console.log("martes");
        breack;
    case "2":
        console.log("miercoles");
        alert("es miercoles desde alert")
        breack;
    case "3":
        console.log("jueves")
        breack;
    case "4":
        console.log("viernes");
        breack;

    default:
    console.log("fin de semana");
}

