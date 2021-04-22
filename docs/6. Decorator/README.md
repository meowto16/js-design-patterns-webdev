# [Decorator (Декоратор)](https://www.youtube.com/watch?v=gXvKHKQB2DI&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=7&ab_channel=webDev)

**Decorator** - структурный паттерн проектирования, добавляет объектам новые свойства и методы.

![1. Decorator example](./img/1.%20Decorator%20example.png)

## Пример

```typescript
class Car {
  constructor() {
    this.price = 10000
    this.model = 'Car'
  }

  getPrice() {
    return this.price
  }

  getDescription() {
    return this.model
  }
}

class Tesla extends Car {
  constructor() {
    super()
    this.price = 25000
    this.model = 'Tesla'
  }
}

class Autopilot {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 5000
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`
  }
}

class Parktronic {
  constructor(car) {
    this.car = car
  }
  
  getPrice() {
    return this.car.getPrice() + 5000
  }
  
  getDescription() {
    return `${this.car.getDescription()} with parktronic`
  }
}

let tesla = new Tesla()
tesla = new Autopilot(tesla)
tesla = new Parktronic(tesla)

console.log(tesla.getPrice(), tesla.getDescription())
// 33000 "Tesla with autopilot with parktronic"

let tesla2 = new Tesla()
tesla2 = new Autopilot(tesla)
console.log(tesla2.getPrice(), tesla2.getDescription())
// 30000 "Tesla with autopilot"
```

## Когда нужно

- Для добавления новой функциональности объектам, без необходимости инициализировать это поведение по-умолчанию
- Нет необходимости создавать огромное кол-во подклассов

## Резюме

Пример довольно сумбурный конечно. 

Для меня более привычно понимание декораторов как callback-функций, которые возвращают
декорированный объект (массив, функцию, и т.д)
