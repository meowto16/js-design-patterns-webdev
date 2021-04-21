# Prototype (Прототип)

Прототип — это порождающий паттерн, который позволяет **копировать** объекты, не вдаваясь в подробности их реализации.

## Пример

```typescript
class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model
    this.price = price
    this.interior = interior
    this.autopilot = autopilot
  }
  
  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot)
  }
}

const prototypeCar = new TeslaCar('S', 80000, 'black', false)

const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()
const car3 = prototypeCar.produce()

// Changes for particular auto
car1.interior = 'white'
car1.autopilot = true
```

## Когда нужно

Когда нужно создать копию объекта везде, где нам это требуется с минимальными затратами памяти, так как создается
копия на основании уже существующей структуры

Когда ваш код не должен зависеть от классов копируемых объектов.

Чтобы не создавать миллиард подклассов вроде "Тесла машина синяя" или "Тесла машина с автопилотом"
