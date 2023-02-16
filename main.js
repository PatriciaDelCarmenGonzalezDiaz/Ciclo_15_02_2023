//Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
//compone de los siguientes porcentajes:
//• 55% del promedio final de sus calificaciones de los tres(3) parciales.
//• 30% de la calificación examen final y
//• 15% de la calificación trabajo final.

let mensaje = "";
var notas = [];
var porcentaje = [0.55,0.30,0.15]
for (var i=1; i<=5;i++) {
    if (i<4) {
        mensaje = `Digite la nota del Parcial ${i}`;
    } else if (i == 4) {
        mensaje = `Digite la nota del Examen Final`;
    } else {
        mensaje = `Digite la nota del Trabajo Final`;
    }
    let nota = Number(prompt(mensaje));
    notas[i-1] = nota;
}
let uno = Math.round(((notas[0] + notas[1] + notas[2]) / 3) * porcentaje[0] * 100) / 100;
let dos = Math.round(notas[3] * porcentaje[1]* 100) / 100;
let tres = Math.round(notas[4] * porcentaje[2]* 100) / 100;
let definitiva = uno + dos + tres;

mensaje = `La calificación de los parciales ${notas[0]}, ${notas[1]}, ${notas[2]} es ${uno}`;
mensaje += ` La calificación del Examen Final ${notas[3]} es ${dos}`;
mensaje += ` La calificación del Trabajo Final ${notas[4]} es ${tres}`;
mensaje += ` Para una definitiva de ${definitiva}`;
alert(mensaje);
