# [Memento (Снимок)](https://www.youtube.com/watch?v=kAY-ozumlr4&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=18&ab_channel=webDev)

**Memento** - это поведенческий паттерн проектирования, который позволяет сохранять и 
восстанавливать предыдущее состояние объекта.

## Когда нужен

- Когда вам нужно сохранять мгновенные снимки состояния объекта (или его части), 
  чтобы впоследствии объект можно было восстановить в том же состоянии.
- Когда прямое получение состояния объекта раскрывает приватные детали его реализации, 
  нарушая инкапсуляцию.


## Пример

```typescript
class Memento {
  constructor(value) {
    this.value = value
  }
}

class Caretaker {
  constructor() {
    this.values = []
  }
  
  addMemento(memento: Memento): void {
    this.values.push(memento)
  }
  
  getMemento(index: number) {
    return this.values[index]
  }
}

const creator = {
    save: val => new Memento(val),
    restore: memento => memento.value
}

const careTaker = new Caretaker()
careTaker.addMemento(creator.save('hello'))
careTaker.addMemento(creator.save('hello world'))
careTaker.addMemento(creator.save('hello world!!!'))

console.log(creator.restore(careTaker.getMemento(1))) // "hello world"
```

## Резюме

Данный шаблон помогает сохранять предыдущее состояние компонента даже после того, как он изменился.

