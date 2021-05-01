# [Visitor (Посетитель)](https://www.youtube.com/watch?v=dyg13zxD9xw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=20&ab_channel=webDev)

**Visitor** - это поведенческий паттерн проектирования. Добавляет новую функциональность уже существующим
классам.

Делает он это не изменяя исходный код классов.

Он расширяет функциональность класса, не изменяя его первоначальную реализацию

## Когда нужен

- Когда вам нужно выполнить какую-то операцию над всеми элементами сложной структуры объектов, например, деревом.
- Когда над объектами сложной структуры объектов надо выполнять некоторые не связанные между собой операции, 
  но вы не хотите «засорять» классы такими операциями.
- Когда новое поведение имеет смысл только для некоторых классов из существующей иерархии.

## Пример

```typescript
class Auto {
  accept(visitor) {
    visitor(this)
  }
}

class Tesla extends Auto {
  info() {
    return `It is a Tesla car!`
  }
}

class Bmw extends Auto {
  info() {
    return `It is a BMW car!`
  }
}

class Audi extends Auto {
  info() {
    return `It is an Audi car!`
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) {
    auto.export = console.log(`Exported data: ${auto.info()}`)
  }
  if (auto instanceof Bmw) {
    auto.export = console.log(`Exported data: ${auto.info()}`)
  }
  if (auto instanceof Audi) {
    auto.export = console.log(`Exported data: ${auto.info()}`)
  }
}

const tesla = new Tesla()
const bmw = new Bmw()

console.log(tesla.accept(exportVisitor))
console.log(bmw.accept(exportVisitor))
```

## Резюме

У меня был случай когда необходимо было пройтись по дереву из объектов, и применить метод лишь к некоторым из них.

Сейчас я бы это сделал с помощью [итератора](../14.%20Iterator) и [посетителя](./README.md).

В общем нужен, когда над каждым объектом некоторой структуры выполняется одна или более операций, 
при этом нужно определить новую операцию, не изменяя классы объектов.
