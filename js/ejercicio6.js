class Libro {
  constructor(ISBN, titulo, autor, paginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
  set cargaISBN(isbn) {
    this.ISBN = isbn;
  }
  set cargaTitulo(titulo) {
    this.titulo = titulo;
  }
  set cargaAutor(autor) {
    this.autor = autor;
  }
  set cargaPaginas(pag) {
    this.paginas = pag;
  }

  get verISBN() {
    return this.ISBN;
  }
  get verTitulo() {
    return this.titulo;
  }
  get verAutor() {
    return this.autor;
  }
  get verPaginas() {
    return this.paginas;
  }

  mostrarLibro() {
    document.write(`El libro ${this.verTitulo} con ISBN ${this.verISBN}  creado por ${this.verAutor} tiene ${this.verPaginas} paginas</br>`);
  }

  masPaginas(unLibro) {
    document.write("Libro con mayor cant. de pag. entre "+this.verTitulo+" y "+unLibro.verTitulo+": </br>");
    if (this.verPaginas > unLibro.verPaginas) this.mostrarLibro();
    else unLibro.mostrarLibro();
  }
}

const libro1 = new Libro(9788497595353, "Misery", "Stephen King", 376); console.log(libro1);

libro1.mostrarLibro();

const libro2 = new Libro(9788466345347, "It", "Stephen King", 1504);

libro1.masPaginas(libro2);