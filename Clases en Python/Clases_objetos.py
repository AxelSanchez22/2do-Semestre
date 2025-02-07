"""
#Creación de una clase
class Persona:
    pass #Variable global(todos los van a tener)

#Creación de objeto1
persona1 = Persona()

#Creación de atributo nombre
persona1.nombre = "Axel"
print(persona1.nombre)
"""

"""
#Creación de una clase
class Persona:
    nombre = "Moi"

#Creación de objeto1
persona1 = Persona()
print(persona1.nombre)
"""

#Creación de una clase
class Persona:
    #Constructor
    def __init__ (self, nombre):
        self.nombre = nombre

#Creación de objeto1
persona1 = Persona("Axel")
print(persona1.nombre)

persona2 = Persona("Moi")
print(persona2.nombre)
