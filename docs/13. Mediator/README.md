# [Mediator (Посредник)](https://www.youtube.com/watch?v=tWZfcmmGf1w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=14&ab_channel=webDev)

**Mediator** - поведенческий паттерн, который позволяет уменьшить взаимосвязь классов между собой, 
вынося межклассовые связи в *класс-посредник*.

- Позволяет инкапсулировать специфическую логику и переиспользовать компоненты

## Когда нужен

- Когда вам сложно менять некоторые классы из-за того, что они имеют множество хаотичных связей с другими классами.
- Когда вы не можете повторно использовать класс, поскольку он зависит от уймы других классов.
- Когда вам приходится создавать множество подклассов компонентов, 
  чтобы использовать одни и те же компоненты в разных контекстах.

## Пример

```typescript
class OfficialDealer {
  constructor() {
    this.customers = []
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName()

    console.log(`Order name: ${name}. Order auto is ${auto}`)
    console.log(`Additional info: ${info}`)
    this.addToCustomersList(name)
  }

  addToCustomersList(name) {
    this.customers.push(name)
  }

  getCustomersList() {
    return this.customers
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name
    this.dealerMediator = dealerMediator
  }
  
  getName() {
    return this.name
  }
  
  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info)
  }
}

const mediator = new OfficialDealer()

const yauhen = new Customer('Yauhen', mediator)
const valera = new Customer('Valera', mediator)

yauhen.makeOrder('Tesla', 'With autopilot!')

valera.makeOrder('Audi', 'With parktronik!')

console.log(mediator.getCustomersList())
```

## Резюме

**Mediator** нужен для того, чтобы уменьшить связанность классов между собой, и который устанавливает
все необходимые связи только внутри себя.

Благодаря этому, переиспользуемость классов увеличивается в разы.
