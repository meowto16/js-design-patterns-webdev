# [Chain of responsibility (цепочка обязанностей)](https://www.youtube.com/watch?v=stpzkOFoWdY&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=16&ab_channel=webDev)

**Chain of responsibility** - это поведенческий паттерн, который позволяет передавать 
запросы последовательно, по цепочке обработчиков.

Каждый последующий обработчик решает - может ли он сам обработать запрос, либо его нужно передать дальше по цепочке.

## Когда нужен

- Когда программа должна обрабатывать разнообразные запросы несколькими способами, но заранее неизвестно, 
  какие конкретно запросы будут приходить и какие обработчики для них понадобятся.
- Когда важно, чтобы обработчики выполнялись один за другим в строгом порядке.
- Когда набор объектов, способных обработать запрос, должен задаваться динамически.

## Пример

```typescript
class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`)
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`)
    } else {
      console.log(`Unfortunately, not enough money`)
    }
  }
  
  canPay(amount) {
    return this.balance >= amount
  }
  
  setNext(account) {
    this.incomer = account
  }
}

class Master extends Account {
  constructor(balance) {
    super()
    this.name = 'Master Card'
    this.balance = balance
  }
}

class Paypal extends Account {
  constructor(balance) {
    super()
    this.name = 'Paypal'
    this.balance = balance
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super()
    this.name = 'Qiwi'
    this.balance = balance
  }
}

const master = new Master(100)
const paypal = new Paypal(200)
const qiwi = new Qiwi(500)

master.setNext(paypal)
paypal.setNext(qiwi)

// Start payment
master.pay(438)
/**
 * Cannot pay using Master Card
 * Cannot pay using Paypal
 * Padi 438 using Qiwi
 */
```

## Резюме

В целом паттерн более чем понятен. Особенно исходя из примера.

Мы просто указываем обработчиков (а точнее их очередность). 
И потом пробуем запустить проход по цепочке.

Кто сможет - обработает.

+ Я так понял, что есть два варианта:
1) Прерывает цепочку если проверка прошла. Обрабатывает сам
2) Прерывает цепочку если проверка не прошла. Обрабатывает последний обработчик.

Для второго варианта мне напоминает декораторы в `class-validator`, типа:

```typescript
@IsString()
@Length(1,10)
code: string
```

