//Ejemplo 1
console.log("Ejemplo 1 de Herencia en JS");
//Clase principal
class Ingeniero{
    constructor(nombre, anio){
        //Atributos
        this.nombre = nombre;
        this.anio = anio;
    }
    //Método
    presentarse(){
        console.log(`El alumno ${this.nombre} está en el año ${this.anio} de ingeniería.`);
    }
}

//Clase que hereda atributos y metodos de la clase principal
class Alumno extends Ingeniero{
    constructor(nombre, anio, edad){
        //Atributos heredados
        super(nombre, anio);
        //Nuevo atributo (3ro)
        this.edad = edad;
    }
    //Método heredado
    presentarse(){
        super.presentarse();
        console.log(`El alumno ${this.nombre} tiene ${this.edad} años.`);
    }
}

//Objeto
const alumno1 = new Alumno("Juan",3,19);
alumno1.presentarse();
console.log("");

//--------------------------------------------------------------------------------------------

//Ejemplo 2
console.log("Ejemplo 2 de Herencia en JS");
//Clase principal
class Criatura{
    constructor(especie) {
        //Atributo
        this.especie = especie;
    }
    //Método
    descripcion(){
        console.log(`El ${this.especie} vive en el agua.`);
    }
}
//Clase que heredará atributos y métodos de la clase principal
class Pescado extends Criatura{
    constructor(especie, tamanio){
        //Atributo heredado
        super(especie);
        //Nuevo atributo
        this.tamanio = tamanio;
    }
    //Método heredado
    descripcion(){
        super.descripcion();
        console.log(`El ${this.especie} tiene un tamaño de ${this.tamanio} metros.`);
    }
}
//Creación de objeto con parámetros ingresados
let especiePez = prompt("Ingresa la especie del pez.");
let tamanioPez = parseInt(prompt("Ingresa el tamaño del pez."));
const animal1 = new Pescado(especiePez, tamanioPez);
animal1.descripcion();
console.log("");

//--------------------------------------------------------------------------------------------

//Ejemplo 3
console.log("Ejemplo 3 de Herencia en JS");
//Prompt para ingresar la descripción del animal
let carreraIngresada = parseInt(prompt("Seleccione un número para conocer a los alumnos de las carreras. 1=Ingeniería; 2=Nutrición; 3=Enfermería"));
//Clase principal
class Carrera{
    constructor(nacionalidad) {
        //Atributo principal
        this.nacionalidad = nacionalidad;
    }
    //Método principal
    descripcion(){
        if (carreraIngresada == 1){
            console.log(`La mayoría de los alumnos de la carrera de Ingeniería son ${this.nacionalidad}.`);
        } else if (carreraIngresada == 2){
            console.log(`La mayoría de los alumnos de la carrera de Nutrición son ${this.nacionalidad}.`);
        } else if (carreraIngresada == 3){
            console.log(`La mayoría de los alumnos de la carrera de Enfermería son ${this.nacionalidad}.`);
        } else {
            console.log("");
        }
    }
}
//Primera clase que hereda atributos y métodos de la clase principal
class Ingenieria extends Carrera{
    constructor(nacionalidad, satisfaccion){
        //Atributo heredado
        super(nacionalidad);
        //Nuevo atributo para la clase
        this.satisfaccion = satisfaccion;
    }
    //Método heredado
    descripcion(){
        super.descripcion();
        console.log(`Los alumnos de Ingeniería están ${this.satisfaccion} con su carrera.`);
    }
}
//Objeto
const alumnoIngeniero = new Ingenieria("Mexicanos","muy satisfechos");

//Segunda clase que hereda atributos y métodos de la clase principal
class Nutricion extends Carrera{
    constructor(nacionalidad, satisfaccion){
        //Atributo heredado
        super(nacionalidad);
        //Nuevo atributo para la clase
        this.satisfaccion = satisfaccion;
    }
    //Método heredado
    descripcion(){
        super.descripcion();
        console.log(`Los alumnos de Nutrición están ${this.satisfaccion} con su carrera.`);
    }
}
//Objeto
const alumnoNutricion = new Nutricion("Portugueses","poco satisfechos");

//Tercera clase que hereda atributos y métodos de la clase principal
class Enfermeria extends Carrera{
    constructor(nacionalidad, satisfaccion){
        //Atributo heredado
        super(nacionalidad);
        //Nuevo atributo para la clase
        this.satisfaccion = satisfaccion;
    }
    //Método heredado
    descripcion(){
        super.descripcion();
        console.log(`Los alumnos de Enfermería están ${this.satisfaccion} con su carrera.`);
    }
}
//Objeto
const alumnoEnfermeria = new Enfermeria("Brasileños","satisfechos");

//Condiciones para mostrar en la consola el objeto con sus parámetros definidos en los métodos.
if(carreraIngresada == 1){
    console.log(alumnoIngeniero.descripcion());
} else if (carreraIngresada == 2){
    console.log(alumnoNutricion.descripcion());
} else if (carreraIngresada == 3){
    console.log(alumnoEnfermeria.descripcion());
} else {
    console.log("El número ingresado es inválido.");
}