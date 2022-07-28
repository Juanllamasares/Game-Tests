export function devolverPrimerElemento(array) {
    // Tu código:
   
    return array[0];
  }
  
  
  export function devolverUltimoElemento(array) {
    // Tu código:
   let ultimo = array.pop();

    return ultimo;
  }
  
  
  export function obtenerLargoDelArray(array) {
    // Tu código:
   
    return array.length;
  }
  
  
  export function incrementarPorUno(array) {
    // Tu código:
   const newArray = array.map((el)=> el + 1);

    return newArray;
  }
  
  
  export function agregarItemAlFinalDelArray(array, elemento) {
    // Tu código:
    array.push(elemento);

    return array;
  }
  
  
  export function agregarItemAlComienzoDelArray(array, elemento) {
    /// Tu código:
   array.unshift(elemento);

   return array;
  }
  
  
  export function dePalabrasAFrase(palabras) {
    // Tu código:
   let frase = palabras.join(" ");
    return frase;
  }
  
  
  export function arrayContiene(array, elemento) {
    // Tu código:
   
    return array.includes(elemento);
  }
  
  
  export function agregarNumeros(numeros) {
    // Tu código:
    let suma = 0;

    numeros.map(el => suma+=el);

    return suma;
  }
  
  
  export function promedioResultadosTest(resultadosTest) {
    // Tu código:
   let suma = 0;
   resultadosTest.map(el => suma += el);
   let promedio = suma / resultadosTest.length;

    return promedio;
  }
  
  
  export function numeroMasGrande(numeros) {
   // Tu código:
   
    return Math.max(...numeros);
  }
  
  
  export function multiplicarArgumentos() {
    // Tu código:

    return;
  }
  
  
  export function cuentoElementos(arreglo){
   // Tu código:
   let counter = 0;
   arreglo.map(el => el > 18 ? counter += 1 : '');

   return counter;
  }
  
  
  export function diaDeLaSemana(numeroDeDia) {
    // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7 ) return "Es fin de semana";
   if(numeroDeDia > 1 && numeroDeDia < 7) return "Es dia Laboral";
  
   return "Numero de dia invalido";
  } 
  
  
  export function empiezaConNueve(n) {
   // Tu código:
      
    return n.toString().charAt(0) == 9;  
  }
  
  
  export function todosIguales(arreglo) {
   // Tu código:
   let item = arreglo[0];
   let igual = true;

   arreglo.map(el=> {if(el !==  item)return igual = false})

    return igual;
  } 
  
  
  export function mesesDelAño(array) {  
    // Tu código:
    const ok = ["Marzo","Noviembre","Enero"];

    if(array.includes("Marzo")&&array.includes("Enero")&&array.includes("Noviembre")) return ok;

    return "No se encontraron los meses pedidos";
  }
  
  
  export function mayorACien(array) {
    // Tu código:
    const newArray = array.filter(el=> el > 100);
    return newArray;
  }
  
  
  export function breakStatement(numero) {
    // Tu código:
    const array = [];
    let suma = 0;


    for (let i = 1; i < 11; i++) {
      array.push(numero += 2);
      suma += array[i-1];
      if(suma === i)return 'Se interrumpió la ejecución';
    }

    return array;
  }
  
  
  export function continueStatement(numero) {
    // Tu código:
    const array = [];

    for (let i = 0; i < 9; i++) {
      array.push(numero += 2);
    }

    return array;
  }