// Declaramos las variables
let x = 2;
let y = 3;

// Se muestran los valores originales de las variables
console.log("Valores antes del intercambio:");
console.log("x =", x);
console.log("y =", y);

// Intercambio de valores sin una variable auxiliar por medio de operaciones aritméticas
x = x + y; // Se suma el valor de y(3) al valor de x(2) y se almacena en x. Ahora, x tiene el valor de 5.
y = x - y; // Se resta el valor original de y(3) al nuevo valor de x(5) y se almacena en y. Entonces, y tiene el valor de 2
x = x - y; // Se resta el valor de y(2) al nuevo valor de x(5) y se almacena en x. Por lo que, x tiene el valor de 3

// Se obtiene el resultado deseado que es invertir los valores sin usar una variable auxiliar
console.log("Valores después del intercambio:");
console.log("x =", x);
console.log("y =", y);
