// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}



function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}
// console.log(devolverUltimoElemento([10, 10, 16, 12]))


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}
// console.log(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?']))


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoDato = array.map(function (x) {
    return x + 1
  })
  return nuevoDato
}
// console.log(incrementarPorUno([1, 0, 10, 11]))


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // let array = []
  let total = array.push(elemento)
  return array
}
// console.log(agregarItemAlFinalDelArray([10, 10, 16, 12]))


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let total = array.unshift(elemento)
  return array
}
// console.log(agregarItemAlComienzoDelArray([3,5,4],10))


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras.join(' ')
  return frase

}
// console.log(dePalabrasAFrase(['Hello', 'world!']))


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  const buscar = array.find(elemento => elemento)
  if (elemento === buscar) {
    return true
  }
  return false
}
// console.log(arrayContiene([10, 10, 16, 12], 30))

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var suma = 0
  numeros.forEach(numero => {
    suma += numero
  });
  if (suma >= 0 && Math.ceil(suma) === Math.floor(suma)) {
    return suma
  }
  // return 'Error'
}
// console.log(agregarNumeros([0]))


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0
  resultadosTest.forEach(numero => {
    suma += numero
  });
  let promedio = suma / resultadosTest.length
  if (promedio >= 0 && Math.ceil(promedio) === Math.floor(promedio)) {
    return promedio
  }
}
// console.log(promedioResultadosTest([10,10,16,12]))


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros)
}

// console.log(numeroMasGrande([100, 10, 16, 12]))


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  // if(arguments.length < 1){
  //   return 0
  // }
  if (arguments.length < 1) {
    return 0
  } else {
    var multiplicar = 1
    for (let i = 0; i < arguments.length; i++) {
      multiplicar = multiplicar * arguments[i]
    }
    return multiplicar
  }
}
// console.log(multiplicarArgumentos([10,0,10]))

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0

  for (let i = 0; i < arreglo.length; i++) {
    // console.log(arreglo[i])
    if (arreglo[i] > 19) {
      contador++
    }
  }
  return contador
}
// console.log(cuentoElementos([97, 100, 190, 5, 7,10,20]))


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana'
  }
  return 'Es dia Laboral'

}

// console.log(diaDeLaSemana(3))


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numero = n.toString().split('')
  if (numero[0] === '9') {
    return true
  } else {
    return false
  }

  return numero
}
// console.log(empiezaConNueve(98))

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i = 0; i < arreglo.length - 1; i++) {
    // console.log(arreglo[i])
    if (arreglo[i] !== arreglo[i + 1]) {
      return false
    }
    return true

  }
}

// console.log(todosIguales([97,100,190,97]))


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let mesesArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesArray.push(array[i])
    }
  }
  if (mesesArray.length < 3) {
    return "No se encontraron los meses pedidos"
  }
  return mesesArray
}
// console.log(mesesDelAño(["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"]))


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let arrayNuevo = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      arrayNuevo.push(array[i])
    }
  }
  return arrayNuevo
}
console.log(mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]))


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = []
  var suma = numero
 
  for (let i = 0; i < 10; i++) {
    suma = suma + 2
    // console.log(suma)
    if(i === suma){
      break
    } else{
      array.push(suma)
    }
  }
  if(array.length < 10){
    return "Se interrumpió la ejecución"
  }
  return array
}
// console.log(breakStatement(-4))


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = []
  let suma = numero

  for (let i = 0; i < 10; i++) {
    console.log(suma)
    if(i === 5){
      continue
    } else{
      suma = suma + 2
      array.push(suma)  
    }
  }
  return array
}
// console.log(continueStatement(-4))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
