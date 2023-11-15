rectangulo = {
  alto: 0,
  ancho: 0,

  verAlto: function () {
    return rectangulo.alto;
  },
  verAncho: function () {
    return rectangulo.ancho;
  },

  darAlto: function (alto) {
    rectangulo.alto = alto;
  },
  darAncho: function (ancho) {
    rectangulo.ancho = ancho;
  },

  perimetro: function () {
    return 2 * rectangulo.alto + 2 * rectangulo.ancho;
  },
  area: function () {
    return rectangulo.alto * rectangulo.ancho;
  },
};

console.log(rectangulo);

const alto = parseFloat(prompt("Establecer el alto del rectangulo:"));
const ancho = parseFloat(prompt("Establecer el ancho del rectangulo:"));
rectangulo.darAlto(alto);

rectangulo.darAncho(ancho);

if (isNaN(alto) && isNaN(ancho)) document.write("Valor invalido<br>");
else {
  document.write(
    `Su rectangulo tiene: ${rectangulo.verAlto()} de alto y ${rectangulo.verAncho()} de ancho<br>`
  );

  document.write(`Su perímetro es: ${rectangulo.perimetro()}<br>`);

  document.write(`Su superficie es: ${rectangulo.area()}`);
}
