//Creación de clase
class Alumno{
    static contador = 0;
    constructor(nombre, edad, carrera){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        Alumno.contador++;
    }
    mostrarInformacion(){
        return `Nombre: ${this.nombre} | Edad: ${this.edad} | Carrera: ${this.carrera}`;
    }
    static obtenerTotalPersonas(){
        return Alumno.contador;
    }
}
console.log(`Registro de los alumnos.`);
let message = parseInt(prompt(`¿Cuántos alumnos hay en el cuarto?`));
if (message == 4){
    for(let i = 0; i < 4; i++){
    //Creación de objetos(alumnos)
    const personas = new Alumno(prompt(`Ingresa el nombre del alumno.`), prompt(`Ingresa la edad del alumno.`), prompt(`Ingresa la carrera del alumno.`));
    console.log(personas.mostrarInformacion());
    }
    //Método Estático
    console.log(`La cantidad de alumnos es: ` + Alumno.obtenerTotalPersonas());
} else if (message <= 3) {
    console.log("El cuarto necesita 4 alumnos.");
} else{
    console.log("La cantidad de alumnos ha excedido el cupo del cuarto.");
}

