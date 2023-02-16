//Una farmacia aplica al precio de los remedios el 10% de descuento,
//hacer un programa que ingresando el costo de los medicamentos calcules el descuento y el precio final.

let costo = Number(prompt("Digite el costo del Medicamento"));
let gcia = Number(prompt("Cual es el porcentaje de Ganancia")) / 100;
let vta = Math.round(costo * (1 + gcia));
let descuento = vta * 0.1;


alert(`El costo del Medicamento es de ${costo}, su descuento es ${descuento} y el precio de venta es de ${vta}`);
