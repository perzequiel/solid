// principle: a class should have an unique responsability / one reason to change
// las funcionalidades no deben estar acopladas (discouple) (code smell)

//////////////// 
//  WROOOONG   / 
//////////////// 
// class Employee {
//     constructor(firstName, lastName, rate, workedHours) {
//         this.firstName = firstName
//         this.LastName = lastName
//         this.rate = rate
//         this.workedHours = workedHours
//     }

//     calculatePayment() {
//         return {
//             fullName: `${this.firstName} ${this.LastName}`,
//             amount: Math.round(this.workedHours * this.rate)
//         }
//     }
// }

//////////////// 
//  BETTER     / 
//////////////// 
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullname() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Financial {
    constructor(employee, rate, workedHours) {
        this.employee = employee
        this.rate = rate
        this.workedHours = workedHours
    }

    calculatePayment() {
        return {
            fullName: this.employee.getFullname(),
            amount: Math.round(this.workedHours * this.rate)
        }
    }
}

const developer = new Employee('Karina', 'Escobar')
const monthPayment = new Financial(developer, 40, 80)
result = monthPayment.calculatePayment()
console.log(result)


// const monthPayment = new Employee('Karina', 'Escobar', 40, 80)
// const result = monthPayment.calculatePayment()
// console.log(result)