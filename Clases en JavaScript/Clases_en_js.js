//Clase 1
class Mascota{
    constructor(mascota, raza, nombre){
        this.mascota = mascota;
        this.raza = raza;
        this.nombre = nombre;
    }
}
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