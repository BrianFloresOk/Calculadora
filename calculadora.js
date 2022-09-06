/* Practica integradora, Calculadora.
Brian Flores */
/* El programa a continuacion realiza operaciones
matematicas en simultaneo*/

// Asignacion de valores para calcular
let num1 = 12
let num2 = 6

//Resolucion de las operaciones matematicas
let Suma = require("./suma")  
console.log("El resultado de la suma es: ", Suma(num1, num2))

let Resta = require("./resta") 
console.log("El resultado de la resta es: ", Resta(num1, num2))

let Division = require("./division")
console.log("El resultado de la division es: ", Division(num1, num2))

let Multiplicacion = require("./multiplicacion")
console.log("El resultado de la multiplicacion es: ", Multiplicacion(num1, num2))