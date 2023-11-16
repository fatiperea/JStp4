class Rectangulo {
  constructor(alto,ancho){
    this.alto=alto;
    this.ancho=ancho;
}
  
/*get alto () {
    return this.alto;
  }
  get ancho() {
    return this.ancho;
  }

  set alto1 (altura) {
    if(altura>0)
      this.alto1 = altura;
  }
  set ancho1(anchura) {
    if(anchura>0)
    this.ancho1 = anchura;
  }*/

  perimetro() {
    return 2 * this.alto + 2 * this.ancho;
  }
  area () {
    return this.alto * this.ancho;
  }
};

const rectangulo1= new Rectangulo(4,3);

console.log(rectangulo1);

const alto = parseFloat(prompt("Establecer el alto del rectangulo:"));
const ancho = parseFloat(prompt("Establecer el ancho del rectangulo:"));

const rectangulo2=new Rectangulo(alto,ancho);

if (isNaN(alto) && isNaN(ancho)) document.write("Valor invalido<br>");
else {
  document.write(
    `Su rectangulo tiene: ${rectangulo2.alto} de alto y ${rectangulo2.ancho} de ancho<br>`
  );

  document.write(`Su perímetro es: ${rectangulo2.perimetro()}<br>`);

  document.write(`Su superficie es: ${rectangulo2.area()}`);
}
