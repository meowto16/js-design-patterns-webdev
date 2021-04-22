# [Builder (Строитель)](https://www.youtube.com/watch?v=P36gibfPaXs&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=6&ab_channel=webDev)

**Builder** - структурный паттерн проектирования, используется для создания объектов со сложными
состояниями.

## Пример

```typescript
class Car {
  constructor() {
    this.autoPilot = false
    this.parktronic = false
    this.signaling = false
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car()
  }
  
  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot
    return this
  }
  
  addParktronic(parktronic) {
    this.car.parktronic = parktronic
    return this
  }
  
  addSignaling(signaling) {
    this.car.signaling = signaling
    return this
  }
  
  updateEngine(engige) {
    this.car.engine = engine
    return this
  }
  
  build () {
    return this.car
  }
}

const myCar = new CarBuilder()
                .addAutoPilot(true)
                .addParktronic(true)
                .updateEngine('V8')
                .build()
```

## Когда нужно

- Когда процесс инстанцирования состоит из нескольких шагов
- Когда объект существует в разных вариациях.

## Резюме

Данный паттерн в очень удобной форме позволяет создавать различные конфигурации объектов, не засоряя исходный конструктор
дополнительной логикой.

В целом все понятно. Пример угарный конечно. 

Паттерн очень хорош, когда необходимо создать также объект, придерживаясь
везде одного интерфейса. Условно говоря, чтобы не создавать объект руками, и ТЕМ БОЛЕЕ в конструкторе что-то
городить, а сделать просто легкие и читаемые методы, которые **поэтапно** соберут что тебе нужно.
