class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  set altaCodigo(nuevoCodigo) {
    this.codigo = nuevoCodigo;
  }
  set altaNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  set altaPrecio(nuevoPrecio) {
    if(nuevoPrecio>0)
      this.precio = nuevoPrecio;
  }
  get verCodigo() {
    return this.codigo;
  }

  get verNombre() {
    return this.nombre;
  }

  get verPrecio() {
    return this.precio;
  }

 imprimeDatos() {
    document.write(this.verCodigo + " " +this.verNombre +" " + this.verPrecio+"</br>");
  }
}

//console.log(producto);

const producto1 = new Producto(1111, "fcvb001", 3550);
const producto2 = new Producto(1112, "fcvb002", 2500);
const producto3 = new Producto(1113, "fcvb003", 1550);

//producto1.imprimeDatos();
const arrayProductos = [producto1,producto2,producto3];
//document.write(arrayProductos);
document.write("Codigo:  Nombre: Precio:</br>"); 
for(let i=0;i<arrayProductos.length;i++)
{
  arrayProductos[i].imprimeDatos();
}
