# [Bridge (Мост)](https://www.youtube.com/watch?v=pNVuMif0bc0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=12&ab_channel=webDev)

**Bridge** - структурный паттерн проектирования, который разделяет один или несколько классов на несколько
отдельных иерархий, которые называются *абстракция* или *реализация*, что в свою очередь помогает изменять их
без зависимости друг от друга.

## Когда нужен

- Когда вы хотите разделить монолитный класс, который содержит несколько различных реализаций 
  какой-то функциональности (например, если класс может работать с разными системами баз данных).
- Когда класс нужно расширять в двух независимых плоскостях.
- Когда вы хотите, чтобы реализацию можно было бы изменять во время выполнения программы.

## Пример

```typescript
class Model {
  constructor(color: Color) {
    this.color = color
  }
}

class Color {
  constructor(type) {
    this.type = type
  }

  get() {
    return this.type
  }
}

class BlackColor extends Color {
  constructor() {
    super('dark-black')
  }
}

class SilbrigColor extends Color {
  constructor() {
    super('Silbermettalic')
  }
}

class Audi extends Model {
  constructor(color: Color) {
    super(color)
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`
  }
}

class Bmw extends Model {
  constructor(color: Color) {
    super(color)
  }
  
  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`
  }
}

// We avoided creation of very specific class:
// const blackBmw = new BlackColorBmw()

// Instead
const blackBmw = new Bmw(new BlackColor())
console.log(blackBmw.paint()) // "Auto: Bmw, Color: dark-black"
```

## Резюме

Нужен для разделения неприкасающихся функциональностей в одном классе.

Он позволяет поместить всю реализацию в классы абстракцию и реализацию.
