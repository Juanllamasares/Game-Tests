
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(valor) {
  // Tu código:

  return valor.toString();  
}

export function suma(num1,num2) {
 // Tu código:

  return num1 + num2;  
}

export function resta(num1,num2) {
 // Tu código:

  return num1 - num2;
}

export function multiplica(num1,num2) {
  // Tu código:

  return num1 * num2;
}

export function divide(num1,num2) { 
  // Tu código:
  
  return num1 / num2;;
}

export function sonIguales(valor1,valor2) {  
  // Tu código:

  return valor1 === valor2;  
}

export function tienenMismaLongitud(str1,str2) {  
  // Tu código:

  return str1.length === str2.length;
}

export function menosQueNoventa(num) {  
  // Tu código:

  return num<90;
}

export function mayorQueCincuenta(num) {  
  // Tu código:

  return num>50;
}

export function obtenerResto(num1,num2) {  
  // Tu código:

  return num1 % num2;
}

export function esPar(num) {
  // Tu código:

  return (num % 2) === 0;
}

export function esImpar(num) {  
  // Tu código:

  return num % 2 !== 0;
}

export function elevarAlCuadrado(num) {  
  // Tu código:

  return num**2;
}

export function elevarAlCubo(num) { 
  // Tu código:

  return num**3;
}

export function elevar(num,exp) {  
  // Tu código:

  return num**exp;
}

export function redondearNumero(num) {  
  // Tu código:

  return Math.round(num);
}

export function redondearHaciaArriba(num) { 
  // Tu código:

  return Math.ceil(num);
}

export function numeroRandom() {  
  // Tu código:

  return Math.random();
}

export function esPositivo(num) {
  // Tu código:
  
  return num > 0 ? 'Es positivo': num < 0 ? 'Es negativo' : false
}

export function agregarSimboloExclamacion(str) {  
  // Tu código:

  return str + '!';
}

export function combinarNombres(str1,str2) {
  // Tu código:

  return str1 +' '+str2;
}

export function obtenerSaludo(nombre) {
  // Tu código:

  return 'Hola '+ nombre + '!';
}

export function obtenerAreaRectangulo(base,altura) {  
  // Tu código:

  return base*altura;
}


export function retornarPerimetro(lado){
  // Tu código:

  return lado*4;
}


export function areaDelTriangulo(base,altura){
  // Tu código:

  return (base*altura) / 2;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  return euro*1.2;
}


export function esVocal(letra){
  // Tu código:

  return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ? "Es vocal" : letra.length > 1 ?  "Dato incorrecto" : "Dato incorrecto";
}
