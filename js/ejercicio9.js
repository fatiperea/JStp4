class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  get verNombre() {
    return this.nombre;
  }
  get verEdad() {
    return this.edad;
  }

  set altaNombre(nombre) {
    this.nombre = nombre;
  }
  set altaEdad(edad) {
    if(edad>0)
        this.edad = edad;
  }

  emitirSonido(sonido) {
    document.write(this.verNombre + "hace este sonido..." + sonido);
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonido(sonido) {
    document.write(
      this.verNombre + " es un perro y hace este sonido..." + sonido + "</br>"
    );
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonido(sonido) {
    document.write(
      this.verNombre + " es un gato y hace este sonido..." + sonido + "</br>"
    );
  }
}
const nombre1 = prompt("Ingrese nombre del gato:");
const edad1 = prompt("Ingrese edad del gato:");
const sonido1 = prompt("Ingrese sonido que emite el gato: ");
const nombre2 = prompt("Ingrese nombre del perro:");
const edad2 = prompt("Ingrese edad del perro:");
const sonido2 = prompt("Ingrese sonido que emite el perro: ");
const gato1 = new Gato(nombre1, edad1);
console.log(gato1);
gato1.emitirSonido(sonido1);
const perro1 = new Perro(nombre2, edad2);
perro1.emitirSonido(sonido2);
