class Persona{
    #dni;
    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.#dni=dni;
        this.sexo=['F','M'];
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }
    get verNombre(){return this.nombre}

    get verEdad(){return this.edad}

    get verDNI(){return this.#dni}
/*
    get verSexo(){return this.sexo}

    get verPeso(){return this.peso}

    get verAlt(){return this.altura}

    get verFecNac(){return this.anioNacimiento} */

    set darNombre(nombre){this.nombre=nombre;}

    set darEdad(edad){ this.edad=edad;}

    set darDNI(dni){this.#dni=dni;}

    /*set darSexo(sexo){this.sexo=sexo;}

    set darPeso(peso){this.peso=peso;}

    set darAlt(altura){this.altura=altura;}

    set darAnioNac(anioNac){this.anioNacimiento=anioNac;}  */
    mostrarGeneracion(anioNac){

    }

    esMayor(){if(this.verEdad>=18) document.write(this.verNombre+" es mayor de edad</br>");}

    mostrarDatos(){
        document.write("Nombre: "+this.verNombre+"</br>"+"DNI: "+this.verDNI+"</br>"+"Edad: "+this.verEdad);

    }

    generaDNI(){}
}

const persona1= new Persona('Fatima Perea',37,32626283);

console.log(persona1);

persona1.mostrarDatos();