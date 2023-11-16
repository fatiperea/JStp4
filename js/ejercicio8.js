class Persona{
   // #dni;
    constructor(nombre,edad/*,dni,sexo,peso,altura,anioNacimiento*/){
        this.nombre=nombre;
        this.edad=edad;
        //this.#dni=dni;
        /*this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;*/
    }
    get verNombre(){return this.nombre}

    get verEdad(){return this.edad}

   // get verDNI(){return this.#dni}

   /* get verSexo(){return this.sexo}

    get verPeso(){return this.peso}

    get verAlt(){return this.altura}

    get verAnioNac(){return this.anioNacimiento} */

    set darNombre(nombre){this.nombre=nombre;}

    set darEdad(edad){ this.edad=edad;}

    //set darDNI(dni){this.#dni=dni;}

    /*set darSexo(sexo){this.sexo=sexo;}

    set darPeso(peso){this.peso=peso;}

    set darAlt(altura){this.altura=altura;}*/

    mostrarDatos(){
        document.write("Nombre: "+this.verNombre+"</br>"+"Edad: "+this.verEdad+"</br>");
    }

}

class Person extends Persona{
    constructor(nombre,edad,profesion){
        super(nombre,edad);
        this.profesion=profesion;
    }

    get verProfesion(){ return this.profesion;}
    set cargaProfesion(profesion){this.profesion=profesion;}

    saludar(){document.write(this.verNombre+" dice buen dia</br>");}

    despedirse(){document.write(this.verNombre+" dice adios</br>");}

    mostrarDatos(){
        document.write("Nombre: "+this.verNombre+"</br>"+"Edad: "+this.verEdad+"</br>"+"Profesion: "+this.verProfesion+"</br>");
    }
}
const nombre1=prompt("Ingrese nombre de la 1° persona: ");
const edad1=prompt("Ingrese edad: ");
const profesion1=prompt("Ingrese profesion: ");
const individuo= new Person(nombre1,edad1,profesion1);

console.log(individuo);

const nombre2=prompt("Ingrese nombre de la 2° persona: ");
const edad2=prompt("Ingrese edad: ");
const profesion2=prompt("Ingrese profesion: ");
const individuo1= new Person(nombre2,edad2,profesion2);

console.log(individuo1);

individuo.mostrarDatos();
individuo.saludar();
individuo1.mostrarDatos();
individuo1.saludar();

individuo.despedirse();
individuo1.despedirse();
