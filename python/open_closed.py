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



# running process
superman = SuperHeroWrong('superman')
print(superman.fly())
print(superman.super_strength())

hulk = SuperHeroWrong('hulk')
print(hulk.super_strength())
### ???? fix it
print(hulk.fly())

 # what happen if I need to and invisible woman? how to add invisibility just for her?