# principle: a class should have an unique responsability / one reason to change
# las funcionalidades no deben estar acopladas (discouple) (code smell)


"""
WRONG
"""
class EmployeeWrong:
    def __init__(self, first_name: str, last_name: str, rate: int, worked_hours: int):
        self.first_name = first_name
        self.last_name = last_name
        self.rate = rate
        self.worked_hours = worked_hours

    def calculate_payment(self):
        return {
            "fullName": f'{self.first_name} {self.last_name}',
            "amount": self.rate * self.worked_hours
        }

"""
BETTER
"""
# class Employee:
# create a new version without breaking SRP


# running process
developer = EmployeeWrong('Perze', 'Gonzalez', 40, 80)
print(developer.calculate_payment())