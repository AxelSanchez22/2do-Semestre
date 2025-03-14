/*
class Animal{
    constructor(especie) {
        this.especie = especie;
    }
    descripcion(){
        console.log(`El ${this.especie} vive en el agua.`);
    }
}

class Pez extends Animal{
    constructor(especie, tamanio){
        super(especie)
        this.tamanio = tamanio;
    }
    descripcion(){
        super.descripcion();
        console.log(`El ${this.especie} tiene un tamaño de ${this.tamanio} metros`);
    }
}
let especiePez = prompt("Ingresa la especie del pez.");
let tamanioPez = parseInt(prompt("Ingresa el tamaño del pez."));
const animal1 = new Pez(especiePez, tamanioPez);
animal1.descripcion(); 
*/

class Animal{
    constructor(especie) {
        this.especie = especie;
    }
    descripcion(){
        if (animal == 1){
            console.log(`El ${this.especie} vive en el agua.`);
        } else if (animal == 2){
            console.log(`El ${this.especie} vive en la tierra.`);
        } else if (animal == 3){
            console.log(`El ${this.especie} vive en las montañas.`);
        } else {
            console.log("");
        }
    }
}

class Pez extends Animal{
    constructor(especie, tamanio){
        super(especie)
        this.tamanio = tamanio;
    }
    descripcion(){
        super.descripcion();
        console.log(`El Tiburón ${this.especie} tiene un tamaño de ${this.tamanio} metros.`);
    }
}
const tiburon1 = new Pez("Martillo",10);


class Reptil extends Animal{
    constructor(especie, tamanio){
        super(especie)
        this.tamanio = tamanio;
    }
    descripcion(){
        super.descripcion();
        console.log(`La Serpiente ${this.especie} tiene un tamaño de ${this.tamanio} metros.`);
    }
}
const serpiente1 = new Reptil("Anaconda",3);


class Ave extends Animal{
    constructor(especie, tamanio){
        super(especie)
        this.tamanio = tamanio;
    }
    descripcion(){
        super.descripcion();
        console.log(`La Águila ${this.especie} tiene un tamaño de ${this.tamanio} metros.`);
    }
}
const aguila1 = new Ave("Calva",7);


let animal = parseInt(prompt("Seleccione un número: 1=Tiburón; 2=Serpiente; 3=Águila"));
if(animal == 1){
    console.log(tiburon1.descripcion());
} else if (animal == 2){
    console.log(serpiente1.descripcion());
} else if (animal == 3){
    console.log(aguila1.descripcion());
} else {
    console.log("El número ingresado es inválido.");
}