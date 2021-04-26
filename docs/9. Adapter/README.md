# [Adapter (Адаптер)](https://www.youtube.com/watch?v=w6O9Kr41frc&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=10&ab_channel=webDev)

**Adapter** - структурный паттерн проектирования, который оборачивает несовместимый с чем-то объект и 
делает его совместимым. Позволяет объектам с несовместимыми интерфейсами работать вместе.

## Когда нужен

- Когда вы хотите использовать сторонний класс, но его интерфейс не соответствует остальному коду приложения.
- Когда вам нужно использовать несколько существующих подклассов, но в них не хватает какой-то общей функциональности, 
  причём расширить суперкласс вы не можете.
  
## Пример

```typescript
class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr')
  }
}

class EngineV8 {
  complicatedInterface() {
    console.log('Engine V8! - wroom wroom!')
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine
  }
  
  simpleInterface() {
    this.engine.complicatedInterface()
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface()
  }
}

// Engine 2.0
const oldCar = new Auto()
const oldEngine = new Engine2()

oldCar.startEngine(oldEngine)

// Engine V8 with adapter
const adaptedCar = new Auto()
const engineAdapter = new EngineV8Adapter(new EngineV8())

adaptedCar.startEngine(engineAdapter)

// Engine V8 without adapter
const newCar = new Auto()
const newEngine = new EngineV8()

newCar.startEngine(newEngine) // ERROR: несовместимость интерфейсов
```

## Резюме

Адаптер оборачивает объект с уникальным и специфическим внутренним устройством, и подгоняет его под 
использование в уже стандартизированной системе классов. 

Т.е **адаптирует** его специфические свойства и методы под **уже использующиеся**.

Позволяет объектам с несовместимыми интерфейсами работать вместе.
