# [Flyweight (Легковес)](https://www.youtube.com/watch?v=hlxRecs_r3Y&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=13&ab_channel=webDev)

**Flyweight** - структурный паттерн, который позволяет вместить большее кол-во определенных объектов в выделенную
оперативную память.

Другими словами — он позволяет экономить ресурсы, разделяя общее состояние объектов между собой, вместо 
хранения одинаковых данных в каждом объекте.

Похоже на некое кэширование данных

## Когда нужен

- Когда не хватает оперативной памяти для поддержки всех нужных объектов.

## Пример

```typescript
class Auto {
  constructor(model) {
    this.model = model
  }
}

class AutoFactory {
  constructor() {
    this.models = {}
  }
  
  create(name) {
    let model = this.models[name]
    if (model) return model
    this.models[name] = new Auto(name)
    return this.models[name]
  }
  
  getModels() {
    console.table(this.models)
  }
}

const factory = new AutoFactory()

const bmw = factory.create('BMW')
const audi = factory.create('Audi')
const tesla = factory.create('Tesla')
const blackTesla = factory.create('Tesla')

console.log(factory.getModels())
/**
 * model: 1
 * model: 2
 * model: 3
 * 
 * Object {
 *   Audi: Object { model: "Audi" },
 *   BMW: Object { model: "BMW" },
 *   Tesla: Object { model: "Tesla" },
 * }
 */
```

## Резюме

Flyweight - предназначается для экономии памяти между объектами (посредством вынесения какого-либо общего состояния) в 
отдельную структуру (и обращение к ней по ссылке).
