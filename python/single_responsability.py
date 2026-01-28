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
# La clase employee solo definde como se compone un Empleyee.
class Employee:
    def __init__(self, first_name: str, last_name: str, rate: int, worked_hours: int):
        self.first_name = first_name
        self.last_name = last_name
        self.rate = rate
        self.worked_hours = worked_hours
# create a new version without breaking SRP
# Crear una nueva clase que reciba un Employe y calcule su payment

class Calculate_payment():
    def calculate(self, employee: Employee):
        full_name = f'{employee.first_name} {employee.last_name}'
        amount = employee.rate * employee.worked_hours
        return {
            "fullName": full_name,
            "amount": amount
        }

# Instanciamos al empleado (Solo datos)
developer = Employee('Perze', 'Gonzalez', 40, 80)

# Instanciamos al calculador
calculator = Calculate_payment()

# Le pasamos el empleado al calculador
payment_data = calculator.calculate(developer)

print(payment_data)

# running process
developer = EmployeeWrong('Perze', 'Gonzalez', 40, 80)
print(developer.calculate_payment())
