let numero: number = Number(prompt("Ingrese un NUMERO"));

while (numero === 0) {
  numero = Number(prompt("Ingresar otro numero"));
}
if (numero % 2 === 0) {
  console.log("El numero ingresado ( " + numero + " ) , es PAR");
} else {
  console.log("El numero ingresado ( " + numero + " ) , es IMPAR");
}
