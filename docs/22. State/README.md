# [State (Состояние)](https://www.youtube.com/watch?v=W_11rR4UFNw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=23&ab_channel=webDev)

**State** - это поведенческий паттерн проектирования, который позволяет объектам менять свое поведение
в зависимости от состояния.

## Когда нужен

- Когда у вас есть объект, поведение которого кардинально меняется в зависимости от внутреннего состояния, 
  причём типов состояний много, и их код часто меняется.
- Когда код класса содержит множество больших, похожих друг на друга, условных операторов, которые выбирают поведения 
  в зависимости от текущих значений полей класса.
- Когда вы сознательно используете табличную машину состояний, построенную на условных операторах, 
  но вынуждены мириться с дублированием кода для похожих состояний и переходов.

## Пример

```typescript
class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name
    this.nextStatus = nextStatus
  }

  next() {
    return new this.nextStatus()
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping)
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delievered)
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('Delivered', Delivered)
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment()
  }
  
  nextState() {
    this.state = this.state.next()
  }
  
  cancelOrder() {
    this.state.name === 'waitingForPayment'
      ? console.log('Order is canceled!')
      : console.log('Order can not be canceled!')
  }
}

const myOrder = new Order()

console.log(myOrder.state.name)
// Try to cancel order
myOrder.cancelOrder()

myOrder.nextState()
console.log(myOrder.state.name)

myOrder.nextState()
console.log(myOrder.state.name)
```

## Резюме

Основная идея в том, что программа может находиться в одном из нескольких состояний, которые всё время сменяют 
друг друга. 

Набор этих состояний, а также переходов между ними, предопределён и конечен. 
Находясь в разных состояниях, программа может по-разному реагировать на одни и те же события, которые происходят с ней.
