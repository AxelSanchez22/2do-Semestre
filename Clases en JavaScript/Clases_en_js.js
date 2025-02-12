//Clase 1
class Mascota{
    constructor(mascota, raza, nombre){
        this.mascota = mascota;
        this.raza = raza;
        this.nombre = nombre;
    }
}
//Objeto
const mascotaAxel = new Mascota("Perro","Pug","Perruno");
console.log(mascotaAxel.mascota, mascotaAxel.raza, mascotaAxel.nombre);

//Clase 2
class Celular{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    calidad(){
        return `El ${this.marca} ${this.modelo} es un buen celular.`;
    }
    recomendable(){
        return `El ${this.marca} ${this.modelo} es muy caro, asi que no es recomendable.`;
    }
}
const cel1 = new Celular("Iphone","16 Pro");
console.log(cel1.calidad(), cel1.recomendable());

class Persona{
    //Atributos
    constructor(nombre){
        this.nombre = nombre;
    }
    //Métodos
    tipo(){
        return `La raza de mascota es ${self.raza} y se llama ${self.nombre}.`
    }
    recomendable(){
        return `El dueño del ${self.raza} es ${dueño}.`
    }
}


console.log("Ingrese a la persona")
dueño = input()

//Objeto
mascota1 = Mascota("Pug", "Kiki")
mensaje2, mensaje1 = mascota1.tipo(), mascota1.dueño()
print(mensaje1, mensaje2)
