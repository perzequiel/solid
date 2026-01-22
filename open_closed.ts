// Open Closed Principle
// it means that the class is open to extends and close to change

//////////////// 
//  WROOOONG   / 
//////////////// 
class Superhero_ {
    fly(): string {
        return "fly"
    }
    superStrength(): string {
        return "super strength"
    }

    // xRayVision // it is broken open closed principle
    // superJump
    // invisbility
}

// const superman = new Superhero_()
// superman.fly()
// superman.superStrength()

// const hulk = new Superhero_()
// hulk.fly()

//////////////// 
//  BETTER     / 
//////////////// 
abstract class SuperSkill {
    abstract do(): string
}

class Fly implements SuperSkill {
    do(): string {
        return 'fly'
    }
}

class SuperStrength implements SuperSkill {
    do(): string {
        return 'super strength'
    }
}

class Invisbility implements SuperSkill {
    do(): string {
        return 'invisbility'
    }
}

class Superhero {
    superSkills: SuperSkill[]

    constructor(superSkills: SuperSkill[]) {
        this.superSkills = superSkills
    }
}

const fly = new Fly()
const superst = new SuperStrength()

const superman = new Superhero([fly, superst])

const hulk = new Superhero([superst])

console.log('superman => ', superman.superSkills)
console.log('hulk => ', hulk.superSkills)

