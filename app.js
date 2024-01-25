//Variables
//La función Math.random en JavaScript genera un número decimal 
//aleatorio entre 0 (inclusivo) y 1 (exclusivo) de forma pseudoaleatoria
let numeroSecreto = Math.floor(Math.random()*10)+1; 
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        //usamos el template string con operador ternario
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}


/*Pasar el siguiente codigo a operador ternario

let palabraPersona = "";

if(cantidadPersonas == 1){
    palabraPersona = "persona";
}else{
    palabraPersona = "personas"
    }

//codigo refactorizado utilizando operador ternario
let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";
*/

/*
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log('Bienvenido');
*/

/*
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, 
utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!"
en la consola del navegador.

let nombre = "Bryan";
console.log(`¡Hola, ${nombre}!`);
*/

/*
Crea una variable llamada "nombre" y asígnale tu nombre.
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!"

let nombre = "Bryan";
alert(`¡Hola, ${nombre}!`);
*/

/*
Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el
lenguaje de programación que más te gusta?. Luego, almacena
la respuesta en una variable y muestra la respuesta en la
consola del navegador

let respuesta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Mi lenguaje de programaciòn favorito es ${respuesta}`);
*/

/*
Crea una variable llamada "valor1" y otra llamada "valor2",
asignándoles valores numéricos de tu elección. Luego, realiza
la suma de estos dos valores y almacena el resultado en una tercera
variable llamada "resultado". Utiliza console.log para mostrar el
mensaje "La suma de [valor1] y [valor2] es igual a [resultado]."
en la consola.

let valor1 = 6;
let valor2 = 9;

let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
*/

/*
Crea una variable llamada "valor1" y otra llamada "valor2",
asignándoles valores numéricos de tu elección. Luego, realiza la
resta de estos dos valores y almacena el resultado en una tercera
variable llamada "resultado". Utiliza console.log para mostrar el
mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]."
en la consola.

let valor1 = 9;
let valor2 = 6;

let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);
*/

/*
Pide al usuario que ingrese su edad con prompt. Con base en
la edad ingresada, utiliza un if para verificar si la persona es
mayor o menor de edad y muestra un mensaje apropiado en la consola

let edad = prompt('Ingresa tu edad');
console.log(edad == 18 ? "La persona es mayor de edad" : "La persona es menor de edad");
*/

/*
Crea una variable "numero" y solicita un valor con prompt. Luego,
verifica si es positivo, negativo o cero utilizando un if-else y
muestra el mensaje correspondiente.

let numero = prompt('Ingresa un número');

let verificación = numero == 0 ? "El número ingresado es neutro" :
                    numero > 0 ? "El número ingresado es positivo" :
                    "El número ingresado es negativo";

console.log(verificación);
*/

/*
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let iniciador = 1;
let limite = 10;

while (iniciador <= limite) {
    console.log(iniciador);
    iniciador++;
}
*/

/*
Crea una variable "nota" y asígnale un valor numérico. Utiliza un
if-else para determinar si la nota es mayor o igual a 7 y muestra
"Aprobado" o "Reprobado" en la consola

let nota = 7;
let mensaje = nota >= 7 ? "Aprobado" : "Reprobado";
console.log(mensaje);
*/

/*
Utiliza Math.random para generar cualquier número aleatorio
y muestra ese número en la consola

let numero = Math.random();
console.log(numero);
*/

/*
Utiliza Math.random para generar un número entero entre 1 y 10
y muestra ese número en la consola

let numero = Math.floor(Math.random()*10+1);
console.log(numero);
*/

/*
Utiliza Math.random para generar un número entero entre 1 y 1000
y muestra ese número en la consola

let numero = Math.floor(Math.random()*1000+1);
console.log(numero);
*/


