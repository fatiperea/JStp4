class Persona {
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

  set darNombre(nombre) {
    this.nombre = nombre;
  }

  set darEdad(edad) {
    if (edad > 0) this.edad = edad;
  }

  mostrarDatos() {
    document.write(
      "Nombre: " + this.verNombre + "</br>" + "Edad: " + this.verEdad + "</br>"
    );
  }
}

class Person extends Persona {
  constructor(nombre, edad, profesion) {
    super(nombre, edad);
    this.profesion = profesion;
  }

  get verProfesion() {
    return this.profesion;
  }
  set cargaProfesion(profesion) {
    this.profesion = profesion;
  }

  saludar() {
    document.write(this.verNombre + " dice buen dia</br>");
  }

  despedirse() {
    document.write(this.verNombre + " dice adios</br>");
  }

  mostrarDatos() {
    document.write(
      "Nombre: " +
        this.verNombre +
        "</br>" +
        "Edad: " +
        this.verEdad +
        "</br>" +
        "Profesion: " +
        this.verProfesion +
        "</br>"
    );
  }
}
const nombre1 = prompt("Ingrese nombre de la 1° persona: ");
const edad1 = prompt("Ingrese edad: ");
const profesion1 = prompt("Ingrese profesion: ");
const individuo = new Person(nombre1, edad1, profesion1);

console.log(individuo);

const nombre2 = prompt("Ingrese nombre de la 2° persona: ");
const edad2 = prompt("Ingrese edad: ");
const profesion2 = prompt("Ingrese profesion: ");
const individuo1 = new Person(nombre2, edad2, profesion2);

console.log(individuo1);

individuo.mostrarDatos();
individuo.saludar();
individuo1.mostrarDatos();
individuo1.saludar();

individuo.despedirse();
individuo1.despedirse();
