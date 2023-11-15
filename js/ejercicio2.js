cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (monto) {
    return (cuenta.saldo += monto);
  },
  extraer: function (monto) {
    return (cuenta.saldo -= monto);
  },
  informar: function () {
    document.write(
      `Titular de la cuenta: ${cuenta.titular}<br>Saldo definitivo: $${cuenta.saldo}`
    );
  },
};

console.log(cuenta);

let importe = parseInt(prompt("Importe a ingresar: $"));
if (isNaN(importe)) document.write("Valor invalido<br>");
else document.write(`Saldo ingresado: $${importe}<br>Saldo total: $${cuenta.ingresar(importe)}<br>`);

importe = parseFloat(prompt("Importe a extraer: $"));
if (isNaN(importe)) document.write("Valor invalido<br>");
else 
document.write(`Saldo extraído: $${importe}<br>Saldo total: $${cuenta.extraer(importe)}<br>`);

cuenta.informar();
