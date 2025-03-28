//Ejemplo básico
class Perro{
    #raza;
    #nombreCientifico;
    //Clase constructor
    constructor(raza, nombreCientifico){
        //Usamos el setter para definir las variables iniciales
        this.raza = raza;
        this.nombreCientifico = nombreCientifico;
    }
    //Getter para acceder a la propiedad privada
    get raza(){
        return this.#raza; //Retornar la raza
    }
    get nombreCientifico(){
        return this.#nombreCientifico; //Retornar el nombre científico
    }
    //Setter para modificar la propiedad privada
    set raza(nuevaRaza){
        if (!nuevaRaza || nuevaRaza.trim() === "") {
            throw new Error("El nombre no puede estar vacío.");
        }
        this.#raza = nuevaRaza; //Cambiar el valor de raza
    }
    set nombreCientifico(nuevoNombreCientifico){
        if (!nuevoNombreCientifico || nuevoNombreCientifico.trim() === "") {
            throw new Error("El nombre no puede estar vacío.");
        }
        this.#nombreCientifico = nuevoNombreCientifico; //Cambiar el valor de nombre cientifico
    }
    descripcion(){
        console.log(`La raza del perro es ${this.raza} y su nombre científico es ${this.nombreCientifico}.`);
    }
}
//Ejemplo de uso

//Crear perro como objeto
const perro1 = new Perro("dalmata","dalmita");
console.log(perro1.descripcion());
//Cambiar los parámetros del objeto
perro1.raza = "Pug";
perro1.nombreCientifico = "Puggy";
console.log(perro1.descripcion());
