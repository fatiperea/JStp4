class Contacto{
    constructor(nombre,telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }
    get verNombre(){return this.nombre;}
    get verTelefono(){return this.telefono;}

    set cargaNombre(nombre){this.nombre=nombre;}
    set cargaTelefono(tel){this.telefono=tel;}
}

class agendaContactos extends Contacto{
    constructor(nombre,telefono){
        super(nombre,telefono);
        /*this.nombre=nombre;
        this.telefono=telefono;*/
    }
    /*get verNombre(){return this.nombre;}
    get verTelefono(){return this.telefono;}

    set cargaNombre(nombre){this.nombre=nombre;}
    set cargaTelefono(tel){this.telefono=tel;}*/

    agregaContacto(contacto1){
        if(this.agendaLlena) alert("No es posible ingresar mas contactos");
        else
            this.push(contacto1);
    }

    existeContacto(contacto1){
        return this.includes(contacto1);
    }

    listaContacto(){
        for(let i=0;i<this.length;i++)
        {
            document.write("Contacto: "+this[i].verNombre+" - "+this[i].verTelefono+"</br>");
        }
    }
    buscaContacto(nombre1){
        if(this.verNombre === nombre1)
            return this.verTelefono;
        else
            alert("No hay un contacto de nombre "+nombre1);
    }
    eliminaContacto(contacto1){
        if(contacto1.existeContacto)
            this.splice();
    }

    agendaLlena(){
        let agendaCompleta;
        if(this.length>=10) {alert("Agenda llena"); agendaCompleta=true;}
        else {alert("Aun tiene espacio en la agenda");agendaCompleta=false;}

        return agendaCompleta;
    }
    huecosLibres(){
        if(this.agendaLlena())
            alert("No hay espacio libre");
        else
        {
            let espacioDispo=0;i=0;
            while(i<=this.length)
            {
                if(this[i] !== undefined)
                    espacioDispo++;
                i++;
            }
            return espacioDispo;
        }
    }
}
const nombre1=prompt("Ingrese nombre del 1° contacto: ");
const tel1=prompt("Ingrese telefono del 1° contacto: ");
const nombre2=prompt("Ingrese nombre del 2° contacto: ");
const tel2=prompt("Ingrese telefono del 2° contacto: ");
const contacto1= new Contacto(nombre1,tel1);
const contacto2= new Contacto(nombre2,tel2);
//console.log(contacto1);
const agenda= [contacto1,contacto2] //new agendaContactos;//[{nombre: nombre1, telefono: tel1},{nombre: nombre2, telefono: tel2}];



console.log(agenda);



//agenda=[contacto1,contacto2]; //new Contacto;
agenda.listaContacto();

/*for(let i=0;i<10;i++)
{

}*/