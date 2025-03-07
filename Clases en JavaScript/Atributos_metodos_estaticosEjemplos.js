//Creación de clase
class Alumno{
    static contador = 0;
    static contador1 = 1
    constructor(nombre, edad, carrera){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        Alumno.contador++;
        Alumno.contador1++;
    }
    //Método
    mostrarInformacion(){
        return `Alumno ${Alumno.contador} = Nombre: ${this.nombre} | Edad: ${this.edad} | Carrera: ${this.carrera}`;
    }
    //Método Estático
    static obtenerTotalAlumnos(){
        return Alumno.contador;
    }
}
console.log(`Registro de los alumnos.`);
//Ingresar la cantidad de alumnos para entrar en una condición
let message = parseInt(prompt(`¿Cuántos alumnos hay en el cuarto?`));
if (message == 4){
    //Ciclo for cuando cumpla esta condición
    for(let i = 0; i < 4; i++){
    //Creación de objetos(alumnos)
    const alumnos = new Alumno(prompt(`Ingresa el nombre del alumno ${Alumno.contador1}.`), prompt(`Ingresa la edad del alumno ${Alumno.contador1}.`), prompt(`Ingresa la carrera del alumno ${Alumno.contador1}.`));
    console.log(alumnos.mostrarInformacion());
    }
    //Llamar método Estático
    console.log(`La cantidad de alumnos es: ` + Alumno.obtenerTotalAlumnos());
} else if (message <= 3) {
    console.log("El cuarto necesita 4 alumnos.");
} else {
    console.log("La cantidad de alumnos ha excedido el cupo del cuarto.");
}

