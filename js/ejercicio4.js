class Producto {
  constructor(codigo, nombre, precio) {
    //this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  set codigo(nuevoCodigo) {
    this.codigo = nuevoCodigo;
  }
 /* set nombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  set precio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }*/
  get codigo() {
    return this.codigo;
  }
/*
  get nombre() {
    return this.nombre;
  }

  get precio() {
    return this.precio;
  }*/

  imprimeDatos() {
    document.write(
      "Codigo: " +
        this.codigo 
       /* "</br>" +
        "Nombre: " +
        this.nombre +
        "</br>" +
        "Precio: $" +
        this.precio*/
    );
  }
}

//console.log(producto);

const producto1 = new Producto(1111, "fcvb001", 3550);
producto1.imprimeDatos();
const arrayProductos = [];
//producto.imprimeDatos();
