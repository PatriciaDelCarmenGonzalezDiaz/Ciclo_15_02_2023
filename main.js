// Pedir un numero al usuario y ver 
// la tabla de multiplicar
// anteriores al numero digitado
// Ejemplo  Usuario = 3
// Tabla 1, Tabla 2, Tabla 3

let num = Number(prompt("Digite un numero para hacer las tablas"));

for (var i=1; i<= num; i++) {
    for (var j=1; j<=10; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    }
}