// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Tu código:
    return Math.max(x,y);
  }
  
  export function mayoriaDeEdad(edad) {
    // Tu código:
  
    return edad >= 18 ? "Allowed" : "Not allowed";
  }
    
  export function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    // Tu código:
  
    return status === 1 ? "Online" : status === 2 ? "Away" : status === 3 ? "Offline" : "Offline";
  }
  
  export function saludo(idioma) {  
    // Tu código:
    if(idioma == 'aleman')return "Guten Tag!";
    if(idioma == 'ingles')return "Hello!";
    if(idioma == 'mandarin')return "Ni Hao!";
  
    return "Hola!";
  }
  
  export function colors(color) {  
    
    // Tu código:
    if (color == 'blue')return 'This is blue';
    if (color == 'red')return 'This is red';
    if (color == 'green')return 'This is green';
    if (color == 'orange')return 'This is orange';

    return 'Color not found';
   
  }
  
  export function esDiezOCinco(numero) {
    // Tu código:
  
    return numero === 10 || numero === 5;
  }
  
  export function estaEnRango(numero) {  
    // Tu código:

    return numero >= 50 || numero <= 20 ? false : true;
  }
  
  export function esEntero(numero) {
    // Tu código:
  
    return  Number.isInteger(numero);
  }
  
  export function fizzBuzz(numero) {
    // Tu código:
    if(numero % 3 === 0 && numero % 5 === 0)return 'fizzbuzz';
    if(numero % 3 === 0)return 'fizz';
    if(numero % 5 === 0)return 'buzz';

    return numero;
  }
  
  export function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    // Tu código:
    if(num1 < 0 || num2 < 0 || num3 < 0)return 'Hay negativos';
    if(num1 == 0 || num2 == 0 || num3 == 0)return 'Error';
    if(num1 > num2 && num1 > num3 )return 'Número 1 es mayor y positivo';
    if(num3 > num1 && num3 > num2)return (num3 + 1);

    return false;
  }
  
  export function esPrimo(numero) {
    /// Tu código:
    if(numero === 0 || numero === 1)return false;
    for (let i = 2; i < numero; i++){
      if(numero % i == 0) return false;
    }
    return true;  
  }
  
  export function esVerdadero(valor){
    // Tu código:
  
    return valor === true ? 'Soy verdadero' : valor === false ? 'Soy falso' : '';
  }
  
  export function tablaDelSeis(){
    // Tu código:
    let tabla = [];
    for(let i = 0; i <= 10; i++){
      tabla.push(6 * i);
    }
    return tabla;
  }
  
  export function tieneTresDigitos(numero){
    // Tu código:
    let digitos = ~~(Math.log(numero) / Math.LN10 + 1);

    return digitos === 3;  
  }
  
  export function doWhile(numero) {  
    //Usar el bucle do ... while.
    let times = 0;
    do {
       numero += 5
       times += 1
    } while (times<8);

    return numero;
  }
  