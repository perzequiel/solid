// Interface Segregation Principle
// the principle of having different interfaces for different use cases
// instead of having a big one

//////////////// 
//  WROOOONG   / 
//////////////// 
class EmployeeData {
    bonus: number
    salary: number
    rol: string

    constructor(bonus: number, salary: number, rol: string) {
        this.bonus = bonus
        this.salary = salary
        this.rol = rol
    }

    calculateBonus(): number {
        return this.bonus
    }
    calculateSalary(): number {
        return this.salary
    }
    getRol(): string {
        return this.rol
    }
}

//////////////// 
//  BETTER     / 
//////////////// 
interface IEmployeeSalary {
    salary: number
    calculateSalary(): number
}
interface IEmployeeRole {
    rol: string
    getRole(): string
}
interface IEmployeeBonus {
    bonus: number
    calculateBonus(): number
}

interface IEmployeeRegular extends IEmployeeSalary, IEmployeeRole {}

interface IEmployeeWithBonus extends IEmployeeRegular, IEmployeeBonus {}

class Employed implements IEmployeeRegular {
    salary: number
    rol: string

    constructor(salary: number, rol: string) {
        this.salary = salary
        this.rol = rol
    }

    calculateSalary(): number {
        return this.salary
    }
    getRole(): string {
        return this.rol
    }
}

class AtTheVeryTop extends Employed implements IEmployeeWithBonus {
    bonus: number

    constructor(salary: number, rol: string, bonus: number) {
        super(salary, rol)
        this.bonus = bonus
    }

    calculateBonus(): number {
        return this.bonus
    }
}

class Service { 
    call (): IEmployeeRegular {
        const dev = new Employed(5000, 'd')
        const manager = new AtTheVeryTop(10000, 'm', 100)
        return dev
    }
}
