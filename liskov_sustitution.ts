// Liskov Sustitution Principle
// a subclass can exchange his class type with his parent

//////////////// 
//  WROOOONG   / 
//////////////// 
abstract class Animal_ {
    abstract walk(): string
    abstract jump(): string
}

class Elephant_ implements Animal_ {
    walk() {
        return "walk as a elephant"
    }
    jump() {
        throw new Error('this Animal cannot jump')
    }
}

const trompita = new Elephant_()
trompita.jump()

//////////////// 
//  BETTER     / 
//////////////// 
abstract class Animal {
    abstract walk(): string
}

abstract class LightWeigthAnimal extends Animal {
    abstract jump(): string
}

class Elephant implements Animal {
    walk() { 
        return "walk as a elephant"
    }
}

class Dog implements LightWeigthAnimal {
    walk() { 
        return "walk as a dog"
    }
    jump() {
        return "jump as a dog"
    }
}

const trompita2 = new Elephant()
const pucho = new Dog()

trompita2.walk()
pucho.jump()
pucho.walk()