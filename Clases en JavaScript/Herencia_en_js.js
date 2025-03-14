//Clase principal
class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }
    //Método
    presentarse(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

//Clase que hereda atributos y metodos de la clase principal
class Alumno extends Persona{
    constructor(nombre, curso){
        //Atributo heredado
        super(nombre);
        //Nuevo atributo (2do)
        this.curso = curso;
    }
    //Método heredado
    presentarse(){
        super.presentarse();
        console.log(`Estoy en el curso de ${this.curso}`);
    }
}

//Objeto
const alumno1 = new Alumno("Juan","POO");
alumno1.presentarse();