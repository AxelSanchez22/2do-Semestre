#Clase 1
class Mascota:
    def __init__ (self, mascota, raza, nombre):
        self.mascota = mascota
        self.raza = raza
        self.nombre = nombre
        
print("|Mascotas de los alumnos    |")
print("|---------------------------|")
#Objeto 1
mascotaAxel = Mascota("|Perro |", "|Pug   |", "|Perruno  |")
print(mascotaAxel.mascota, mascotaAxel.raza, mascotaAxel.nombre)
#Objeto 2
mascotaPedro = Mascota("|Gato  |", "|Siames|", "|Gatuvelo |")
print(mascotaPedro.mascota, mascotaPedro.raza, mascotaPedro.nombre)
#Objeto 3
mascotaJuan = Mascota("|Conejo|", "|Feo   |", "|Zanahoria|")
print(mascotaJuan.mascota, mascotaJuan.raza, mascotaJuan.nombre)
print("                         ")
print("                         ")

#Clase 2
class Materia:
    def __init__ (self, clase, docente, hora):
        self.clase = clase
        self.docente = docente
        self.hora = hora
        
print("Materias de segundo semestre IDS")
print("--------------------------------")
#Objeto 1
primerPeriodo = Materia("POO,", "Ing. Ronald,", "Mañana")
print(primerPeriodo.clase, primerPeriodo.docente, primerPeriodo.hora)
#Objeto 2
segundoPeriodo = Materia("Fe y Ciencia,", "Ptr. Nestor,", "Mañana")
print(segundoPeriodo.clase, segundoPeriodo.docente, segundoPeriodo.hora)
#Objeto 3
tercerPeriodo = Materia("Cálculo,", "Ing. Isaac,", "Mañana")
print(tercerPeriodo.clase, tercerPeriodo.docente, tercerPeriodo.hora)
print("                         ")
print("                         ")

#Clase 3
class Celular:
    def __init__ (self, marca, modelo, precio):
        self.marca = marca
        self.modelo = modelo
        self.precio = precio
        
print("Celulares que he tenido.")
print("--------------------------------")
#Objeto 1
celular1 = Celular("Samsung,", "S24,", "$20,000.00")
print(celular1.marca, celular1.modelo, celular1.precio)
#Objeto 2
celular2 = Celular("Huawei,", "Pro 6,", "$1,500.00")
print(celular2.marca, celular2.modelo, celular2.precio)
#Objeto 3
celular3 = Celular("Realme,", "5 Pro,", "$4,000.00")
print(celular3.marca, celular3.modelo, celular3.precio)
print("                         ")
print("                         ")

#Clase 4
class Laptop:
    def __init__ (self, marca, modelo, precio):
        self.marca = marca
        self.modelo = modelo
        self.precio = precio
        
print("Laptops para la escuela")
print("--------------------------------")
#Objeto 1
laptop1 = Laptop("Huawei,", "Matebook D14,", "$21,000.00")
print(laptop1.marca, laptop1.modelo, laptop1.precio)
#Objeto 2
laptop2 = Laptop("HP,", "Victus Gaming 16,", "$23,000.00")
print(laptop2.marca, laptop2.modelo, laptop2.precio)
#Objeto 3
laptop3 = Laptop("Asus,", "ROG Strix G16,", "$33,000.00")
print(laptop3.marca, laptop3.modelo, laptop3.precio)
print("                         ")
print("                         ")

#Clase 5
class Alumnos:
    def __init__ (self, nombre, paterno, materno):
        self.nombre = nombre
        self.paterno = paterno
        self.materno = materno
        
print("Alumnos de segundo semestre IDS")
print("--------------------------------")
#Objeto 1
alumno1 = Alumnos("Axel", "Sanchez", "Valdez")
print(alumno1.nombre, alumno1.paterno, alumno1.materno)
#Objeto 2
alumno2 = Alumnos("Jair", "Lopez", "Perez")
print(alumno2.nombre, alumno2.paterno, alumno2.materno)
#Objeto 3
alumno3 = Alumnos("Moises", "Martinez", "Hernandez")
print(alumno3.nombre, alumno3.paterno, alumno3.materno)
print("                         ")
print("                         ")