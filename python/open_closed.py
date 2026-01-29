# Open Closed Principle
# it means that the class is open to extends and close to change

"""
WRONG
"""
class SuperHeroWrong:
    def __init__(self, name):
        self.name = name

    def fly(self) -> str:
        return f'{self.name} -> flying'
    
    def super_strength(self) -> str:
        return f'{self.name} -> super strength'
    

"""
BETTER
"""
# class SuperHero:
# create a new version without breaking OCP

# Clase de poderes
class PowerManager:
    def __init__(self, skills_array):
        self.skills = skills_array

    def execute(self):
        if not self.skills:
            return "no tiene habilidades asignadas."
        return "usando " + " y ".join(self.skills)

# La clase Padre (SuperHero)
class SuperHero:
    def __init__(self, name, skills_list):
        self.name = name
        self.super_poder = PowerManager(skills_list)

    def activar_superPoder(self):
        return f"{self.name} está {self.super_poder.execute()}"
        
# Hago que el nombre y las habilidades del SuperHero las elija el usuario que instancia, cosa de que si quiere hacer un 
# SuperHero nuevo llamado SuperMono que puede programar, lo pueda hacer.


# running process
superman = SuperHeroWrong('superman')
print(superman.fly())
print(superman.super_strength())

hulk = SuperHeroWrong('hulk')
print(hulk.super_strength())
### ???? fix it
print(hulk.fly())

 # what happen if I need to and invisible woman? how to add invisibility just for her?
