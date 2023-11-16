class Persona{
    #dni;
    constructor(nombre,edad,dni/*,sexo,peso,altura,anioNacimiento*/){
        this.nombre=nombre;
        this.edad=edad;
        this.#dni=dni;
        /*this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;*/
    }
    get verNombre(){return this.nombre}

    get verEdad(){return this.edad}

    get verDNI(){return this.#dni}

   /* get verSexo(){return this.sexo}

    get verPeso(){return this.peso}

    get verAlt(){return this.altura}

    get verAnioNac(){return this.anioNacimiento} */

    set darNombre(nombre){this.nombre=nombre;}

    set darEdad(edad){ this.edad=edad;}

    set darDNI(dni){this.#dni=dni;}

    /*set darSexo(sexo){this.sexo=sexo;}

    set darPeso(peso){this.peso=peso;}

    set darAlt(altura){this.altura=altura;}*/

}

class Person extends Persona{
    constructor(nombre,edad,dni,profesion){
        super(nombre,edad,dni);
        this.profesion=profesion;
    }

    get profesion(){ return this.profesion;}
    set cargaProfesion(profesion){this.profesion=profesion;}

    saludar(){document.write(this.verNombre+" dice buen dia");}

    despedirse(){document.write(this.verNombre+" dice adios");}
}