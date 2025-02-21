class Mascota:
    def __init__(self, raza, nombre):
        self.raza = raza
        self.nombre = nombre
   
    #Métodos    
    def tipo(self):
        return f"La raza de mascota es {self.raza} y se llama {self.nombre}."
    
    def dueño(self):
        return f"El dueño del {self.raza} es {dueño}."

print("Ingrese a la persona")
dueño = input()

#Objeto
mascota1 = Mascota("Pug", "Kiki")
mensaje2, mensaje1 = mascota1.tipo(), mascota1.dueño()
print(mensaje1, mensaje2)

class Ropa:
    def __init__(self, talla):
        self.talla = talla

ropa1 = Ropa("vestido")
print(ropa1.talla)