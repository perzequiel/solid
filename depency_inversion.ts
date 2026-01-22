// Dependency Inversion Principle
// the high-level module should not depend on low-level modules, instead both should depend on abstractions.

//////////////// 
//  WROOOONG   / 
//////////////// 
class Cart_ {
    creditCard: CreditCard_ = new CreditCard_()
    cash: Cash_ = new Cash_()

    constructor(creditcard: CreditCard_, cash: Cash_) {
        this.creditCard = creditcard
        this.cash = cash
    }

    checkout(): string {
        return this.creditCard.createPayment()
    }
}

class CreditCard_ {
    createPayment(): string {
        return 'card payment'
    }
}
class Cash_ {
    createPayment(): string {
        return 'cash payment'
    }
}

// const visa = new CreditCard_()
// const bbva = new Cash_()

// const carrito = new Cart_(visa, bbva)
// carrito.checkout()

//////////////// 
//  BETTER     / 
//////////////// 

// interfaces
interface IPaymentMethod {
    createPayment(): string
}

// cart
class Cart {
    private paymentMethod: IPaymentMethod;

    constructor(paymentMethod: IPaymentMethod) {
        this.paymentMethod = paymentMethod
    }
    checkout(): string {
        return this.paymentMethod.createPayment()
    }
}

// payment methods
class CreditCard implements IPaymentMethod {
    createPayment(): string {
        return 'card payment'
    }
}
class Cash implements IPaymentMethod {
    createPayment(): string {
        return 'cash payment'
    }
}

class Cryptos implements IPaymentMethod {
    createPayment(): string {
        return 'crypto payment'
    }
}

const cryptos = new Cryptos()
const carritos = new Cart(cryptos)
carritos.checkout()


