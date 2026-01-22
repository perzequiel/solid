// open closed 

//////////////// 
//  WROOOONG   / 
//////////////// 

// contratos clases
class Ironman {
    name = "ironman"
}
class Spiderman {
    name = "spiderman"
}
class Avengers {
    constructor(ironman, spiderman) {
        this.ironman = ironman
        this.spiderman = spiderman
        // hulk
    }
}


// implementacion
const ironman = new Ironman()
const spiderman = new Spiderman()
const avengers = new Avengers(ironman, spiderman)


















//////////////// 
//  BETTER     / 
//////////////// 

// contratos / clases
class Avenger { 
    constructor(name) {
        this.name = name
    }
}
class Avengers_ {
    constructor(avengers_list) {
        this.avengers_list = avengers_list
    }
}

// implementacion
const ironman_ = new Avenger('ironman')
const spiderman_ = new Avenger('spiderman')
const avengers_ = new Avengers_([ironman, spiderman])


