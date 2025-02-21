#Clase
class Perro:
    #Constructor
    def __init__(self, raza, nombre):
        self.raza = raza
        self.nombre = nombre
    #Método
    def presentar_perro(self):
        return f"La raza del perro es {self.raza} y se llama {self.nombre}."
#Objeto
perrito = Perro("Husky", "Maxie")
#Imprimir en consola
print(perrito.presentar_perro())