const auto={
    color:['rojo','negro','azul','blanco','gris'],
    marca:['renault','chevrolet','fiat','peugeot','ford'], 
    modelo: 'classic',
    antiguedad: 2000,
    patente:'XI0PM',

    apagar: function(){return 'auto encendido'},
    encender: function(){return 'el auto se apago'},

}

let auto1= new auto();
let prender=auto1.encender();
document.write("hola");

document.write(auto1);

document.write(prender);
document.write(auto1.apagar());
