class Perro{
    constructor(raza, nombre){
        this.raza = raza;
        this.nombre = nombre;
    }
    presentar_perro(){
        return `La raza del perro es ${this.raza} y se llama ${this.nombre}.`;
    }
}
const perrito = new Perro("Husky","Maxie");
console.log(perrito.presentar_perro());