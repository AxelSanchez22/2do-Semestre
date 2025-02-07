#Clase
class Persona:
    #Atributos
    def __init__ (self, nombre):
        self.nombre = nombre

    #Metodos
    def saludar(self):
        #Forma normal de imprimir
        #print("Hola, soy", self.nombre)
        
        #Forma convencional
        print(f"Hola, soy {self.nombre}")
        
        #Retornando mensaje
        return f"Hola, soy {self.nombre}"

#Objeto
persona1 = Persona("Axel")
mensaje = persona1.saludar()
print(mensaje)