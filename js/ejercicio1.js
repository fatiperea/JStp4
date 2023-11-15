const auto = {
  color: ["rojo", "negro", "azul", "blanco", "gris"],
  marca: ["renault", "chevrolet", "fiat", "peugeot", "ford"],
  modelo: "classic",
  antigüedad: 2000,
  precio: 3000000,
  patente: "XI0PM",

  apagar: function () {
    document.write("el auto se apago");
  },
  encender: function () {
    return "auto encendido";
  },

  elegirAuto: function (opcion) {
    return auto.marca[opcion] + " " + auto.color[opcion];
  },
};
console.log(auto);
//document.write(auto.encender());
let prender = auto.encender();

let opcion = parseInt(prompt("Con que auto sales hoy? (1 al 4)"));

if (opcion <= auto.marca.length) {
  document.write("Tu elección es: ", auto.elegirAuto(opcion) + "<br>");
  document.write(prender + "<br>");
} else document.write("Opción incorrecta, no tenes " + opcion + " autos<br>");

auto.apagar();
