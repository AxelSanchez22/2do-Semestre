#Clase 1
class Coche:
    #Metodo 1
    def __init__(self, marca, modelo):
        #Atributos
        self.marca = marca
        self.modelo = modelo

    #Metodo 2
    def acelerar(self):
        return f"El coche {self.marca} {self.modelo} es bueno."
    #Metodo 3
    def frenar(self):
        return f"El coche {self.marca} {self.modelo} es malo"

#Objeto 1
coche1 = Coche("Kia", "Sorento")
#Objeto 2
coche2 = Coche("Volkswagen", "Jetta")

print(coche1.acelerar())  
print(coche1.frenar())    
print(coche2.acelerar())  
print(coche2.frenar())   

#Clase 2
class Mascota:
    #Metodo 1
    def __init__(self, raza, nombre):
        self.raza = raza
        self.nombre = nombre
    #Metodo 2 
    def tipo(self):
        return f"La raza de mascota es {self.raza} y se llama {self.nombre}."
    #Metodo 3
    def dueño(self):
        return f"El dueño del {self.raza} es {dueño}."

print("Ingrese a la persona")
dueño = input()
print("Ingrese a la otra persona")
dueño2 = input()
#Objeto 1
mascota1 = Mascota("Pug", "Kiki")
mensaje1, mensaje2 = mascota1.tipo(), mascota1.dueño()
print(mensaje1, mensaje2)
#Objeto 2
mascota2 = Mascota("Husky", "Koko")
mensaje1, mensaje2 = mascota2.tipo(), mascota2.dueño()
print(mensaje1, mensaje2)

#Clase 3
class Celular:
    #Metodo 1
    def __init__(self, marca, modelo):
        #Atributos
        self.marca = marca
        self.modelo = modelo

    #Metodo 2
    def calidad(self):
        return f"El {self.marca} {self.modelo} es un buen celular."
    #Metodo 3
    def recomendable(self):
        return f"El {self.marca} {self.modelo} es muy caro, asi que no es recomendable."

#Objeto 1
cel1 = Celular("Iphone", "16")
#Objeto 2
cel2 = Celular("Samsung", "S24")

print(cel1.calidad())  
print(cel1.recomendable())    
print(cel2.calidad())  
print(cel2.recomendable())  