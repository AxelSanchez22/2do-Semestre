//Creación de clase
class Persona{
    static contador = 0;
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        Persona.contador++;
    }
    mostrarInformacion(){
        return `Nombre: ${this.nombre} | Edad: ${this.edad}`;
    }
    static obtenerTotalPersonas(){
        return Persona.contador;
    }
}
//Creación de objeto persona1
const persona1 = new Persona("Axel",18);
console.log(persona1.mostrarInformacion());
//Creación de objeto persona2
const persona2 = new Persona("Pepe",31);
console.log(persona2.mostrarInformacion());

//Método estático
console.log(Persona.obtenerTotalPersonas());


//Creación de clase
class Perro{
    static contador = 0;
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
        Perro.contador++;
    }
    mostrarInformacion(){
        return `Nombre: ${this.nombre} | Edad: ${this.raza}`;
    }
    static obtenerTotalPerro(){
        return Perro.contador;
    }
}
//Creación de objeto perro1
let nombrePerro = prompt("Ingrese el nombre del perro");
let razaPerro = prompt("Ingrese la raza del perro");

const perro1 = new Perro(nombrePerro, razaPerro);
console.log(perro1.mostrarInformacion());

//Método estático
console.log(Perro.obtenerTotalPerro());