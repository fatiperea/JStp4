class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  get verAlto() {
    return this.alto;
  }
  get verAncho() {
    return this.ancho;
  }

  set cargaAlto(altura) {
    if (isNaN(altura) || altura < 0)
      return alert("Ingresar numero mayor a cero");
    else return (this.alto = altura);
  }
  set cargaAncho(anchura) {
    if (isNaN(anchura) || anchura < 0)
      return alert("Ingresar numero mayor a cero");
    else return (this.ancho = anchura);
  }

  perimetro() {
    return 2 * this.verAlto + 2 * this.verAncho;
  }
  area() {
    return this.verAlto * this.verAncho;
  }
}

const rectangulo1 = new Rectangulo(4, 3);

console.log(rectangulo1);

const alto = parseFloat(prompt("Establecer el alto del rectangulo:"));
const ancho = parseFloat(prompt("Establecer el ancho del rectangulo:"));

if (isNaN(alto) || alto <= 0 || isNaN(ancho) || ancho <= 0)
  alert("Ingresar numero mayor a cero");
else {
  const rectangulo2 = new Rectangulo(alto, ancho);

  console.log(rectangulo2);

  document.write(
    `Su rectangulo tiene: ${rectangulo2.verAlto} de alto y ${rectangulo2.verAncho} de ancho<br>`
  );

document.write(`Su perímetro es: ${rectangulo2.perimetro()}<br>`);

document.write(`Su superficie es: ${rectangulo2.area()}`);
  }
