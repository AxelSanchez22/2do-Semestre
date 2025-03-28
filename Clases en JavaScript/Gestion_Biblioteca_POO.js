//Clases requeridas para la biblioteca
class Autor {
    #nombre;
    #apellidos;
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    get nombre() {
        return this.#nombre;
    }
    get apellidos() {
        return this.#apellidos;
    }
    set nombre(nuevoNombre) {
        if (!nuevoNombre || nuevoNombre.trim() === "") {
            throw new Error("El nombre no puede estar vacío.");
        }
        this.#nombre = nuevoNombre;
    }
    set apellidos(nuevoApellidos) {
        if (!nuevoApellidos || nuevoApellidos.trim() === "") {
            throw new Error("El apellido no puede estar vacío.");
        }
        this.#apellidos = nuevoApellidos;
    }
    mostrarAutor() {
        return `${this.nombre} ${this.apellidos}`;
    }
}
class Libro {
    #titulo;
    #isbn;
    #autor;
    constructor(titulo, isbn, autor) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.autor = autor;
    }
    get titulo() {
        return this.#titulo;
    }
    get isbn() {
        return this.#isbn;
    }
    get autor() {
        return this.#autor;
    }
    set titulo(nuevoTitulo) {
        if (!nuevoTitulo || nuevoTitulo.trim() === "") {
            throw new Error("El título no puede estar vacío.");
        }
        this.#titulo = nuevoTitulo;
    }
    set isbn(nuevoIsbn) {
        if (!nuevoIsbn || nuevoIsbn.trim() === "") {
            throw new Error("El ISBN no puede estar vacío.");
        }
        this.#isbn = nuevoIsbn;
    }
    set autor(nuevoAutor) {
        if (!(nuevoAutor instanceof Autor)) {
            throw new Error("El autor debe ser una instancia de la clase Autor.");
        }
        this.#autor = nuevoAutor;
    }
    mostrarLibro() {
        console.log(`Título: ${this.titulo}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Autor: ${this.autor.mostrarAutor()}`);
    }
}
class Articulo extends Libro {
    #nombreRevista;
    constructor(titulo, isbn, autor, nombreRevista) {
        super(titulo, isbn, autor);
        this.nombreRevista = nombreRevista;
    }
    get nombreRevista() {
        return this.#nombreRevista;
    }
    set nombreRevista(nuevoNombreRevista) {
        if (!nuevoNombreRevista || nuevoNombreRevista.trim() === "") {
            throw new Error("El nombre de la revista no puede estar vacío.");
        }
        this.#nombreRevista = nuevoNombreRevista;
    }
    mostrarLibro() {
        super.mostrarLibro();
        console.log(`Nombre de la revista: ${this.nombreRevista}`);
    }
}
class Biblioteca {
    #listaLibros;
    constructor() {
        this.#listaLibros = [];
    }
    get listaLibros() {
        return this.#listaLibros;
    }
    agregarLibro(libro) {
        if (!(libro instanceof Libro)) {
            throw new Error("Solo se pueden agregar libros o artículos.");
        }
        this.#listaLibros.push(libro);
    }
    mostrarBiblioteca() {
        if (this.#listaLibros.length === 0) {
            console.log("La biblioteca está vacía.");
        } else {
            this.#listaLibros.forEach((libro, index) => {
                console.log(`\nLibro/Artículo ${index + 1}:`);
                libro.mostrarLibro();
            });
        }
    }
    borrarLibro(titulo) {
        const indice = this.#listaLibros.findIndex(libro => libro.titulo === titulo);
        if (indice === -1) {
            console.log("No se encontró un libro o artículo con ese título.");
        } else {
            this.#listaLibros.splice(indice, 1);
            console.log("Libro/Artículo eliminado.");
        }
    }
    contarLibros() {
        console.log(`La biblioteca tiene ${this.#listaLibros.length} libros/artículos.`);
    }
}

// Interfaz de usuario (Menú)
const bibliotecaMenu = new Biblioteca();
function mostrarMenu() {
    console.log("\nSeleccione una opción:");
    console.log("1. Agregar libro");
    console.log("2. Agregar artículo");
    console.log("3. Mostrar biblioteca");
    console.log("4. Borrar libro/artículo");
    console.log("5. Consultar cantidad de libros/artículos");
    console.log("6. Salir");
}
function menuInterfaz() {
    let numeroIngresado; 
    do {
        mostrarMenu();
        numeroIngresado = parseInt(prompt("Ingresa el número de la opción que quieras realizar: "));
        if (numeroIngresado === 1) {
            try {
                const tituloLibro = prompt("Título del libro: ");
                const isbnLibro = prompt("ISBN del libro: ");
                const nombreAutor = prompt("Nombre del autor: ");
                const apellidosAutor = prompt("Apellidos del autor: ");
                const autor = new Autor(nombreAutor, apellidosAutor);
                const libro = new Libro(tituloLibro, isbnLibro, autor);
                bibliotecaMenu.agregarLibro(libro);
                console.log("Libro agregado correctamente.");
            } catch (error) {
                console.error(error.message);
            }
        } else if (numeroIngresado === 2) {
            try {
                const tituloArticulo = prompt("Título del artículo: ");
                const isbnArticulo = prompt("ISBN del artículo: ");
                const nombreAutorArticulo = prompt("Nombre del autor: ");
                const apellidosAutorArticulo = prompt("Apellidos del autor: ");
                const nombreRevista = prompt("Nombre de la revista: ");
                const autorArticulo = new Autor(nombreAutorArticulo, apellidosAutorArticulo);
                const articulo = new Articulo(tituloArticulo, isbnArticulo, autorArticulo, nombreRevista);
                bibliotecaMenu.agregarLibro(articulo);
                console.log("Artículo agregado correctamente.");
            } catch (error) {
                console.error(error.message);
            }
        } else if (numeroIngresado === 3) {
            bibliotecaMenu.mostrarBiblioteca();
        } else if (numeroIngresado === 4) {
            const tituloEliminar = prompt("Título del libro/artículo a eliminar: ");
            bibliotecaMenu.borrarLibro(tituloEliminar);
        } else if (numeroIngresado === 5) {
            bibliotecaMenu.contarLibros();
        } else if (numeroIngresado === 6) {
            console.log("Gracias por usar la biblioteca.");
        } else {
            console.log("Opción no válida. Inténtalo de nuevo.");
        }
    } while (numeroIngresado !== 6);
}
menuInterfaz();